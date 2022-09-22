import { StyleSheet, TextInput } from 'react-native';

export default function Input({place}){
    return(
        <TextInput style={styles.caixaTexto} placeholder={place}/>
    );
}
const styles = StyleSheet.create({
    caixaTexto:{
        backgroundColor:'#dae0e3',
        width:'100%',
        height:'30%',
        borderRadius:8,
        paddingLeft:10
    },
})