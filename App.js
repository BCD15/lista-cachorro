import { StyleSheet, View, Text, ScrollView } from 'react-native';
import Card from './src/components/Card';

export default function App() {

  const cachorros = [
    {
      id: 1,
      imgcachorro: "https://img.freepik.com/fotos-gratis/jovem-bulldog-frances-marrom-brincando-isolado-na-parede-branca-do-estudio_155003-31898.jpg?w=2000",
      raça: 'Bulldog', 
    },
    {
      id: 2,
      imgcachorro: "https://www.petlove.com.br/images/breeds/193103/profile/original/pastor_alemao-p.jpg?1532539270",
      raça: 'Pastor Alemão',
    },
    {
      id: 3,
      imgcachorro: "https://webcachorros.com.br/wp-content/uploads/2021/03/happy-brown-pitbull-dog-with-white-background_297978-1.jpg",
      raça: 'Pitbull',
    },
    {
      id: 4,
      imgcachorro: "https://uploads.metropoles.com/wp-content/uploads/2019/11/12180309/shihtzu.jpg",
      raça: 'Shitzu',
    },
    {
      id: 5,
      imgcachorro: "https://i0.statig.com.br/bancodeimagens/imgalta/0c/bj/hf/0cbjhfoofdbpjv3fgfbdr7sgt.jpg",
      raça: 'Yorkshire',
    },
  ]

  return (
    <ScrollView>
      <View style={styles.container}>
        <Text style={{ fontSize: 25}}>
        Olá Mundo
        </Text>
        <View style={styles.conteudo}>
        { cachorros.map(cachorro => <Card cachorro={cachorro} key={cachorros.id} />)}
        </View>
      </View>
    </ScrollView>
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