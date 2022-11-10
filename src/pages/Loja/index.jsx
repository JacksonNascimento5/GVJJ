import React from "react";
import {View, Text, Image, StyleSheet, FlatList, TouchableOpacity} from 'react-native';
import { Foundation } from '@expo/vector-icons'; 
import { FontAwesome } from '@expo/vector-icons';
import { Entypo } from '@expo/vector-icons'; 
import { FontAwesome5 } from '@expo/vector-icons';
import Header from "../../../components/header";

export default function Loja(){
    const produtos = [
        {
            id:0,
            nome:'primeiro item',
            imagem:'../../../assets/image-icon.png'
        },
        {
            id:1,
            nome:'segundo item',
            imagem:'../../../assets/image-icon.png'
        },
        {
            id:2,
            nome:'terceiro item',
            imagem:'../../../assets/image-icon.png'
        },
        {
            id:3,
            nome:'quarto item',
            imagem:'../../../assets/image-icon.png'
        },
        {
            id:4,
            nome:'quinto item',
            imagem:'../../../assets/image-icon.png'
        },
        {
            id:5,
            nome:'sexto item',
            imagem:'../../../assets/image-icon.png'
        },
        {
            id:6,
            nome:'setimo item',
            imagem:'../../../assets/image-icon.png'
        }

    ];
    return(
        <View style={styles.container}>
            <View style={styles.nomeLojaView}>
                <Text style={styles.nomeLojaTitulo}>Lojas ABC</Text>
                <Image source={require('../../../assets/image-icon.png')} style={styles.imagem}/>
            </View>
            <View>
                <FlatList 
                    data={produtos}
                    renderItem={()=>
                        <View style={styles.ViewDestaques}>
                            <TouchableOpacity>
                                <Image source={require('../../../assets/image-icon.png')} style={styles.imagem}/>
                            </TouchableOpacity>
                        </View>
                    }
                    keyExtractor={item => item.id}
                    horizontal={true}
                    
                    
                />
            </View>
            <View style={styles.viewPromocao}>
                <Text style={styles.textoPromocao}>Promoção</Text>
                <View style={styles.viewBotaoPromocao}>
                    <TouchableOpacity>
                        <Image source={require('../../../assets/image-icon.png')} style={styles.imagem}/>
                    </TouchableOpacity>
                    <Text style={styles.textoPreco}>R$5,99</Text>
                </View>
               
                    <TouchableOpacity style={styles.viewDesc}>
                        <Entypo name="sound" size={30} color="black" />
                        <Text style={styles.textoDesc}>Ouvir descrição</Text>
                    </TouchableOpacity>
                
            </View>
            <View>
                <Text>Mais vendidos</Text>
                <FlatList 
                    data={produtos}
                    renderItem={()=> <View>
                        <TouchableOpacity>
                            <Image source={require('../../../assets/image-icon.png')} style={styles.imagem}/>
                        </TouchableOpacity>
                    </View>}
                    keyExtractor={item => item.id}
                    horizontal={true}
                />
            </View>
            <View style={styles.containerContatos}>
                <View style={styles.viewContatos}><Text style={styles.textoContatos}>Entre em contato</Text><TouchableOpacity><Foundation name="telephone" size={30} color="#363949" /></TouchableOpacity><TouchableOpacity><FontAwesome5 name="whatsapp-square" size={30} color="#1fb017" /></TouchableOpacity></View>
                <View style={styles.viewContatos}><Text style={styles.textoContatos}>Como chegar</Text><TouchableOpacity><FontAwesome name="map-marker" size={30} color="#e0283e" /></TouchableOpacity></View>
            </View>
            <Header></Header>
        </View>
    );
}

const styles = StyleSheet.create({
    container:{
        flex:1,
        justifyContent:'space-between',
        alignItems:'center',
        backgroundColor:'#f0f0f0'
    },
    imagem:{
        width:90,
        height:90
    },
    nomeLojaView:{
        flexDirection:"row",
        justifyContent:'space-around',
        alignItems:'center',
        width:'70%'
    },
    nomeLojaTitulo:{
        color:'#363949',
        fontSize:25,
        fontWeight:"700",
        letterSpacing:2
    },
    ViewDestaques:{
        marginHorizontal:5
    },
    viewPromocao:{
        flexDirection:'column',
        width:'100%'
    },
    textoPromocao:{
        color:'#cc9706',
        fontSize:30,
        fontWeight:'700',
        letterSpacing:2,
        textAlign:'center'
    },
    viewBotaoPromocao:{
        flexDirection:'row',
        justifyContent:'space-around',
        alignItems:'center'
    },
    textoPreco:{
        fontSize:40,
        color:'#e0283e',
        fontWeight:'500'
    },
    viewDesc:{
        flexDirection:'row',
        justifyContent:'center',
        alignItems:'center',
        margin:15
    },
    textoDesc:{
        fontSize:20,
        marginLeft:10,
        fontWeight:'700',
        letterSpacing:1,
        color:'#363949'
    },
    containerContatos:{
        width:'100%',
    },
    viewContatos:{
        flexDirection:'row',
        justifyContent:'space-between',
        alignSelf:'flex-start',
        width:'60%',
        margin:10
    },
    textoContatos:{
        fontSize:20,
        color:'#363949',
        fontWeight:'600',
        
    }
    
})