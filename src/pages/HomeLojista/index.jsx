import { View, Text, Image, StyleSheet, TouchableOpacity } from 'react-native';
import React from 'react';
import Header from '../../../components/header';
import Button from '../../../components/Button';

export default function HomeLojista() {
    return (
        <View style={styles.container}>
            <View style={styles.viewNome}>
                <Text style={styles.nomeEmpresa}>Lojas ABC</Text>
                <Image source={require('../../../assets/image-icon.png')}  style={styles.imagem}/>
            </View>
            
            {/* Container do botões */}
            <View style={styles.containerBotoes}>
                {/*Botões de cima */}
                <View style={styles.botoesCima}>
                    {/* Botão relatorio */}
                    <TouchableOpacity>
                        <Text style={styles.textoBotoes}>Relatórios</Text>
                        <Image source={require('../../../assets/relatorio-de-negocios.png')}  style={styles.imagem}/> 
                    </TouchableOpacity>
                    {/*Botão contatos */}
                    <TouchableOpacity>
                        <Text style={styles.textoBotoes}>Contatos</Text>
                        <Image source={require('../../../assets/contatos.png')}  style={styles.imagem}/>
                    </TouchableOpacity>
                </View>
                {/*Botões de baixo */}
                <View style={styles.botoesCima}>
                    {/* Botão Produtos */}
                    <TouchableOpacity>
                        <Text style={styles.textoBotoes}>Produtos</Text>
                        <Image source={require('../../../assets/caixa.png')}  style={styles.imagem}/>
                    </TouchableOpacity>
                    {/*Botão Perfil */}
                    <TouchableOpacity>
                        <Text style={styles.textoBotoes}>Perfil</Text>
                        <Image source={require('../../../assets/perfil.png')}  style={styles.imagem}/>
                    </TouchableOpacity>
                </View>
            </View>
            <View style={styles.botoesDeBaixo}>
                <Button texto='Ver sua página' />
            </View>
            <Header atual={1}></Header>
        </View>
    )
}

const styles = StyleSheet.create({
    container:{
        flex:1,
        justifyContent:'space-between',
        alignItems:'center',
        backgroundColor:'#f5f5f5'
    },
    viewNome:{
        flexDirection:'row',
        marginTop:50,
        justifyContent:'space-around',
        width:'90%',
        alignItems:'center',
        
    },
    imagem:{
        width:100,
        height:100
    },
    nomeEmpresa:{
        fontSize:30,
        fontWeight:'700',
        letterSpacing:2,
        color:'#363949'
    },
    containerBotoes:{
        
        width:'90%'
    },
    botoesCima:{
        flexDirection:'row',
        justifyContent:'space-around'
    },
    textoBotoes:{
        fontSize:20,
        fontWeight:'600'
    },
    botoesDeBaixo:{
        width:'100%',
        paddingVertical:50
    }
    
});