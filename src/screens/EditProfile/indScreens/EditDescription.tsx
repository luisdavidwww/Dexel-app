import React, { useEffect, useContext } from 'react'
import { ScrollView, View, Text, TouchableOpacity, StyleSheet, Image, Keyboard, TextInput } from 'react-native';
import { AuthContext } from '../../../context/AuthContext';
import { useNavigation } from '@react-navigation/core';
import { useForm } from '../../../hooks/useForm';


import { styles } from '../../../theme/LoginRegisterTheme';

//icon
import AntDesign from '@expo/vector-icons/AntDesign';
import { FontAwesome5 } from '@expo/vector-icons';
import { MaterialIcons } from '@expo/vector-icons';
import { Entypo } from '@expo/vector-icons';
import { Fontisto } from '@expo/vector-icons';
import { MaterialCommunityIcons } from '@expo/vector-icons'; 



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
        title: 'Descripción Corta',
    })
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
         <TextInput     placeholder="Descripción"
                        placeholderTextColor="gray"
                        //keyboardType="email-address"

                        style={styles.inputDescripcion}

                        selectionColor="#4b58a6"

                        onChangeText={ (value) => onChange(value, 'email') }
                        value={ email }
                        onSubmitEditing={ onRegister }

                        autoCapitalize="none"
                        autoCorrect={ false }/>

      </View>

      {/* btn Guardar Cambios */}
      <View style={styles.containerfield}>
         <TouchableOpacity style={{
               ...styles.button, width: '100%'}}
               onPress={ onRegister }
               >
            <Text style={{...styles.buttonText,color:'white'}}>Guardar</Text>
         </TouchableOpacity>
      </View>

      

    </View>
  )
}