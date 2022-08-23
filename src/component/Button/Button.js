import React, { useState } from "react"
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native'

// const [input, setInput] = useState('')
// const [todos,setTodos]=useState([
//     {
//     id:1,
//             title:'Learn React Native',
//             completed:true
//         },
//         {
//             id:2,
//             title:'Learn React',
//             completed:false
//         },  
// ]);

// const addTodo = () => {
//     if (input.trim()) {
//         const newTodo = {

//             id: Math.floor(Math.random() * 100),
//             title:input,
//             completed:false

//         }
    
//     }
// }
const Button = () => {
    /*props */
    return (
        <View>
            <View style={styles.seperator}></View>
            <TouchableOpacity 
            // onPress={props.oButtonPress} //hataya düşüyor
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
