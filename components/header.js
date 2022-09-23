import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';
import { Entypo, AntDesign, Ionicons } from '@expo/vector-icons';


export default function Header() {
 return (
    <View style={styles.header}>
        <View style={styles.viewBotoes}>
            <TouchableOpacity style={styles.botao}>
                <Entypo name="home" size={30} color="#f5f5f5" />
                <Text style={styles.texto}>Home</Text>
            </TouchableOpacity>
        </View>
        <View style={styles.viewBotoes}>
            <TouchableOpacity style={styles.botao}>
                <AntDesign name="staro" size={30} color="#f5f5f5" />
                <Text style={styles.texto}>Avaliação</Text>
            </TouchableOpacity>
        </View>
        <View style={styles.viewBotoes}>
            <TouchableOpacity style={styles.botao}>
                <Entypo name="home" size={30} color="#f5f5f5" />
                <Text style={styles.texto}>Home</Text>
            </TouchableOpacity>
        </View>
        <View style={styles.viewBotoes}>
            <TouchableOpacity style={styles.botao}>
            <Ionicons name="person" size={30} color="#f5f5f5" />
                <Text style={styles.texto}>Perfil</Text>
            </TouchableOpacity>
        </View>
    </View>
  );
}
const styles = StyleSheet.create({
    header:{
        justifyContent:'space-around',
        backgroundColor:'#262425',
        flexDirection:'row',
        height:70,
    },
    viewBotoes:{
        
    },
    texto:{
        color:'#f5f5f5'
    },
    botao:{
       
        alignItems:'center',
        justifyContent:'center'
    }
})