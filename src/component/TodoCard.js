import React from "react";
import { View, Text, StyleSheet, SafeAreaView, TouchableOpacity } from 'react-native'

const TodoCard = () => {
    return (
        <View style={styles.card}>
            <TouchableOpacity>
                <Text style={styles.metin}> card tarafı</Text>
            </TouchableOpacity>
        </View>
    );
}

export default TodoCard;

const styles = StyleSheet.create({
    card: {
        backgroundColor: '#7aa90e',
        height: 65,
        margin: 5,
        borderRadius: 8,
    },
    metin: {
        margin: 10,
        color: 'white',
        fontSize: 25,
    }
});



