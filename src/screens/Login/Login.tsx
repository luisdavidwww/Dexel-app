import React from 'react';
import { StyleSheet, Button, View, SafeAreaView, Text, Alert, TextInput } from 'react-native';
import { TouchableOpacity } from 'react-native';
//import { TextInput } from 'react-native-web';
import { useNavigation } from '@react-navigation/native'


export const Login = () => (
  <SafeAreaView style={styles.container}>
    <View style={styles.container2}>
      <Text style={styles.titulo}>Bienvenido</Text>
      <Text style={styles.subtitulo}>Sing in to your account</Text>

      <TextInput placeholder="Username" style={styles.input}/>
      <TextInput placeholder="Password" style={styles.input}/>

      <TouchableOpacity>
        <Text style={{...styles.subtitulo2,color:'blue'}}>Forgot your Password?</Text>
      </TouchableOpacity>

      <TouchableOpacity style={{
          ...styles.button,
          backgroundColor:'#545cda', width: '95%'}}
          onPress={()=>alert('hola')}>
        <Text style={{...styles.buttonText,color:'white'}}>Registrate</Text>
      </TouchableOpacity>

      <TouchableOpacity>
        <Text style={{...styles.subtitulo3,color:'blue'}}>Don't hace account? create</Text>
      </TouchableOpacity>
    </View>
  </SafeAreaView>
);

const styles = StyleSheet.create({
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
    backgroundColor: 'Black',
    padding:50,
    marginTop:'35%',
    marginBottom:'35%',
  },
  
  button:{
      alignSelf: 'center',
      paddingVertical:15,
      borderRadius:10,
  },
  buttonText: {
      textAlign: 'center'
  },
  input: {
    borderColor:'gray',
    //padding: 10,
    borderWidth: 1,
    width: '90%',
    //marginTop: 10,
    //marginBottom: 10,
    borderRadius:10,
    height: 50,
    paddingStart:15,
    marginLeft:'5%',
    marginTop: '4%'
  },
  titulo: {
    fontSize:30,
    alignSelf: 'center',
    paddingTop:20,
  },
  subtitulo: {
    fontSize: 15,
    color: 'gray',
    marginLeft:'5%'
  },
  subtitulo2: {
    fontSize: 15,
    color: 'black',
    margin:10,
  },
  subtitulo3: {
    fontSize: 15,
    color: 'black',
    margin:10,
  },
});