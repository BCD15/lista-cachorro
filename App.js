import { StyleSheet, View, Text } from 'react-native';
import Card from './src/components/Card';

export default function App() {

  return (
    <View style={styles.container}>
      <Text style={{ fontSize: 25}}>
      Olá Mundo
      </Text>
      <View style={styles.conteudo}>
        { cachorros.map(cachorro => <Card cachorro={cachorro}/>)}
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#0d0',
    alignItems: 'center',
    justifyContent: 'center',
    paddingTop: 20,
  },
  conteudo: {
    flex: 1,
    backgroundColor: '#ccc',
    flexDirection: 'row',
    flexWrap: 'wrap',
    width: '100%',
  }

});