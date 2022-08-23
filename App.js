import React,{useState} from 'react';
import { FlatList, SafeAreaView, StyleSheet, Text, View } from 'react-native';
import T_data from "./T_data.json";
import TodoCard from "./src/component/TodoCard";
import NewCard from "./src/component/NewCard";

const App = () => {

  const renderTodo = ({ item }) => <TodoCard todo={item} />;


  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.ust}>

        <Text style={styles.baslik}>Yapılacaklar</Text>
        <Text style={styles.sayi}>Sayı</Text>
      </View>
      <View style={styles.ic}>
        <FlatList
          keyExtractor={item => item.id}
          data={T_data}
          renderItem={renderTodo}

        />
      </View>
      <NewCard />

    </SafeAreaView>
  );
}



export default App;

const styles = StyleSheet.create({
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