import { StyleSheet } from 'react-native';

export const colores = {
    primary: '#5856D6',
}


export const styles = StyleSheet.create({
    container: {
      flexDirection: "row",
      alignContent: "center",
      justifyContent: 'center',
      width: '100%',
      backgroundColor: 'white',
    },
    container2: {
      alignContent: "center",
      justifyContent: 'center',
      width: '100%',
      padding:20,
      marginVertical:15,
      marginHorizontal:3
    },
    container3: {
      flexDirection: "row", 
      justifyContent: 'center',
    },
    container4: {
      alignContent: "center",
      justifyContent: 'center',
      width: '100%',
      padding:20,
      marginVertical:15,
      marginHorizontal:10
    },
    containerLogo: {
      justifyContent:'center',
      alignItems:'center',
      width: '100%',
      marginStart:-7,
      marginBottom:10
    },
    logo: {
      width: 200,
      height: 56,
    }, 
    button:{
        alignSelf: 'center',
        paddingVertical:15,
        borderRadius:10,
        backgroundColor:'#545cda'
    },
    buttonText: {
        textAlign: 'center'
    },
    input: {
      borderColor:'#4b58a6',
      borderWidth: 1,
      width: '100%',
      borderRadius:10,
      height: 50,
      paddingStart:15,
      marginTop: 15,
      color:'#4b58a6',
      fontSize: 12,
    },
    titulo: {
      fontSize:25,
      alignSelf: 'center',
      paddingTop:20,
      fontWeight: 'bold',
    },
    subtitulo: {
      fontSize: 15,
      color: 'gray',
      marginLeft:'5%',
      marginTop:10
    },
    subtitulo2: {
      fontSize: 15,
      color: 'black',
      margin:10,
    },
    subtitulo3: {
      fontSize: 15,
      color: 'black',
      //marginStart:10,
      marginTop:10,
    },
    subtitulo4: {
      fontSize: 15,
      color: 'black',
      fontWeight: 'bold',
      //marginStart:10,
      marginTop:10,
    },
    tituloRegister: {
      fontSize: 18,
      color: 'black',
      fontWeight: 'bold',
      marginTop:20
    },
    subtituloRegister: {
      fontSize: 12,
      color: 'gray'
    },
  inputField: {
    color:'#4b58a6',
    fontSize: 20,
    paddingBottom: 9
  },
  });