import { View, Text, Image, StyleSheet, TouchableOpacity, TextInput, ScrollView } from 'react-native';
import React from 'react';
import { FontAwesome } from '@expo/vector-icons';
import { Feather } from '@expo/vector-icons';
import { AntDesign } from '@expo/vector-icons';
import { Foundation } from '@expo/vector-icons'; 
import { FontAwesome5 } from '@expo/vector-icons';
import Header from '../../../components/header';
import { Entypo } from '@expo/vector-icons';

export default function PagLoja(){
    return(
        <View style={styles.container}>
            
            <View style={styles.viewEndereco}>
                <FontAwesome name="map-marker" size={30} color="#363949" />
                <Text style={styles.textoEndereco}>AV. Tenente Marques, 1250 Cajamar - SP</Text>
            </View>
            <View style={styles.viewPesquisa}>
                <View style={styles.viewInput}>
                    <Feather name="search" size={30} color="#363949" />
                    <TextInput placeholder='Pesquisar' style={styles.inputPesquisa}/>
                </View>
                
                <TouchableOpacity style={styles.botaoFiltro}>
                    <AntDesign name="filter" size={30} color="#363949" />
                    <Text style={styles.textoPesquisa}>Filtrar</Text>
                </TouchableOpacity>
            </View>
            
            <View style={styles.nomeLojaView}>
                <Text style={styles.nomeLojaTitulo}>Armarinhos da maria</Text>
                <Image source={require('../../../assets/image-icon.png')} style={styles.imagem}/>
            </View>
            <View style={styles.viewEndereco}>
                <FontAwesome name="map-marker" size={30} color="#363949" />
                <Text style={styles.textoEndereco}>Rua Amazonas, 000 Fazendinha</Text>
            </View>
            <View style={styles.viewContatos}>
                <TouchableOpacity><Foundation name="telephone" size={40} color="#363949" /></TouchableOpacity>
                <TouchableOpacity><FontAwesome5 name="whatsapp-square" size={40} color="#1fb017" /></TouchableOpacity>
                <TouchableOpacity><AntDesign name="facebook-square" size={40} color="#243ed4" /></TouchableOpacity>
                <TouchableOpacity><Entypo name="globe" size={40} color="black" /></TouchableOpacity>
                <TouchableOpacity><FontAwesome name="map-marker" size={40} color="#e0283e" /></TouchableOpacity>
            </View>
            <View style={styles.viewProd}>
                <View>
                    <Text style={styles.textoProd}>Brinquedos</Text>
                    <Image source={require('../../../assets/image-icon.png')} style={styles.imagem}/>
                </View>
                <View>
                    <Text style={styles.textoProd}>Moveis</Text>
                    <Image source={require('../../../assets/image-icon.png')} style={styles.imagem}/>
                </View>
            </View>
            <View style={styles.viewDesconto}>
                <Text style={styles.textoDesconto}>Cupom de desconto R$ 10,00.</Text>
                <Text style={styles.textoDesconto}>Apresente está tela ou print na loja para receber o desconto.</Text>
            </View>
            
            
        </View>
    );
}

const styles = StyleSheet.create({
    
    container:{
        flex:1,
        justifyContent:'space-around',
        alignItems:'center',
        backgroundColor:'#f0f0f0'
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
    imagem:{
        width:90,
        height:90
    },
    viewEndereco:{
        flexDirection:'row',
        marginTop:20,
        justifyContent:'center',
        alignItems:'center'
    },
    textoEndereco:{
        color:'#363949',
        fontSize:16,
        fontWeight:'600',
        letterSpacing:1,
        marginLeft:10
    },
    viewPesquisa:{
        flexDirection:'row',
        justifyContent:'space-around',
        alignItems:'center',
        width:'100%'
    },
    inputPesquisa:{
        color:'#363949',
        fontSize:20,
        width:150,
        paddingVertical:7,
        fontWeight:'600',
        letterSpacing:1
    },
    viewInput:{
        flexDirection:'row',
        borderColor:'#363949',
        borderWidth:3,
        borderRadius:25,
        justifyContent:'center',
        alignItems:'center',
        padding:5
    },
    textoPesquisa:{
        color:'#363949',
        fontSize:20,
        fontWeight:'600',
        letterSpacing:1
    },
    botaoFiltro:{
        flexDirection:'row',
        justifyContent:'center',
        alignItems:'center',
    },
    viewProd:{
        flexDirection:'row',
        justifyContent:'space-around',
        alignItems:'center',
        width:'100%'
    },
    textoProd:{
        color:'#363949',
        fontSize:20,
        fontWeight:'600',
        letterSpacing:1
    },
    viewContatos:{
        flexDirection:'row',
        justifyContent:'space-around',
        alignItems:'center',
        width:'100%'
    },
    viewDesconto:{
        backgroundColor:'#ed8d26',
        width:'90%',
        height:140,
        borderRadius:5
    },
    textoDesconto:{
        color:'#470606',
        fontWeight:'600',
        fontSize:20,
        margin:10,

    }

})