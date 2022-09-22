import React from "react";
import { RectButton } from "react-native-gesture-handler";
import {View, Text, StyleSheet} from "react-native";
import { Entypo } from '@expo/vector-icons'; 
import { FontAwesome } from '@expo/vector-icons'; 

export default function Definicao(){
    return(
        <View style={styles.container}>
            <View style={styles.viewTexto}>
                <Text style={styles.texto}>Nos conte se você é </Text>
            </View>
            <View style={styles.viewBotoes}>
                <RectButton style={styles.botoes}>
                    <Text style={styles.textoBotoes}>Lojista/Prestador</Text>
                    <View style={styles.viewIcones}>
                        <Entypo name="shop" size={35} color="#e9ecf2" />
                    </View>
                </RectButton>
                <Text style={styles.texto}>ou</Text>
                <RectButton style={styles.botoes}>
                    <Text style={styles.textoBotoes}>Cliente</Text>
                    <View style={styles.viewIcones}>
                        <FontAwesome name="user" size={35} color="#e9ecf2" />
                    </View>
                </RectButton>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    container:{
        flex:1,
        flexDirection:'column',
        justifyContent:'center',
        alignItems:'center',
        backgroundColor:'#f6f6f9'
    },
    viewTexto:{
        marginBottom:100,
        width:'100%',
        alignItems:'center',
        height:'10%'
    },
    texto:{
        fontSize:35,
        fontWeight:'600',
        color:'#363949'
    },
    viewBotoes:{
        width:'100%',
        alignItems:'center',
        height:'30%',
        justifyContent:'space-around'
    },
    botoes:{
        flexDirection:'row',
        width:'80%',
        height:'30%',
        backgroundColor:'#1961e6',
        alignItems:'center',
        justifyContent:'space-between',
        borderRadius:10
        /*1961e6 */
    },
    viewIcones:{
        width:'30%',
        height:'100%',
        justifyContent:'center',
        alignItems:'center',
        backgroundColor:'#1354cf',
        borderTopRightRadius:10,
        borderBottomRightRadius:10
        /*1354cf */
    },
    textoBotoes:{
        marginLeft:20,
        fontSize:20,
        fontWeight:'500',
        color:'#e9ecf2'
    }
    
});