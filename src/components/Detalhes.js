
import React, { Component } from 'react';
import { StyleSheet, View, Text, SafeAreaView, TouchableOpacity } from 'react-native';
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import navigatorService from './../helpers/NavigationService'
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
        console.log(this.props.navigation.getParam('filme'))
        return (
            <SafeAreaView style={styles.containerSafeAreaView}>
                <View style={styles.container}>
                    <Text style={styles.txt}>Detalhes</Text>
                    <Text style={styles.txt}>Page</Text>
                    <Text style={styles.txt} onPress={() => navigatorService.navigate('Home')}>
                        go to Home
                    </Text>
                    <Text style={styles.txt} onPress={() => navigatorService.navigate('Search')}>
                        go to Search
                    </Text>
                </View>
            </SafeAreaView>
        )
    }
}

const mapStateToProps = () => ({
})

const mapDispatchToProps = dispatch => bindActionCreators({}, dispatch)


export default connect(mapStateToProps, mapDispatchToProps)(Home)