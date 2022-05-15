import React, { useEffect,useContext } from 'react';
import { StyleSheet, Button,Platform, View, SafeAreaView, Text, Keyboard, TextInput,Alert, Image, KeyboardAvoidingView  } from 'react-native';
import { TouchableOpacity } from 'react-native';
import { useForm } from '../../hooks/useForm';
import { AuthContext } from '../../context/AuthContext';

import { StackScreenProps } from '@react-navigation/stack';
import { useNavigation } from '@react-navigation/native';

import { styles }   from '../../theme/LoginRegisterTheme';


interface Props extends StackScreenProps<any, any> {}

export const Login = ({ navigation }: Props) => {


  {/* función del context */}
  const { signIn, errorMessage, removeError } = useContext( AuthContext );

  {/* hook de form */}
  const { email, password, onChange } = useForm({
    email: '',
    password: '' 
 });

 useEffect(() => {
  if( errorMessage.length === 0 ) return;

  Alert.alert( 'Login incorrecto', errorMessage,[{
      text: 'Ok',
      onPress: removeError
  }]);

}, [ errorMessage ])

  {/* Método de Iniciar sesión */}
 const onLogin = () => {
  console.log({email, password});
  Keyboard.dismiss();
  signIn({ correo: email, password });
}



 return(
  <>
  <KeyboardAvoidingView behavior={ (Platform.OS === 'ios') ? 'padding': 'height' }>
      <View style={styles.container} >
        <View style={styles.container2}>

          {/* Titulo app */}
          <Text style={styles.titulo}>Bienvenido a </Text>
            <View style={styles.containerLogo} >
              <Image style={styles.logo} source={require('../../stactic/img/dexel.png')}/>
            </View>
    
          {/* Comentario */}
          <Text style={styles.subtitulo}>Ingresa a tu cuenta</Text>

          {/* Usuario */}
          <TextInput    placeholder="Introduce tu Email" 
                        placeholderTextColor="gray"
                        keyboardType="email-address"

                        style={styles.input}

                        selectionColor="#4b58a6"

                        onChangeText={ (value) => onChange(value, 'email') }
                        value={ email }
                        onSubmitEditing={ onLogin }

                        autoCapitalize="none"
                        autoCorrect={ false }/>

          {/* Contraseña */}
          <TextInput    placeholder="Introduce la contraseña"
                        placeholderTextColor="gray"
                        style={styles.input}
                        secureTextEntry

                        selectionColor="#4b58a6"

                        onChangeText={ (value) => onChange(value, 'password') }
                        value={ password }
                        onSubmitEditing={ onLogin }

                        autoCapitalize="none"
                        autoCorrect={ false }
                    />

          {/* Olvidaste tu contraseña */}
          <TouchableOpacity>
            <Text style={{...styles.subtitulo2,color:'black', fontWeight: 'bold',}}>¿Olvidaste tu contraseña?</Text>
          </TouchableOpacity>

          {/* btn Iniciar Secion */}
          <TouchableOpacity style={{
               ...styles.button, width: '95%'}}
               onPress={ onLogin }
               >
            <Text style={{...styles.buttonText,color:'white'}}>Iniciar Sesión</Text>
          </TouchableOpacity>
      </View>
    </View>
  
  </KeyboardAvoidingView>

  
  {/* Registrate */}
  <TouchableOpacity onPress={()=> navigation.replace('Register')}>
        <View style={styles.container3}>
          <Text style={{...styles.subtitulo3,color:'black'}}>¿No tienes una cuenta? </Text>
          <Text style={{...styles.subtitulo4,color:'blue'}}>Registrate</Text>
        </View>    
      </TouchableOpacity>
  </>
  )
};