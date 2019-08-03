
import React, { Component } from 'react';
import { StyleSheet, View, Text, SafeAreaView, TouchableOpacity } from 'react-native';
import { connect } from 'react-redux'
import navigatorService from './../helpers/NavigationService'
import { bindActionCreators } from 'redux'
import { colors } from './../helpers/Style'

const styles = StyleSheet.create({
    containerSafeAreaView: {
        flex: 1,
        backgroundColor: colors.black
    },
    container: {
        flex: 1
    },
    txt: {
        color: colors.white
    }
});


class Home extends Component {
    state = {
    };
    render() {
        return (
            <SafeAreaView style={styles.containerSafeAreaView}>
                <View style={styles.container}>
                    <Text style={styles.txt}>Search</Text>
                    <Text style={styles.txt}>Page</Text>
                    <TouchableOpacity>
                        <Text style={styles.txt} onPress={() => navigatorService.navigate('Detalhes')}>
                            go to detalhes
                        </Text>
                    </TouchableOpacity>
                </View>
            </SafeAreaView>
        )
    }
}

const mapStateToProps = () => ({
})

const mapDispatchToProps = dispatch => bindActionCreators({}, dispatch)


export default connect(mapStateToProps, mapDispatchToProps)(Home)