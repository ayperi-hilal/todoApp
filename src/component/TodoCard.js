import React from "react";
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native'


const TodoCard = (props) => {
    let containerStyle = "";
    let textStyle = "";
    if (props.todo.isDone === false) {
        containerStyle = styles.container
        textStyle = styles.todoText
    } else {
        containerStyle = styles.completedStyle
        textStyle = styles.completedText
    }
    return (
        <View style={styles.card}>
            <TouchableOpacity
                onPress={props.onPress}
                onLongPress={props.onLongPress}
                
            >
                <Text style={textStyle}>{props.todo.name}</Text>
                <Text> {props.todo.isDone}</Text>
            </TouchableOpacity>

        </View>

    );
}

export default TodoCard;

const styles = StyleSheet.create({
    card: {
        backgroundColor: '#647855',
        height: 65,
        margin: 5,
        borderRadius: 8,
    },
    completedStyle: {
        textDecorationLine: "line-through",
    },
    metin: {
        margin: 10,
        color: 'white',
        fontSize: 25,
    },
    ic: {
        flex: 1,
        marginTop: 10,
        marginBottom: 10,
        margin: 5
    },
    doneTodoText: {
        color: "#808080",
        textDecorationLine: "line-through",
        fontSize: 20,
        fontStyle: 'italic'
    },
    container: {
        backgroundColor: "green",
        margin: 5,
        padding: 10,
        borderRadius: 10
    },
    todoText: {
        color: "white",
    },
    completedText: {
        textDecorationLine: "line-through",
    },
    completedContainer: {
        backgroundColor: "gray",
        margin: 5,
        padding: 10,
        borderRadius: 10
    },

});



