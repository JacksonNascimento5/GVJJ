import { TouchableOpacity, StyleSheet, Text } from 'react-native';

export default function ButtonTiny({texto}) {
 return (
    <TouchableOpacity style={styles.button}>
        <Text style={styles.buttonText}>{texto}</Text>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
    button:{
        backgroundColor:'#353dfa',
        width:300,
        borderRadius:7,
        alignItems:'center',
        justifyContent:'center',
        marginTop:10,
        height:40
    },
    buttonText:{
        color:'#fff',
        fontSize:17,
        fontWeight:'bold',
        
    }
})