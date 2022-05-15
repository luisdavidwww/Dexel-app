import React, { useEffect } from "react";
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, TextInput, Button, TouchableOpacity } from 'react-native';
import { useLinkTo } from '@react-navigation/native';


import { StackScreenProps } from '@react-navigation/stack';


interface Props extends StackScreenProps<any, any> {}

export const Register2 = ({ navigation }: Props) => {


return(
    <View style={styles.container}>

      <Text style={styles.subtitulo2}>¿Cuál es tu fecha de nacimiento?</Text>
      <Text style={styles.subtitulo3}>Tu fecha de nacimiento no se mostrará públicamente</Text>
      <TextInput 
      placeholder="Indique fecha de nacimiento"
      style={styles.input}
      />
      <Text style={styles.subtitulo2}>¿Cuál es tu dirección actual?</Text>
      <Text style={styles.subtitulo3}>Tu dirección no se mostrará públicamente</Text>
      <TextInput 
      placeholder="Indiquie Dirección"
      style={styles.input}
      />
      
      <TouchableOpacity style={{
          ...styles.button,
          backgroundColor:'blue', width: '95%'}}
          onPress={()=> navigation.navigate('Register3')}>
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