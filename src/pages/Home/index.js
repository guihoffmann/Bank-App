import { StyleSheet, Text, View, FlatList } from 'react-native';

import Header from '../../components/Header'
import Balance from '../../components/Balance'
import Movements from '../../components/Movements'
import Actions from '../../components/Actions'

const list = [
  {
    id: 1,
    label: 'Boleto conta luz',
    value: '150,86',
    date: '17/05/2022',
    type: 0 //despesas//
  },
  {
    id: 2,
    label: 'Pix Arthur',
    value: '30,00',
    date: '22/11/2022',
    type: 1 //receitas//
  },
  {
    id: 3,
    label: 'Salário',
    value: '45,07',
    date: '20/08/2022',
    type: 1 //receitas//
  }
]

export default function App() {
  return (
    <View style={styles.container}>
        <Header name="Guilherme Hoffmann"/>

        <Balance saldo="250,95" gastos="-125,60"/>

        <Actions/>

        <Text style={styles.title}>Últimas Transações</Text>

        <FlatList
          style={styles.list}
          data={list}
          keyExtractor={ (item) =>String(item.id)}
          showsVerticalScrollIndicator={false}
          renderItem={ ({ item }) => <Movements data={item}/> }
        />
        
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fafafa',
  },
  title:{
    fontSize:18,
    fontWeight:'bold',
    margin: 14,
  },
  list:{
    marginStart: 14,
    marginEnd: 14,
  }
});
