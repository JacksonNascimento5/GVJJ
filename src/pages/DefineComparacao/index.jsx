import React from "react";
import { RectButton } from "react-native-gesture-handler";
import {View, Text, StyleSheet, TextInput} from "react-native";
import {FontAwesome5 } from '@expo/vector-icons'; 


export default function DefinineComparacao(){
    return(
        <View style={styles.container}>
            <View style={styles.viewTexto}>
                <Text style={styles.texto}>BEM VINDO </Text>
            </View>
            <View style={styles.viewTexto}>
                <TextInput placeholder='Digite seu bairro' style={styles.input}/>
            </View>
            <View style={styles.viewBotoes}>
                <RectButton style={styles.botoes}>
                    <Text style={styles.textoBotoes}>Produtos</Text>
                    <View style={styles.viewIcones}>
                        <FontAwesome5 name="box-open" size={35} color="#e9ecf2" />
                    </View>
                </RectButton>
                <Text style={styles.texto}>ou</Text>
                <RectButton style={styles.botoes}>
                    <Text style={styles.textoBotoes}>Serviços</Text>
                    <View style={styles.viewIcones}>
                        <FontAwesome5 name="hands-helping" size={35} color="#e9ecf2" />
                    </View>
                </RectButton>
                <Text style={styles.texto}>ou</Text>
                <RectButton style={styles.botoes}>
                    <Text style={styles.textoBotoes}>Produtos e serviços</Text>
                    <View style={styles.viewIcones}>
                        <FontAwesome5 name="tools" size={35} color="#e9ecf2" />
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
        height:'10%',
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
    },

    input:{
        width:'80%',
        height: '80%',
        margin:10,
        padding:5,
        paddingVertical:7,
        borderBottomWidth:1,
        borderBottomColor:'gray',
        fontSize: 35
        
    },
    
});