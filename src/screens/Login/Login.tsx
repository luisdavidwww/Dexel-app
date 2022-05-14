import React from 'react';
import { StyleSheet, Button, View, SafeAreaView, Text, Alert, TextInput, Image } from 'react-native';
import { TouchableOpacity } from 'react-native';
//import { TextInput } from 'react-native-web';
import { useNavigation } from '@react-navigation/native'


export const Login = () => (
  <SafeAreaView style={styles.container}>
    <View style={styles.container2}>
      
      <View style={styles.containerLogo} >
        <Image style={styles.logo} source={require('../../stactic/img/dexel.png')}/>
      </View>
    
      <Text style={styles.titulo}>Bienvenido</Text>
      <Text style={styles.subtitulo}>Ingresa a tu cuenta</Text>

      {/* Usuario */}
      <TextInput        placeholder="Ingrese su Email" 
                        placeholderTextColor="gray"
                        keyboardType="email-address"

                        style={styles.input}

                        selectionColor="#4b58a6"

                        autoCapitalize="none"
                        autoCorrect={ false }/>

      {/* Contraseña */}
      <TextInput        placeholder="contraseña"
                        placeholderTextColor="gray"
                        style={styles.input}
                        secureTextEntry

                        selectionColor="#4b58a6"

                        autoCapitalize="none"
                        autoCorrect={ false }
                    />

      <TouchableOpacity>
        <Text style={{...styles.subtitulo2,color:'black', fontWeight: 'bold',}}>¿Olvidaste tu contraseña?</Text>
      </TouchableOpacity>

      <TouchableOpacity style={{
          ...styles.button, width: '95%'}}
          onPress={()=>alert('hola')}>
        <Text style={{...styles.buttonText,color:'white'}}>Registrate</Text>
      </TouchableOpacity>

      <TouchableOpacity>
        <View style={{flexDirection: "row", justifyContent: "center"}}>
        <Text style={{...styles.subtitulo3,color:'black'}}>¿No tienes una cuenta? </Text>
        <Text style={{...styles.subtitulo4,color:'blue'}}>Registrate</Text>
        </View>    
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
    //backgroundColor: 'black',
    padding:50,
    marginTop:'35%',
    marginBottom:'35%',
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
    //padding: 10,
    borderWidth: 1,
    width: '90%',
    //marginTop: 10,
    //marginBottom: 10,
    borderRadius:10,
    height: 50,
    paddingStart:15,
    marginLeft:'5%',
    marginTop: '4%',
    color:'#4b58a6',
    fontSize: 12,
  },
  titulo: {
    fontSize:30,
    alignSelf: 'center',
    paddingTop:20,
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
  containerLogo: {
    justifyContent:'center',
    alignItems:'center',
    width: '100%',
  },
  logo: {
    width: 200,
    height: 56,
},
inputField: {
  color:'#4b58a6',
  fontSize: 20,
  paddingBottom: 9
},
});