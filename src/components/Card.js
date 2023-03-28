import { View, Text, StyleSheet } from 'react-native';
import { Image } from 'react-native';
import App from '../../App';


export default function Card(props) {
  const cachorros = [
    {
      imgcachorro: "./img/bulldog.webp",
      raça: 'Bulldog', 
    },
    {
      imgcachorro: "./img/pastor-alemão.jpg",
      raça: 'Pastor Alemão',
    },
    {
      imgcachorro: "./img/pitbull-p.webp",
      raça: 'Pitbull',
    },
    {
      imgcachorro: "./img/shitzu.jpeg",
      raça: 'Shitzu',
    },
    {
      imgcachorro: "./img/yorkshire.jpg",
      raça: 'Yorkshire',
    },
  ]
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