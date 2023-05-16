import React from "react";
import { StyleSheet, Text, View } from 'react-native'



export default function Balance({saldo,gastos}){
    return(
        <View style={style.container}>
            <View style={style.item}>
                <Text style={style.itemTitle}>Saldo</Text>
                    <View style={style.current}>
                        <Text style={style.currencySymbol}>R$</Text>
                        <Text style={style.balance}>
                            {saldo}
                        </Text>
                    </View>
                
            </View>
            <View style={style.item}>
                <Text style={style.itemTitle}>Gastos</Text>
                    <View style={style.current}>
                        <Text style={style.currencySymbol}>R$</Text>
                        <Text style={style.expences}>
                            {gastos}
                        </Text>
                    </View>
                
            </View>
        </View>
    )
}
const style = StyleSheet.create({
    container:{
        backgroundColor:'#404040',
        flexDirection:'row',
        justifyContent:'space-between',
        paddingEnd:10,
        paddingStart:10,
        marginTop:-24,
        marginStart:14,
        marginEnd:14,
        paddingTop:22,
        paddingBottom:22,
        borderRadius:4,
        borderBottomColor:'#000',
        borderBottomWidth:15,
        zIndex:99
    },
    item:{

    },
    itemTitle:{
        color:'#DADADA',
        fontSize:20
    },
    current:{
        flexDirection:'row',
        justifyContent:'center'
    },
    currencySymbol:{
        color:'#DADADA',
        marginRight:6
    },
    balance:{
        color:'#FFF',
        fontSize:22,
        color:'#2ECC71',
        fontWeight:'500'
    },
    expences:{
        fontSize:22,
        color:'#F74F3F',
        fontWeight:'500'
    }
})