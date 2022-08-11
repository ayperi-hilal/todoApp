import React from "react";
import reactDom from "react-dom";
import { View, Text, StyleSheet, TextInput, TouchableOpacity } from 'react-native'

const NewCard = () => {
    return (
        <View style={styles.container}>
            <TextInput
                placeholder="Yapılacak..."
                style={styles.giris}
               placeholderTextColor='#969696'

            />
            <View style={styles.seperator}></View>
            <TouchableOpacity style={styles.button}>
                <Text style={styles.metin}>Kaydet</Text>
            </TouchableOpacity>
        </View>
    )
}

export default NewCard;

const styles = StyleSheet.create({
    container: {
        backgroundColor: '#595968',
        height: 125,
        margin: 10,
        borderRadius: 5
    },
    seperator: {
        borderColor: '#cef0f7',
        borderWidth: 1,
        marginLeft:9,
        marginRight:9,
    },
    button: {
        padding: 10,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#969696',
        margin: 10,
        borderRadius: 20,
        margin:20
    },
    giris: {
        margin: 10,
        fontSize:20
        
    },
    metin: {
        fontSize: 20,
        color: 'white',

    }
});

