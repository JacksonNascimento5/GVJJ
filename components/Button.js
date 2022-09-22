import { TouchableOpacity, StyleSheet, Text } from 'react-native';

export default function Button({texto}) {
 return (
    <TouchableOpacity style={styles.button}>
        <Text style={styles.buttonText}>{texto}</Text>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
    button:{
        backgroundColor:'#353dfa',
        width:'80%',
        borderRadius:7,
        alignItems:'center',
        justifyContent:'center',
        marginTop:30,
        height:'8%'
    },
    buttonText:{
        color:'#fff',
        fontSize:17,
        fontWeight:'bold'
    }
})