import React from "react";
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, TextInput, Button, TouchableOpacity } from 'react-native';
import { Registrar2 } from '../Register/Register2';


export const Registrar1 = () => (
    <View style={styles.container}>

      <View style={{flexDirection: 'row'}}>

        <View style={{flex: 1}}>
          <TouchableOpacity onPress={()=> this.Login} style={{...styles.button2}}>
          <Text style={{color:'black', fontSize: 60}}>←</Text>
          </TouchableOpacity>
        </View>

        <View style={{flex: 1}}>
          <Text style={{...styles.subtitulo, justifyContent: 'center'}}>Registrarse</Text>
        </View>
      </View>


      <Text style={styles.subtitulo2}>Crea una contraseña</Text>
      <TextInput
      placeholder="Introduce a contraseña"
      style={styles.input}
      />
      <Text style={styles.subtitulo2}>Tu contraseña debe tener:</Text>
      <Text style={styles.subtitulo3}>Entre 8 y 15 caracteres</Text>
      <Text style={styles.subtitulo3}>Letras, números y caracteres especiales</Text>
      
      <TouchableOpacity style={{
          ...styles.button,
          backgroundColor:'blue', width: '95%'}}>
        <Text style={{...styles.buttonText,color:'white'}}>Siguiente</Text>
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
  },
  buttonText: {
    textAlign: 'center'
  },
  subtitulo: {
    fontSize: 25,
    color: 'black',
    fontWeight: "bold",
    justifyContent:'center'
  },
  subtitulo2: {
    fontSize: 20,
    color: 'black',
    fontWeight: "bold",
    textAlign: "left",
    width: '95%',
    marginTop:15,
  },
  subtitulo3: {
    fontSize: 15,
    color: 'gray',
    textAlign: "left",
    width: '95%',
    marginBottom: 10
  },
  input: {
    borderColor:'gray',
    padding: 10,
    borderWidth: 1,
    width: '95%',
    margin: '5%',
    borderRadius:10,
    height: 50,
    paddingStart:15,
  },
  icon: {
    fontSize: 10,
    color: 'black',
  }
});