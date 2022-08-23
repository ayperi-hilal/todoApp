import React, { useEffect, useState } from 'react';
import { FlatList, SafeAreaView, StyleSheet, Text, View, Alert } from 'react-native';
import T_data from "./T_data.json";
import TodoCard from "./src/component/TodoCard";
import NewCard from "./src/component/NewCard";
import Button from './src/component/Button/Button';
import TodoItem from './src/component/TodoItem';
const App = () => {

  const [todo_List, setTodo_list] = useState([]);

  const [completedTodo, setcompletedTodo] = useState([]);

  const [newsTodo, setNewsTodo] = useState("");

  const renderTodo = ({ item }) => <TodoCard todo={item}
    isDone={item.isDone}
    onPress={() => onPress(item)}
    onLongPress={() => onLongPress(item)}
  />;
 
  const onPress = item => {
    const new_todo_list = todo_List.map(todo => todo.id === item.id ? { ...todo, isDone: !todo.isDone } : todo)
    setTodo_list(new_todo_list)
    console.log(todo_List)
  }
 
  const onLongPress = item => {
    const new_todo_list = todo_List.filter(todo => todo.id !== item.id && todo)
    setTodo_list(new_todo_list)
    console.log(todo_List)
  }
  useEffect(() => {
    const completedList = todo_List.filter(todo => todo.isDone === true)
    setcompletedTodo(completedList)
  }, [todo_List])


  const grabText = text => {
    setNewsTodo(text)
  }

  const saveText = () => {
    if (newsTodo === "") return alert("boş bırakmayın")
    setTodo_list([...todo_List, { "id": todo_List.length.toString(), "todo": newsTodo, "isDone": false }])
    grabText("")/* ekledikten sonra inputu boşaltıyor */

  }

  const handleSubmit = () => {
    if (newsTodo === '') {
      Alert.alert('Boş veri ekleyemezsiniz!');
    } else if (todo_List.some(todo => todo.name === TodoItem)) {
      Alert.alert('aynısından var')
    } else {
      const item = {
        "id": Date.now(),
        "name": newsTodo,
        "isDone": false,
      }
      setTodo_list([...todo_List, item])
      grabText("")
    }

  }


  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.ust}>

        <Text style={styles.baslik}>Yapılacaklar</Text>
        {/* <Text style={styles.sayi}>L{todo_List.length}</Text>
        <Text style={styles.sayi}>C{completedTodo.length}</Text> */}
        <Text style={styles.sayi}> {todo_List.length - completedTodo.length}</Text>
      </View>
      <View style={styles.ic}>
        <FlatList
          keyExtractor={item => item.id.toString()}
          data={todo_List}
          renderItem={renderTodo}
        />
      </View>

      <View style={styles.newcontainer}>
        <NewCard value={newsTodo} onChange={grabText} onButtonPress={saveText} />
        <Button onPress={handleSubmit} />
      </View>
    </SafeAreaView>
  );
}



export default App;

const styles = StyleSheet.create({
  newcontainer: {
    backgroundColor: '#595968',
    height: 125,
    margin: 10,
    borderRadius: 5
  },
  container: {
    flex: 1,
    backgroundColor: '#192540',

  },
  ic: {
    flex: 1,
  },
  baslik: {
    fontWeight: 'bold',
    fontSize: 35,
    color: '#ffce37',
    flex: 1,
  },
  sayi: {
    fontWeight: 'bold',
    fontSize: 35,
    color: '#ffce37',
  },
  ust: {
    flexDirection: 'row',
    margin: 10,
  }
});