
import React, { Component } from 'react';
import { StyleSheet, View, Text, TouchableOpacity } from 'react-native';
import { Icon } from 'react-native-elements'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import navigatorService from './../helpers/NavigationService'
const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: 'black'
    },
    txt: {
        color: 'white'
    }

});


class Home extends Component {
    state = {
    };
    render() {
        return (
            <View style={styles.container}>
                <Text style={styles.txt}>Home</Text>
                <Text style={styles.txt}>Page</Text>
                <TouchableOpacity>
                    <Text style={styles.txt} onPress={() => navigatorService.navigate('Detalhes')}>
                        go to detalhes
                        </Text>
                </TouchableOpacity>
            </View>
        )
    }
}

const mapStateToProps = () => ({
})

const mapDispatchToProps = dispatch => bindActionCreators({}, dispatch)


export default connect(mapStateToProps, mapDispatchToProps)(Home)