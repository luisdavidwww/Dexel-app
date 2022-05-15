import React from "react";
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, TextInput, Button, TouchableOpacity } from 'react-native';


import { StackScreenProps } from '@react-navigation/stack';


interface Props extends StackScreenProps<any, any> {}


export const Register3 = ({ navigation }: Props) => {

  return(
    <View style={styles.container}>

      <Text style={styles.subtitulo2}>¿Cuál es tu Correo eletrónico?</Text>
      <TextInput
      placeholder="Indique Correo eletrónico"
      style={styles.input}
      />
      <Text style={styles.subtitulo2}>¿Cuál es tu Teléfono?</Text>
      <TextInput 
      placeholder="Indique número de Teléfono"
      style={styles.input}
      />
      
      <TouchableOpacity style={{
          ...styles.button,
          backgroundColor:'blue', width: '95%'}}
          onPress={()=> navigation.navigate('Register4')}>
        <Text style={{...styles.buttonText,color:'white'}}>Siguiente</Text>
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