import React from 'react'
import { View, Text, StyleSheet, TouchableWithoutFeedback } from 'react-native'
import { Icon } from 'react-native-elements'
import { tipografy, colors } from './Style'

const styles = StyleSheet.create({
    containerTitle: {
        fontSize: tipografy.sizeTitle02,
        color: colors.white
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
})
export const HeaderContainer = (props) => (
    <View style={[styles.rowCentered, styles.spaceBetween]}>
        <Text style={styles.containerTitle}>{props.title}</Text>
        <TouchableWithoutFeedback style={styles.rowCentered} onPress={() => props.action()}>
            <Text style={styles.verMais}>Ver mais</Text>
            <Icon name='chevron-right' color={colors.gold} size={tipografy.sizeIcon} />
        </TouchableWithoutFeedback>

    </View>
)