import { StyleSheet, View, Text, ScrollView } from 'react-native';
import Card from './src/components/Card';
import React from 'react';

export default function App() {

  const [cachorros, setCachorros] = React.useState([
    {
      id: 1,
      imgcachorro: "https://img.freepik.com/fotos-gratis/jovem-bulldog-frances-marrom-brincando-isolado-na-parede-branca-do-estudio_155003-31898.jpg?w=2000",
      raça: 'Bulldog',
      origem: 'Inglaterra',
    },
    {
      id: 2,
      imgcachorro: "https://www.petlove.com.br/images/breeds/193103/profile/original/pastor_alemao-p.jpg?1532539270",
      raça: 'Pastor Alemão',
      origem: 'Alemanha',
    },
    {
      id: 3,
      imgcachorro: "https://webcachorros.com.br/wp-content/uploads/2021/03/happy-brown-pitbull-dog-with-white-background_297978-1.jpg",
      raça: 'Pitbull',
      origem: 'Estados Unidos',
    },
    {
      id: 4,
      imgcachorro: "https://uploads.metropoles.com/wp-content/uploads/2019/11/12180309/shihtzu.jpg",
      raça: 'Shih-tzu',
      origem: 'Tibete',
    },
    {
      id: 5,
      imgcachorro: "https://i0.statig.com.br/bancodeimagens/imgalta/0c/bj/hf/0cbjhfoofdbpjv3fgfbdr7sgt.jpg",
      raça: 'Yorkshire',
      origem: 'Inglaterra',
    },
  ]);
  const removerItem = (id) => {
    const index = cachorros.findIndex((filme) => filme.id === id);
    const novaLista = [...cachorros];
    novaLista.splice(index, 1);
    setCachorros(novaLista);
  };

  return (
    <ScrollView>
      <View style={styles.container}>
        <Text style={{ paddingBottom: 10, color: '#ACEBF2', fontSize: 25}}>
        Cachorrinhos
        </Text>
        <View style={styles.conteudo}>
        { cachorros.map(cachorro => 
          <Card 
          cachorro={cachorro}
          removerItem={() => removerItem(cachorro.id)} 
          key={cachorros.id} 
          />
        )}
        </View>
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#496773',
    alignItems: 'center',
    justifyContent: 'center',
    paddingTop: 20,
  },
  conteudo: {
    flex: 1,
    backgroundColor: '#30A5BF',
    flexDirection: 'row',
    flexWrap: 'wrap',
    width: '100%',
  }

});