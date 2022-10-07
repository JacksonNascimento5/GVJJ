import React, { useState } from "react";
import { View, Text, TextInput, TouchableOpacity, StyleSheet , ScrollView, PixelRatio, Dimensions, Platform, Image } from "react-native";
import Header from '../../../components/header';
import { Entypo, AntDesign, Ionicons } from '@expo/vector-icons';
//#region Está area é para ajustar a font do titulo, caso seja iPhone/web/android
const {
    width: SCREEN_WIDHT,
    height: SCREEN_HEIGHT
} = Dimensions.get('window');
    const scale = SCREEN_WIDHT/320;
    export function fontAjustada(size){
        const newSize = size * scale
        if(Platform.OS === 'ios'){
            return Math.round(PixelRatio.roundToNearestPixel(newSize))
        }else{
            return Math.round(PixelRatio.roundToNearestPixel(newSize)) - 2
        }
}
//#endregion
export default function HomeProd({navigator}){
    return(
        <View style={style.container}>
            <View style={style.viewLocal}>
                <Text style={style.local}>Localização</Text>
            </View>
            <View style={style.viewPesquisar} >
                <TouchableOpacity style={style.botaoPesq}>
                    <Text>Pesquisar</Text>
                </TouchableOpacity>
                <TouchableOpacity>Filtros</TouchableOpacity>
            </View>
            <View style={style.viewProduto}>
                <TouchableOpacity>
                    <Image style={style.image}source={require("../../../assets/icon.png")} />
                </TouchableOpacity>
                <View style={style.rodape}>
                    <TouchableOpacity style={style.buttonsRodape}>Audio</TouchableOpacity>
                    <TouchableOpacity style={style.buttonsRodape}>Play</TouchableOpacity>
                    <TouchableOpacity style={style.buttonsRodape}>Pesquisar</TouchableOpacity>
                </View>
            </View>
            <View style={style.viewInfo}>
                <Text style={style.info}>Dados via Banco de dados</Text>
            </View>
            <View style={style.viewAvaliacao}>
                <TouchableOpacity style={style.avaliacao}>
                    <AntDesign name="staro" size={20} color="#111" />
                    <Text> Avaliação</Text>
                </TouchableOpacity>
            </View>
            <Header></Header>
        </View>
    )
}

const style = StyleSheet.create({
    container:{
        width: '100%',
        height: '100%',
        backgroundColor:'#f5f5f5'
    },
    viewLocal:{
        justifyContent:'center',
        alignItems:'center',
        padding: '10px',
    },
    local:{
        color:'#171616',
        fontWeight:'500',
        fontSize:'15px',
        letterSpacing:1
    },
    viewPesquisar:{
        justifyContent:'center',
        alignItems:'center',
        flexDirection: "row",
    },
    botaoPesq:{
        backgroundColor:'rgba(1,1,1,0.2)',
        width:"15vmax",
        height:"3vmax",
        justifyContent:'center',
        alignItems:'center',
        borderRadius:4,
        color: "white",
        margin: '10px'
    },
    image:{
        width: '300px',
        height: '300px'
    },
    viewProduto:{
        justifyContent:'center',
        alignItems:'center',
    },
    rodape:{
        justifyContent:'center',
        alignItems:'center',
        flexDirection:"row",
    },
    buttonsRodape:{
        padding: '10px'
    },
    viewInfo:{
        justifyContent:'center',
        alignItems:'center',
        backgroundColor: '#12a2',
        height: '20%',
    },
    info:{
        fontSize: '15px'
    },
    viewAvaliacao:{
        justifyContent:'center',
        alignItems:'center',
       
    },
    avaliacao:{
        flexDirection: 'row'
    }
})