
import React, { Component } from 'react';
import { StyleSheet, View, Text, TouchableOpacity, SafeAreaView } from 'react-native';
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import navigatorService from './../helpers/NavigationService'
import { colors, normalizeWidPx, tipografy } from './../helpers/Style'
import Requests from './../shared/Requests'
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
        flex: 1
    },
    containerTitle: {
        fontSize: tipografy.sizeTitle02,
        color: colors.white
    },
    txt: {
        color: colors.white
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


        console.log(filmesLancamentos)
        console.log(atoresPopulares)
        console.log(filmesPopulares)


        return (
            <SafeAreaView style={styles.containerSafeAreaView}>
                <View style={styles.container}>
                    <View style={styles.containerTela}>
                        <Text style={styles.containerTitle}>Descubra</Text>
                    </View>
                    <View style={styles.containerTela}>
                        <Text style={styles.containerTitle}>Filmes Populares</Text>
                        <Text style={styles.txt}>Page</Text>
                        <Text style={styles.txt} onPress={() => navigatorService.navigate('Detalhes')}>
                            go to detalhes
                        </Text>
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