import { StatusBar } from 'expo-status-bar';
import { SafeAreaView, StyleSheet, Text, View } from 'react-native';
import NewCard from './src/component/NewCard';
import TodoCard from './src/component/TodoCard';

const App = () => {
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.ust}>
        <Text style={styles.baslik}>Yapılacaklar</Text>
        <Text style={styles.sayi}>Sayı</Text>
      </View>
      <View style={styles.ic}>
        <TodoCard />
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
