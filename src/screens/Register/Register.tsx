import React, { useEffect } from "react";
import { StatusBar } from 'expo-status-bar';
import { StyleSheet,Image,  Text, View, TextInput, Button, Platform, TouchableOpacity, Keyboard, KeyboardAvoidingView } from 'react-native';
import { useForm } from '../../hooks/useForm';

import { StackScreenProps } from '@react-navigation/stack';

import { styles }   from '../../theme/LoginRegisterTheme';


interface Props extends StackScreenProps<any, any> {}

export const Register = ( { navigation }: Props) => {


   const { email, password, name, onChange } = useForm({
      name: '',
      email: '',
      password: '' 
     });

    const onRegister = () => {
    console.log({email, password, name});
    //Keyboard.dismiss();
}


return(
  <>
 <KeyboardAvoidingView behavior={ (Platform.OS === 'ios') ? 'padding': 'height' }>
      <View style={styles.container} >
        <View style={styles.container2}>
  
          {/* Titulo app */}
          <Text style={styles.titulo}>Resgistrate en</Text>
            <View style={styles.containerLogo} >
              <Image style={styles.logo} source={require('../../stactic/img/dexel.png')}/>
            </View>

          {/* Usuario */}    
          <Text style={styles.tituloRegister}>Nombre de Usuario</Text>
          <Text style={styles.subtituloRegister}>Podrás cambiarlo más tarde</Text>

          <TextInput    placeholder="Nombre" 
                        placeholderTextColor="gray"

                        style={styles.input}

                        selectionColor="#4b58a6"

                        onChangeText={ (value) => onChange(value, 'name') }
                        value={ name }
                        onSubmitEditing={ onRegister }

                        autoCapitalize="none"
                        autoCorrect={ false }/>

          {/* Email */}    
          <Text style={styles.tituloRegister}>Correo Electrónico</Text>   
          <Text style={styles.subtituloRegister}>Asegurate de no tener una cuenta creada con el mismo email</Text>
          <TextInput    placeholder="Correo electrónico" 
                        placeholderTextColor="gray"
                        keyboardType="email-address"

                        style={styles.input}

                        selectionColor="#4b58a6"

                        onChangeText={ (value) => onChange(value, 'email') }
                        value={ email }
                        onSubmitEditing={ onRegister }

                        autoCapitalize="none"
                        autoCorrect={ false }/>

          {/* Contraseña */}
          <Text style={styles.tituloRegister}>Crea una Contraseña</Text>
          <Text style={styles.subtituloRegister}>Debe tener entre 8 y 15 caracteres. Letras, números y caracteres especiales</Text>  
          <TextInput    placeholder="Introduce la contraseña"
                        placeholderTextColor="gray"

                        style={styles.input}
                        secureTextEntry

                        selectionColor="#4b58a6"

                        onChangeText={ (value) => onChange(value, 'password') }
                        value={ password }
                        onSubmitEditing={ onRegister }

                        autoCapitalize="none"
                        autoCorrect={ false }
                    />


          {/* btn Iniciar Secion */}
          <TouchableOpacity style={{
               ...styles.button, width: '95%', marginTop:35}}
               onPress={ onRegister }
               >
            <Text style={{...styles.buttonText,color:'white'}}>Registrarse</Text>
          </TouchableOpacity>
      </View>
    </View>
  
  </KeyboardAvoidingView>
  {/* Registrate */}
  <TouchableOpacity onPress={()=> navigation.replace('Login')}>
        <View style={styles.container3}>
          <Text style={{...styles.subtitulo3,color:'black'}}>¿Ya tienes una cuenta? </Text>
          <Text style={{...styles.subtitulo4,color:'blue'}}>Inicia Sesión</Text>
        </View>    
  </TouchableOpacity>
  </>
  )
};
