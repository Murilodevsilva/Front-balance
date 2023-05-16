import React, {useState} from 'react';
import {
    View,
    Text,
    StyleSheet,
    TouchableOpacity
} from 'react-native';

export default function Moviments({data}){
    const [showValue, setShowValue] = useState(false);
    return(
<TouchableOpacity onPress={ () => setShowValue(!showValue) } style={style.container}>
    <Text style={style.date}>{data.date}</Text>
    <View style={style.content}> 
        <Text style={style.label}>{data.label}</Text>
        {showValue ? (
            <Text 
            style={data.type === 1 ? style.value : style.expenses}
            >
                {data.type === 1 ? `R$ ${data.value}` : `R$ -${data.value}`}</Text>
        
        ):(
            <View style={style.skeleton}>

            </View>
        )}
        </View>
</TouchableOpacity>
    )
}
const style = StyleSheet.create({
    container:{
        flex:1,
        marginBottom:24,
        borderBottomWidth:1,
        borderBottomColor:'#dadada'
    },
    content:{
        flexDirection:'row',
        justifyContent:'space-between',
        marginTop:2,
        marginBottom:8
    },
    date:{
        color:'#dadada',
        fontWeight:'bold'
    },
    label:{
        fontWeight:'bold',
        fontSize:16
    },
    value:{
        fontSize:16,
        color:'#2ecc71',
        fontWeight:'bold'
    },
    expenses:{
        fontSize:16,
        color:'#e74c3c',
        fontWeight:'bold'
    },
    skeleton:{
        marginTop:6,
        width:80,
        height:10,
        backgroundColor:'#DADADA',
        borderRadius:8
    }
})