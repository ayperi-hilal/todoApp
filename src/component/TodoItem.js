import React from 'react'
import { View, Text, TouchableOpacity,StyleSheet } from 'react-native'


const TodoItem = ({id,onPress,text,isDone,longPress}) => {
  
  return (
    <View style={[styles.container , isDone && styles.itemDone]}>
      <TouchableOpacity
      onPress={()=> onPress(id)} onLongPress={()=> longPress(id)}
      style={styles.button}
      >
        <Text style={[styles.text , isDone && styles.decoration]}>{text}</Text>
      </TouchableOpacity>
    </View>
  )
}

export default TodoItem
