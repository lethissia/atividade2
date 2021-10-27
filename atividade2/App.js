import { StyleSheet, View} from 'react-native'
import React from 'react';

import Cabecalho from './components/Cabecalho';
import Corpo from './components/Corpo';
import Disciplina from './components/Disciplina';

export default function App() {
  return (
    <View style={styles.container}>
      <Cabecalho 
      nome='Lethíssia Carvalho Sousa'
      curso='Design Digital'
      />
      <Corpo/>
      <Disciplina disciplina='Projetos de Interface Web'/>
      <Disciplina disciplina='Sociedade, Cultura e Tecnologias'/>
      <Disciplina disciplina='Design e Inovação'/>
      <Disciplina disciplina='Marketing'/>
      <Disciplina disciplina='Empreendedorismo'/>
      <Disciplina disciplina='Projeto Integrado IV'/>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});

