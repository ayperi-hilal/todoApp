import React, { useState } from "react"
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native'


const Button = ({ onPress }) => {
    return (
        <View >
            <View style={styles.seperator}></View>
            <TouchableOpacity
                onPress={onPress}
                style={styles.button}
            >
                <Text style={styles.metin}>Kaydet</Text>
            </TouchableOpacity>

        </View>
    )
}
export default Button;

const styles = StyleSheet.create({

    seperator: {
        borderColor: '#cef0f7',
        borderWidth: 1,
        marginLeft: 9,
        marginRight: 9,
    },
    button: {
        padding: 10,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#969696',
        margin: 10,
        borderRadius: 20,
        margin: 20
    },
    metin: {
        fontSize: 20,
        color: 'white',

    }
});
