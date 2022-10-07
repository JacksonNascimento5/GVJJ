import React, { useState } from "react";
import { View, Text, TextInput, TouchableOpacity, StyleSheet , ScrollView, PixelRatio, Dimensions, Platform } from "react-native";
import Header from "../../../components/header";
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

export default function CadastroProd({navigation}){
    //Esse {navigation} é passar pelo routes
    const [arquivos, setArquivos] = useState(''); 
    const uploadArq = async e => {
        e.preventDefault();
        //Enviando os dados para o back-end (qnd ter :( )
    }
    return(
        /*O Code abaixo é referente a tela de cadastro de produto */
        
        <View style={styles.container}>
           
            {/* Adicionando ScrollView */}
            <ScrollView style={styles.scrol} showsVerticalScrollIndicator={true}>
            <View style={styles.viewFormulario}>
                <Text style={styles.titulo}>
                    CADASTRO DE PRODUTO OU SERVIÇO
                </Text>
                {/* View do select. Required é para deitar o select obrigatório. Option são as opções do select, "defaultValue" é o "placeholder" */}
                <View style={styles.selects}>
                    <select required style={styles.select} defaultValue={"0"}>
                        <option value={0}disabled>Modalidade</option>
                        <option value={1}>1</option>
                        <option value={2}>2</option>
                        <option value={3}>3</option>
                        <option value={4}>4</option>
                    </select>
                    <select required style={styles.select} defaultValue={"0"}>
                        <option value={0} disabled>Categoria</option>
                        <option value={1}>1</option>
                        <option value={2}>2</option>
                        <option value={3}>3</option>
                        <option value={4}>4</option>
                    </select>
                </View>
                {/* View dos TextInput. Required para deixar eles obrigatórios */}
                <View style={styles.inputs}>
                    <TextInput placeholder="*Nome" style={styles.input} required></TextInput>
                    <TextInput placeholder="*Descrição" style={styles.input} required></TextInput>
                    <TextInput placeholder="*Preço Unitário" style={styles.input} required></TextInput>
                    <TextInput placeholder="Adicione mais informações" style={[styles.input, {color:"red"}]}></TextInput>
                </View>
                <View>
                    {/* 
                        Botão para poder enviar as fotos/videos que estão salvo no celular/computador
                        O Form é para manipular a Image/Video mandado pelo usuario no back-end
                    */}    
                    <form onSubmit={uploadArq}>
                        <input type={"file"} name="arquivos" style={styles.image}></input>
                    </form>
                </View>
                <View style={styles.viewBotoes}>
                    {/* View dos botões */}
                    <TouchableOpacity style={styles.botaoCancelar}><Text style={styles.textoBotao}>Cancelar</Text></TouchableOpacity>
                    <TouchableOpacity style={styles.botaoConfirmar}><Text style={styles.textoBotao}>Confirmar</Text></TouchableOpacity>
                </View>
                <TouchableOpacity style={styles.botaoCliente}><Text style={styles.textoBotao}>Ver como cliente</Text></TouchableOpacity>
            </View>
            </ScrollView>
            <Header></Header>
        </View>
    )
}

const styles = StyleSheet.create({
    container:{
        width: '100%',
        height: '100%',
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
        fontSize: "7vw",
        fontWeight:'700',
        letterSpacing:3,
        color:'#262425',
        margin:10,
        //marginLeft:"20%",
    },
    viewFormulario:{
        height:'100%',
        width:'100%',
        alignItems:'center',
        justifyContent:'flex-start',
        marginTop:20
    },
    input:{
        fontSize: "3.5vw",
        width: "50vw",
        margin:10,
        padding:5,
        paddingVertical:7,
        borderBottomWidth:1,
        borderBottomColor:'gray'
    },
    viewBotoes:{
        flexDirection:'row',
        justifyContent:"space-evenly",
        width:"100%",
        margin:10,
    },
    botaoCancelar:{
        backgroundColor:'#F36377',
        width:"25vw",
        height:"5vmax",
        justifyContent:'center',
        alignItems:'center',
        borderRadius:4,
        color: "white"
    },
    botaoConfirmar:{
        backgroundColor:'#15e88d',
        width:"25vw",
        height:"5vmax",
        justifyContent:'center',
        alignItems:'center',
        borderRadius:4,
        color: "white"
    },
    botaoCliente:{
        backgroundColor:"#4781f5",
        width: "50vw",
        height:"5vmax",
        justifyContent:'center',
        alignItems:'center',
        borderRadius:4,
        margin: 10
    },
    textoBotao:{
        color:'#171616',
        fontSize:"4.5vw",
        fontWeight:'500',
        letterSpacing:1
    },
    select:{
        fontSize: "3.5vw",
        width: "50vw",
        margin:10,
        padding:5,
        borderBottomWidth:1,
        borderBottomColor:'gray'
    },
    selects:{
        width: "50%",
        alignItems:'center',
        justifyContent:'flex-start',
    },
    inputs:{
        width: "100%",
        alignItems:'center',
        justifyContent:'center',
    },
    image:{
        fontSize: "3.5vw",
        borderWidth: 1,
        padding: 5,
        margin:10
    },

});