import { StyleSheet, Text, View, FlatList } from 'react-native'
import Header from '../../components/header'
import Balance from '../../components/balance'
import Moviments from '../../components/moviments'

import * as Animatable from 'react-native-animatable'

const list = [
    {
        id: '1',
        label:'Boleto conta luz',
        value:'132,00',
        date:'08/05/2023',
        type:0 // despesas
    },
    {
        id: '2',
        label:'Salario',
        value:'2.500,00',
        date:'03/05/2023',
        type:1// entrada
    },
    {
        id: '3',
        label:'Pix Fulano',
        value:'119,00',
        date:'22/04/2023',
        type:1 // entrada
    },
]
export default function Home(){
    return(
        <Animatable.View animation='fadeIn' delay={600} >


           <Header name='Murilo Silva'/>


           <Balance saldo='9.847,62' gastos='-988,22'/>

           <Text style={style.title}>Ultimas Movimentações</Text>

           <FlatList
           style={style.list}
           data={list}
           keyExtractor={(item)=>String(item.id)}
           showsVerticalScrollIndicator={false}
           renderItem={({item})=><Moviments data={item}/>}
           />
        </Animatable.View>
    )
}
const style= StyleSheet.create({

    container:{
        flex:1,
        backgroundColor:'#AFAFAF'
    },
    title:{
        fontSize:18,
        fontWeight:'bold',
        marginLeft:14,
        marginRight:14,
        marginTop:14
    },
    list:{
        marginStart:14,
        marginEnd:14
    }
})