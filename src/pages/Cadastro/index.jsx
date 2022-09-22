import React from "react";
import { View, Text, TextInput, TouchableOpacity, StyleSheet, ScrollView } from "react-native";

export default function Cadastro(){
    return(
        <View style={styles.container}>
            <ScrollView style={styles.scrol} showsVerticalScrollIndicator={true}>
                <View style={styles.viewFormulario}>
                    <View style={styles.viewTitulo}>
                            <Text style={styles.titulo}>CADASTRO</Text>
                    </View>
                    <TextInput placeholder='CNPJ' style={styles.input} />
                    <TextInput placeholder='CPF do responsavel' style={styles.input}/>
                    <TextInput placeholder='Nome fantasia' style={styles.input}/>
                    <TextInput placeholder='Razão social' style={styles.input}/>
                    <TextInput placeholder='Nome do responsavel' style={styles.input}/>
                    <View style={styles.viewDuasCaixas}>
                        <TextInput placeholder='CEP' style={styles.miniInput} />
                        <TextInput placeholder='Estado' style={styles.miniInput} />
                    </View>
                        <TextInput placeholder='Endereço' style={styles.input}/>
                    <View style={styles.viewDuasCaixas}>
                        <TextInput placeholder='Complemento' style={styles.miniInput} />
                        <TextInput placeholder='Numero' style={styles.miniInput} />
                    </View>
                    <TextInput placeholder='Estado' style={styles.input}/>
                    <TextInput placeholder='UF' style={styles.input}/>
                    <TextInput placeholder='E-mail' style={styles.input}/>
                    <TextInput placeholder='Telefone opcional' style={styles.input}/>
                    <TextInput placeholder='Whatsapp opcional' style={styles.input}/>
                    <TextInput placeholder='Senha' style={styles.input}/>
                    <TextInput placeholder='Confirme sua senha' style={styles.input}/>
            

                    <View style={styles.viewBotoes}>
                        <TouchableOpacity style={styles.botaoCancelar}>
                            <Text style={styles.textoBotao}>Cancelar</Text>
                        </TouchableOpacity>
                        <TouchableOpacity style={styles.botaoConfirmar}>
                            <Text style={styles.textoBotao}>Confirmar</Text>
                        </TouchableOpacity>
                    </View>
                </View>
            </ScrollView>
      
       
        </View>
    );
}

const styles = StyleSheet.create({
    container:{
        flex:1,
        justifyContent:'center',
        alignItems:'center',
        backgroundColor:'#f5f5f5'
    },
    scrol:{
        width:'100%',
        height:'100%'
    },
    viewTitulo:{
        justifyContent:'center',
        alignItems:'center',
        
        alignSelf:'flex-start',
        
    },
    titulo:{
        fontSize:30,
        fontWeight:'700',
        letterSpacing:3,
        color:'#262425',
        margin:10
    },
    viewFormulario:{
        height:'100%',
        width:'90%',
        alignItems:'center',
        justifyContent:'space-around',
        marginLeft:20,
        marginTop:20
    },
    viewDuasCaixas:{
        flexDirection:'row',
        alignItems:'center',
        justifyContent:'space-between',
        width:'90%'

    },
    miniInput:{
        width:'45%',
        marginTop:10,
        marginBottom:10,
        padding:5,
        paddingVertical:7,
        borderBottomWidth:1,
        borderBottomColor:'gray'
    },
    input:{
        width:'90%',
        margin:10,
        padding:5,
        paddingVertical:7,
        borderBottomWidth:1,
        borderBottomColor:'gray'
    },
    viewBotoes:{
        flexDirection:'row',
        justifyContent:'space-between',
        width:'90%',
        margin:50
    },
    botaoCancelar:{
        backgroundColor:'#F36377',
        width:130,
        height:50,
        justifyContent:'center',
        alignItems:'center',
        borderRadius:4
    },
    botaoConfirmar:{
        backgroundColor:'#15e88d',
        width:130,
        height:50,
        justifyContent:'center',
        alignItems:'center',
        borderRadius:4
    },
    textoBotao:{
        color:'#171616',
        fontSize:20,
        fontWeight:'500',
        letterSpacing:1
    }
});