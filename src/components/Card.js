import { View, StyleSheet } from 'react-native';
import { Image } from 'react-native';

export default function Card(props) {
  return (
    <View style={styles.card}>
        <Image style={styles.card} source={{ uri: props.cachorro.foto}} />
        <Text style={{ color: 'darkred'}}> {props.cachorro.raça} </Text>
        <Text></Text>
    </View>
  );
}

const styles = StyleSheet.create({
  card: {
    backgroundColor: 'coral',
    padding: 20,
    width: '100%',
    alignContent: 'center',
    alignItems: 'center',
  },
});