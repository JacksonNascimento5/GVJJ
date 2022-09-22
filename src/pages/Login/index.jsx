import React from "react";
import {View, Text, StyleSheet, TextInput, TouchableOpacity} from "react-native";
import Button from "../../../components/Button";
import Input from "../../../components/Input";

export default function Login(){
    return(
        <View style={styles.container}>

            {/*TITULO */ }
            <Text style={styles.titulo}>Login</Text>

            {/* VIEW DAS CAIXAS DE TEXTO */ }
            <View style={styles.viewLogin}>
                <Text style={styles.texto}>CPF ou CNPJ:</Text>
                <Input place={'CPF OU CNPJ'} />
                <Text style={styles.texto}>Senha:</Text>
                <Input place={'SENHA'} />
                <TouchableOpacity style={styles.botaoEsqueceu}>
                    <Text style={styles.textoEsqueceu}>Esqueceu a senha?</Text>
                </TouchableOpacity>
            </View>

            {/* COMPONENTE DO BOTÃO DE LOGIN */ }
            <Button texto='Entrar'/>

            {/* VIEW PARA REDICIONAMENTO DE CADASTRO */ }
            <View style={styles.viewPrimeiroAcesso}>
                <Text style={styles.textoPrimeiroAcesso}>Primeiro acesso?</Text>
                <TouchableOpacity>
                    <Text style={styles.botaoPrimeiroAcesso}>Cadastre-se</Text>
                </TouchableOpacity>
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    container:{
        flex:1,
        justifyContent:'space-around',
        alignItems:'center',
        backgroundColor:'#f6f6f9'
    },
    /* COMEÇO DE ESTILOS DO TITULO */
    titulo:{
        fontSize:55,
        fontWeight:'600',
        color:'#363949',
        alignSelf:'flex-start',
        marginLeft:20
    },
    /*FIM DO TITULO */

    /* INICIO DOS ESTILOS DA VIEW DAS CAIXAS DE TEXTO */
    viewLogin:{
        width:'80%',
        justifyContent:'space-between',
        alignItems:'center',
        height:'30%'
    },
    texto:{
        fontSize:25,
        fontWeight:'600',
        color:'#363949',
        alignSelf:'flex-start',
        marginBottom:15,
        marginTop:15
    },
    botaoEsqueceu:{
        alignSelf:'flex-end',
        marginTop:20
    },
    textoEsqueceu:{
        color:'#353dfa',
        fontSize:16,
    },
    /* FIM DOS ESTILOS DA VIEW DAS CAIXAS DE TEXTO */

    /*INICIO DA VIEW PARA REDIRECIONAR PARA O CADASTRO */
    viewPrimeiroAcesso:{
        flexDirection:'row',
        justifyContent:'space-around',
        width:'80%'
    },
    textoPrimeiroAcesso:{
        fontSize:20,
        fontWeight:'500',
        color:'#363949'
    },
    botaoPrimeiroAcesso:{
        color:'#353dfa',
        fontSize:20
    }
    /*FIM DA VIEW PARA REDIRECIONAR PARA O CADASTRO */
});