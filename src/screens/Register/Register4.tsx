import React from "react";
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, TextInput, Button, TouchableOpacity } from 'react-native';

import { StackScreenProps } from '@react-navigation/stack';


interface Props extends StackScreenProps<any, any> {}

export const Register4 = ({ navigation }: Props) => {


  return(
    <View style={styles.container}>

      <Text style={styles.subtitulo2}>Crea un nombre de usuario</Text>
      <Text style={styles.subtitulo3}>Podrás cambiarlo más tarde</Text>
      <TextInput 
      placeholder="Marihec123"
      style={styles.input}
      />
      
      <TouchableOpacity style={{
          ...styles.button,
          backgroundColor:'blue', width: '95%'}}
          onPress={()=>alert('hola')}>
        <Text style={{...styles.buttonText,color:'white'}}>Registrarse</Text>
      </TouchableOpacity>

      <StatusBar style="auto" />
    </View>
  )
  };

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