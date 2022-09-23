import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';
import { Entypo, AntDesign, Ionicons } from '@expo/vector-icons';


export default function Header({teste}) {
 return (
    <View style={styles.header}>
        <View style={styles.viewBotoes}>
            <TouchableOpacity style={[(teste == 1) ? styles.atual: styles.botao]}>
                <Entypo name="home" size={30} color='#e1e1e1' />
            </TouchableOpacity>
            <Text style={styles.texto}>Home</Text>
        </View>
        <View style={styles.viewBotoes}>
            <TouchableOpacity style={[(teste == 2) ? styles.atual: styles.botao]}>
                <AntDesign name="staro" size={30} color='#e1e1e1' />
            </TouchableOpacity>
            <Text style={styles.texto}>Avaliação</Text>
        </View>
        <View style={styles.viewBotoes}>
            <TouchableOpacity style={[(teste == 3) ? styles.atual: styles.botao]}>
                <Entypo name="home" size={30} color="#e1e1e1" /> 
            </TouchableOpacity>
            <Text style={styles.texto}>Home</Text>
        </View>
        <View style={styles.viewBotoes}>
            <TouchableOpacity style={[(teste == 4) ? styles.atual: styles.botao]}>
            <Ionicons name="person-outline" size={30} color="#e1e1e1" />
            </TouchableOpacity>
            <Text style={styles.texto}>Perfil</Text>
        </View>
    </View>
  );
}
const styles = StyleSheet.create({
    header:{
        justifyContent:'space-around',
        backgroundColor:'#242424',
        flexDirection:'row',
        alignSelf:'flex-end',
        paddingVertical:22,
        width:'100%'
    },
    viewBotoes:{
        
        padding:5,
        justifyContent:'space-between'
    },
    texto:{
        color:'#e1e1e1'
    },
    botao:{
       
        alignItems:'center',
        justifyContent:'center'
    },
    atual:{
        backgroundColor:'#9754ff',
        borderRadius:100,
        padding:7
    }
})