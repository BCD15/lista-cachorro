import { View, Text, StyleSheet, Image, TouchableOpacity } from 'react-native';

export default function Card(props) {

  return (
    <View style={styles.card}>
      <Image style={styles.foto} source={{ uri: props.cachorro.imgcachorro}} />  
      <Text style={{ color: '#2C2628'}}> {props.cachorro.raça} </Text>
      <Text style={{ color: '#2C2628'}}> {props.cachorro.origem} </Text>     
      <TouchableOpacity onPress={props.removerItem} style={styles.botao}>
        <Text style={{ color: "#ACEBF2", fontWeight: "bold" }}>Delete</Text>
      </TouchableOpacity>    
    </View>
  );
}

const styles = StyleSheet.create({
  card: {
    backgroundColor: '#ACEBF2',
    width: '40%',
    height: 215,
    borderRadius: 10,
    margin: 15,
  },
  foto: {
    resizeMode: 'stretch',
    width: '100%',
    height: 120,
    borderRadius: 10,
  },
  botao: {
    backgroundColor: '#2C2628',
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 10,
    margin: 10,
  },
});     