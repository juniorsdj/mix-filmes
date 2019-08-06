
import React, { Component } from 'react';
import { StyleSheet, View, Text, ScrollView, ActivityIndicator, SafeAreaView, Image, ImageBackground } from 'react-native';
import { connect } from 'react-redux'
import { Icon } from 'react-native-elements'
import { bindActionCreators } from 'redux'
import { mkUriImage } from './../helpers/FnUtils'
import navigatorService from './../helpers/NavigationService'
import { colors, normalizeWidPx, tipografy, WIDTH_SCREEN, WIDTH_SCREEN_PERCENT } from './../helpers/Style'
import Requests from './../shared/Requests'
import { HeaderContainer } from './../helpers/SharedComponents'
import { TouchableWithoutFeedback } from 'react-native-gesture-handler'

const SIZE_IMAGE_PAGE = (WIDTH_SCREEN - normalizeWidPx(24))
const styles = StyleSheet.create({
    containerSafeAreaView: {
        flex: 1,
        backgroundColor: colors.black
    },
    container: {
        flex: 1,
        paddingVertical: normalizeWidPx(20),
        paddingHorizontal: normalizeWidPx(12)
    },
    containerTela: {
        marginVertical: normalizeWidPx(14)
    },
    containerTitle: {
        fontSize: tipografy.sizeTitle02,
        color: colors.white
    },
    containerLancamentos: {
        flexDirection: 'row'
    },
    imageLancamentos: {
        height: WIDTH_SCREEN_PERCENT(54),
        width: SIZE_IMAGE_PAGE,
        resizeMode: 'stretch',
        justifyContent: 'flex-end',
        alignItems: 'flex-start'
    },
    titleFilmeLancamento: {
        color: colors.gold,
        padding: normalizeWidPx(8),
        backgroundColor: colors.backgroundGray
    },
    btnImage: {
        flex: 1,
        justifyContent: 'flex-end',

    },
    centered: {
        justifyContent: 'center',
        alignItems: 'center',
        flex:1
    }

});


class Home extends Component {
    state = {
        filmesLancamentos: [],
        filmesPopulares: [],
        atoresPopulares: [],
    };

    componentDidMount() {
        this.requestFilmesLancamentos()
        this.requestFilmesMaisPopulares()
        this.requestAtoresPopulares()
        this.loopImagesDescubra()


    }


    loopImagesDescubra() {
        let i
        setInterval(() => {
            if (!i || i > 4) {
                i = 0
            }
            this.scrollview.scrollTo({ x: (i * SIZE_IMAGE_PAGE), y: 5, animated: true })
            i = i + 1
        }, 4000)
    }

    requestFilmesLancamentos() {
        Requests.discoverFilmesLancamento().then(r => {
            const filmesLancamentos = []
            for (let index = 0; index < 5; index++) {
                filmesLancamentos.push(r.results[index])
            }
            this.setState({ filmesLancamentos })
        }).catch(
            err => {
                console.log(err)
            }
        )
    }

    requestFilmesMaisPopulares() {
        Requests.discoverFilmesMaisPopulares().then(r => {
            this.setState({ filmesPopulares: r.results })
        }).catch(err => {
            console.log(err)
        })
    }


    requestAtoresPopulares() {
        Requests.discoverAtoresMaisPopulares().then(r => {
            this.setState({ atoresPopulares: r.results })
        }).catch(err => {
            console.log(err)
        })
    }

    renderContainerDescubra() {
        const { filmesLancamentos } = this.state
        return (
            <View style={styles.containerTela}>
                <Text style={styles.containerTitle}>Descubra</Text>

                <ScrollView style={styles.containerLancamentos}
                    ref={(ref) => this.scrollview = ref}
                    keyboardShouldPersistTaps='always'
                    horizontal
                    pagingEnabled
                >
                    {
                        filmesLancamentos.length > 0 ?
                            filmesLancamentos.map((filme, index) => (
                                <ImageBackground key={index} style={styles.imageLancamentos} source={mkUriImage(filme.backdrop_path)}>
                                    <TouchableWithoutFeedback style={styles.btnImage} onPress={() => navigatorService.navigate('Detalhes', {
                                        filme
                                    })}>
                                        <Text style={styles.titleFilmeLancamento}> {filme.title}</Text>
                                    </TouchableWithoutFeedback>
                                </ImageBackground>
                            )) :
                            (
                                <View style={[styles.imageLancamentos, styles.centered]}>
                                    <ActivityIndicator size={tipografy.sizeIcon} />
                                </View>
                            )

                    }
                </ScrollView>
            </View>
        )
    }
    render() {
        const { atoresPopulares, filmesPopulares } = this.state




        return (
            <SafeAreaView style={styles.containerSafeAreaView}>
                <ScrollView style={styles.container}>
                    {this.renderContainerDescubra()}
                    <View style={styles.containerTela}>
                        <HeaderContainer title='Filmes Populares' action={() => navigatorService.navigate('Search', {
                            lista: filmesPopulares
                        })} />
                    </View>
                    <View style={styles.containerTela}>
                        <HeaderContainer title='Atores/Atrizes' action={() => navigatorService.navigate('Search', {
                            lista: atoresPopulares
                        })} />
                    </View>


                </ScrollView>
            </SafeAreaView>
        )
    }
}

const mapStateToProps = () => ({
})

const mapDispatchToProps = dispatch => bindActionCreators({}, dispatch)


export default connect(mapStateToProps, mapDispatchToProps)(Home)