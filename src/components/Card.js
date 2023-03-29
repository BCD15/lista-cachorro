import { View, Text, StyleSheet, Image } from 'react-native';

export default function Card(props) {
  return (
    <View style={styles.card}>
        <Image style={styles.foto} source={{ uri: props.cachorro.imgcachorro}} />  
        <Text style={{ color: 'darkred'}}> {props.cachorro.raça} </Text>
    </View>
  );
}

const styles = StyleSheet.create({
  card: {
    backgroundColor: 'orange',
    width: '40%',
    height: 215,
    borderRadius: 10,
    margin: 15,
  },
  foto: {
    resizeMode: 'stretch',
    width: '100%',
    height: 180,
  }
});     