import React from "react";
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, TextInput, Button, TouchableOpacity } from 'react-native';
import { Login } from '../Login';



export const Registrar = () => (
    <View style={styles.container}>

        <View>
          <Text style={{...styles.subtitulo, justifyContent: 'center'}}>Registrarse en </Text>
        </View>

      <TextInput 
      placeholder="Número de teléfono o correo electrónico"
      style={styles.input}
      />
      
      <TouchableOpacity style={{
          ...styles.button,
          backgroundColor:'blue', width: '95%'}}
          onPress={()=>alert('hola')}>
        <Text style={{...styles.buttonText,color:'white'}}>Continuar con Facebook</Text>
      </TouchableOpacity>

      <TouchableOpacity style={{
          ...styles.button,
          backgroundColor:'blue', width: '95%'}}
          onPress={()=>alert('hola')}>
        <Text style={{...styles.buttonText,color:'white'}}>Continuar con Google</Text>
      </TouchableOpacity>

      <TouchableOpacity style={{
          ...styles.button,
          backgroundColor:'blue', width: '95%'}}
          onPress={()=>alert('hola')}>
        <Text style={{...styles.buttonText,color:'white'}}>Continuar con Twitter</Text>
      </TouchableOpacity>

      <StatusBar style="auto" />
    </View>
  );

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    width:'95%',
    marginTop:'5%',
    marginBottom:'5%',
  },
  
  button:{
    alignSelf: 'center',
    paddingVertical:15,
    borderRadius:10,
    width: '100%',
    margin:'1%'
  },
  buttonText: {
    textAlign: 'center'
  },
  subtitulo: {
    fontSize: 25,
    color: 'black',
    fontWeight: "bold",
    justifyContent:'center',
    margin:'5%'
  },
  input: {
    borderColor:'gray',
    padding: 10,
    borderWidth: 1,
    width: '95%',
    margin: '2%',
    borderRadius:10,
    height: 50,
    paddingStart:15,
  },
  icon: {
    fontSize: 10,
    color: 'black',
  }
});