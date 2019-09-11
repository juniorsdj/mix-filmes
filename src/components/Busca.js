
import React, { Component } from 'react';
import { StyleSheet, View, FlatList, TextInput, Text, SafeAreaView, Image, ActivityIndicator } from 'react-native';
import { connect } from 'react-redux'
import _ from 'lodash'
import navigatorService from './../helpers/NavigationService'
import { bindActionCreators } from 'redux'
import { colors, normalizeWidPx, tipografy } from './../helpers/Style'
import Requests from './../shared/Requests'
import { mkUriImage } from './../helpers/FnUtils'
import { TouchableWithoutFeedback } from 'react-native-gesture-handler'

const styles = StyleSheet.create({
    containerSafeAreaView: {
        flex: 1,
        backgroundColor: colors.black
    },
    container: {
        flex: 1
    },
    txtQtdResultados: {
        color: colors.white,
        fontSize: tipografy.sizeMini,
        marginHorizontal: normalizeWidPx(40),
    },
    inputSearch: {
        marginVertical: normalizeWidPx(10),
        height: normalizeWidPx(34),
        backgroundColor: colors.backgroundGray,
        marginHorizontal: normalizeWidPx(40),
        color: colors.white,
        paddingHorizontal: normalizeWidPx(30)
    },
    imagemVertical: {
        width: normalizeWidPx(99),
        height: normalizeWidPx(144),
        marginVertical: normalizeWidPx(3),
        marginHorizontal: normalizeWidPx(6),
    },
    boxFilme: {
        // flexDirection: 'row',
        // flex: 1,
        justifyContent: 'space-around',

        // flexWrap: 'wrap'
    },
    loading: {
        position: 'absolute',
        right: 50,
        top: 14,
        alignItems: 'center',
        justifyContent: 'center'
    },
    loadingFooter: {
        justifyContent: 'center',
        alignItems: 'center',
        marginVertical: normalizeWidPx(10)
    }
});


class Home extends Component {
    state = {
        results: [],
        search: '',
        totalPages: 0,
        totalCount: 0,
        page: 0,
        loading: false
    };

    componentDidMount() {
        const lista = this.props.navigation.getParam('lista')
        if (lista) {
            this.setState({ results: lista })
        }

        this.debounce = _.debounce((value) => this.requestBuscaByName(value), 300)
    }

    requestBuscaByName(nome, page) {
        this.setState({ loading: true })
        if (!nome.trim()) {
            this.setState({
                results: [],
                totalPages: 1,
                totalCount: 0,
                loading: false,
                page: 0
            })
        } else {
            Requests.procurarFilmeByName(nome, page).then(r => {
                let results
                if (!!page) {
                    results = this.state.results.concat(r.results)
                } else {
                    results = r.results
                }

                this.setState({
                    results,
                    totalPages: r.total_pages,
                    totalCount: r.total_results,
                    page: r.page
                })
                this.setState({ loading: false })
            }).catch(err => {
                console.log(err)
                this.setState({ loading: false })
            })
        }
    }

    carregarMaisFilmes() {
        const { totalPages, page, text, } = this.state
        if (page >= totalPages)
            return null
        return this.requestBuscaByName(text, page + 1)
    }
    renderFilme(item) {
        const filme = item.item
        if (!filme.poster_path)
            return null

        return (
            <TouchableWithoutFeedback onPress={() => navigatorService.navigate('Detalhes', {
                filme
            })} >
                <Image style={styles.imagemVertical} source={mkUriImage(filme.poster_path)} />
            </TouchableWithoutFeedback>
        )

    }

    renderFooter = () => {
        if (!this.state.loading) return null;
        return (
            <View style={styles.loadingFooter}>
                <ActivityIndicator size='large' />
            </View>
        );
    }

    render() {
        const { results, loading, totalCount, } = this.state
        return (
            <SafeAreaView style={styles.containerSafeAreaView}>
                <View style={styles.container}>
                    <TextInput
                        style={styles.inputSearch}
                        onChangeText={(text) => {
                            this.debounce(text)
                            this.setState({ text })
                        }}

                        value={this.state.text}
                    />
                    {
                        !!totalCount && <Text style={styles.txtQtdResultados}>{`${totalCount} resultados`}</Text>

                    }

                    {
                        loading && <ActivityIndicator style={styles.loading} size={tipografy.sizeIcon} />
                    }
                    <FlatList
                        keyboardShouldPersistTaps='always'
                        contentContainerStyle={styles.boxFilme}
                        data={results}
                        numColumns={3}
                        renderItem={this.renderFilme}
                        keyExtractor={item => `${item.id}${Math.random()}`}
                        onEndReached={this.carregarMaisFilmes.bind(this)}
                        onEndReachedThreshold={0.1}
                        ListFooterComponent={this.renderFooter}
                    />
                    {/* <ScrollView
                        keyboardShouldPersistTaps='always'
                    >
                        <View style={styles.boxFilme}>
                            {
                                results.map(filme => (
                                    filme.poster_path &&
                                    <TouchableWithoutFeedback key={filme.id} onPress={() => navigatorService.navigate('Detalhes', {
                                        filme
                                    })} >
                                        <Image style={styles.imagemVertical} source={mkUriImage(filme.poster_path)} />
                                    </TouchableWithoutFeedback>

                                ))
                            }
                        </View>
                    </ScrollView> */}

                </View>
            </SafeAreaView>
        )
    }
}

const mapStateToProps = () => ({
})

const mapDispatchToProps = dispatch => bindActionCreators({}, dispatch)


export default connect(mapStateToProps, mapDispatchToProps)(Home)