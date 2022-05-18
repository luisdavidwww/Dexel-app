import React, { useEffect, useContext } from 'react'
import { ScrollView, View, Text, TouchableOpacity, StyleSheet, Image, Keyboard, TextInput } from 'react-native';
import { AuthContext } from '../../../context/AuthContext';
import { useNavigation } from '@react-navigation/core';
import { useForm } from '../../../hooks/useForm';


import { styles } from '../../../theme/LoginRegisterTheme';

//icon
import { MaterialIcons } from '@expo/vector-icons';  


export default function EditName(props: any) {

  const { user, signUp, errorMessage, removeError } = useContext( AuthContext );

  const navigation = useNavigation();

  const { email, password, name, onChange } = useForm({
   name: '',
   email: '',
   password: '' 
  });

  useEffect(() => {
    navigation.setOptions({
        title: 'Nombre de Usuario',
    }),
    user
}, [])

const onRegister = () => {
   console.log({email, password, name});
   Keyboard.dismiss();
   signUp({
     nombre: name,
     correo: email,
     password
 });
}

  return (
    <View style={styles.containerIndScreen}>

       {/* input nombre de Usuario */}
      <View style={styles.containerfield}>
        <TextInput 
                        placeholder="Ingrese su nombre de usuario"
                        placeholderTextColor="gray"
                        underlineColorAndroid="#4b58a6"
                        editable
                        maxLength={30}
                        
                        style={styles.input2}

                        selectionColor="#9caae8"

                        //onChangeText={ (value) => onChange(value, 'name') }
                        //value={ name }
                        //onSubmitEditing={ onRegister }

                        autoCapitalize="none"
                        autoCorrect={ false }
                    />

      </View>
      {/* Consejo */}
      <View style={styles.containerConsejo}>
        <View style={styles.containerIcon}>
          <MaterialIcons name="info-outline" size={18} color="black" />
        </View>
        <View style={styles.containerfield2}>
          <Text style={styles.consejo} >
            El nombre de usuario solo puede contener letras, números, guiones bajos y puntos.
          </Text>
        </View>
      </View>

      {/* btn Guardar Cambios */}
      <View style={styles.containerfield}>
         <TouchableOpacity style={{
               ...styles.button, width: '100%'}}
               //onPress={ onRegister }
               >
            <Text style={{...styles.buttonText,color:'white'}}>Guardar</Text>
         </TouchableOpacity>
      </View>

      

    </View>
  )
}