
import React, { Component } from 'react';
import { StyleSheet, View, Text, SafeAreaView, TouchableOpacity, ActivityIndicator, Image } from 'react-native';
import { connect } from 'react-redux'
import { Icon } from 'react-native-elements'
import { bindActionCreators } from 'redux'
import navigatorService from './../helpers/NavigationService'
import { colors, tipografy, normalizeWidPx } from './../helpers/Style'
import Requests from './../shared/Requests'
import { mkUriImage } from './../helpers/FnUtils'

const styles = StyleSheet.create({
    containerSafeAreaView: {
        flex: 1,
        backgroundColor: colors.black
    },
    centered: {
        alignItems: 'center',
        justifyContent: 'center'
    },
    container: {
        flex: 1,
        padding: normalizeWidPx(10)
    },
    txt: {
        color: colors.white
    },
    imagemFilme: {
        width: normalizeWidPx(130),
        height: normalizeWidPx(195),
    },
    row: {
        flexDirection: 'row'
    },
    smallMargin: {
        padding: normalizeWidPx(10),
        flex: 1,
        justifyContent: 'space-between'
    },
    txtTitle: {
        color: colors.white,
        fontSize: tipografy.sizeTitle02,
        textAlign: 'center',
        marginBottom: normalizeWidPx(8)
    },
    txtDate: {
        color: colors.white,
        textAlign: 'center'
    },
    txtLink: {
        color: colors.gold,
        fontSize: tipografy.sizeMini,
        textAlign: 'center',
        marginTop: normalizeWidPx(12)
    },
    txtGenero: {
        color: colors.white,
        fontSize: tipografy.sizeMini,
        marginTop: normalizeWidPx(4)
    },
    txtNota: {
        color: colors.white,
        fontSize: tipografy.sizeSubTitle
    }


});


class Home extends Component {
    state = {
        filme: null
    };
    componentDidMount() {
        const filme = this.props.navigation.getParam('filme')
        Requests.detalhesFilme(filme.id).then(r => {
            this.setState({ filme: r })
        }).catch(err => {
            console.log(err)
        })
    }

    render() {
        const { filme } = this.state
        if (!filme) {
            return (
                <SafeAreaView style={styles.containerSafeAreaView}>
                    <View style={[styles.container, styles.centered]}>
                        <ActivityIndicator size={normalizeWidPx(50)} />
                    </View>
                </SafeAreaView>
            )
        }

        return (
            <SafeAreaView style={styles.containerSafeAreaView}>
                <View style={styles.container}>
                    <View style={styles.row}>
                        <Image style={styles.imagemFilme} source={mkUriImage(filme.poster_path)} />
                        <View style={styles.smallMargin}>
                            <View>
                                <Text style={styles.txtTitle}>{filme.title}</Text>
                                <Text style={styles.txtDate}>{new Date(filme.release_date).toLocaleDateString('pt-BR')}</Text>
                            </View>
                            <Text style={styles.txtLink}>{filme.homepage}</Text>
                            <Text style={styles.txtGenero}>
                                {
                                    filme.genres.map((genero, index) => (
                                        <Text key={index}>{`${genero.name}${filme.genres[++index] ? ', ' : ''}`}</Text>
                                    ))
                                }
                            </Text>
                            <View style={[styles.row, { alignItems: 'center' }]}>
                                <Icon name='star' size={tipografy.sizeIcon} color={colors.white} />
                                <Text style={styles.txtNota}>{filme.vote_average}</Text>
                            </View>
                        </View>


                    </View>
                </View>
            </SafeAreaView>
        )
    }
}

const mapStateToProps = () => ({
})

const mapDispatchToProps = dispatch => bindActionCreators({}, dispatch)


export default connect(mapStateToProps, mapDispatchToProps)(Home)

//  <Text style={styles.txt} onPress={() => navigatorService.navigate('Home')}>
//                         go to Home
//                     </Text>
//                     <Text style={styles.txt} onPress={() => navigatorService.navigate('Search')}>
//                         go to Search
//                     </Text> 