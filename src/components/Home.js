
import React, { Component } from 'react';
import { StyleSheet, View, Text, ScrollView, TouchableOpacity, SafeAreaView, Image, ImageBackground } from 'react-native';
import { connect } from 'react-redux'
import { Icon } from 'react-native-elements'
import { bindActionCreators } from 'redux'
import { mkUriImage } from './../helpers/FnUtils'
import navigatorService from './../helpers/NavigationService'
import { colors, normalizeWidPx, tipografy, WIDTH_SCREEN, WIDTH_SCREEN_PERCENT } from './../helpers/Style'
import Requests from './../shared/Requests'
import { TouchableWithoutFeedback } from 'react-native-gesture-handler';



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
    txt: {
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
    verMais: {
        fontSize: tipografy.sizeBody,
        color: colors.gold,
    },
    rowCentered: {
        flexDirection: 'row',
        alignItems: 'center'
    },
    spaceBetween: {
        justifyContent: 'space-between'
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

    render() {
        const { filmesLancamentos, atoresPopulares, filmesPopulares } = this.state




        return (
            <SafeAreaView style={styles.containerSafeAreaView}>
                <View style={styles.container}>
                    <View style={styles.containerTela}>
                        <Text style={styles.containerTitle}>Descubra</Text>
                        <ScrollView style={styles.containerLancamentos}
                            ref={(ref) => this.scrollview = ref}
                            keyboardShouldPersistTaps='always'
                            horizontal
                            pagingEnabled
                        >
                            {
                                filmesLancamentos.map((filme, index) => (
                                    <ImageBackground key={index} style={styles.imageLancamentos} source={mkUriImage(filme.backdrop_path)}>
                                        <TouchableWithoutFeedback style={styles.btnImage} onPress={() => navigatorService.navigate('Detalhes', {
                                            filme
                                        })}>
                                            <Text style={styles.titleFilmeLancamento}> {filme.title}</Text>
                                        </TouchableWithoutFeedback>
                                    </ImageBackground>
                                ))

                            }
                        </ScrollView>
                    </View>
                    <View style={styles.containerTela}>
                        <View style={[styles.rowCentered, styles.spaceBetween]}>
                            <Text style={styles.containerTitle}>Filmes Populares</Text>
                            <TouchableWithoutFeedback style={styles.rowCentered} onPress={() => navigatorService.navigate('Search', {
                                lista: filmesPopulares
                            })}>
                                <Text style={styles.verMais}>Ver mais</Text>
                                <Icon name='chevron-right' color={colors.gold} size={tipografy.sizeIcon} />
                            </TouchableWithoutFeedback>

                        </View>
                        

                    </View>
                    <View style={styles.containerTela}>
                        <Text style={styles.containerTitle}>Atores/Atrizes</Text>
                        <Text style={styles.txt}>fim</Text>
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