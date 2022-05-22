import React, { useEffect, useContext } from 'react'
import { ScrollView, View, Text, TouchableOpacity, StyleSheet, Image, Keyboard, TextInput } from 'react-native';
import { useForm } from '../../../hooks/useForm';

import { UserUpdateContext } from '../../../context/UserContext';
import { StackScreenProps } from '@react-navigation/stack';
import { UserStackParams } from '../../../Navegation/UserNavigation';

import { styles } from '../../../theme/LoginRegisterTheme';

//icon
import { MaterialIcons } from '@expo/vector-icons';  



interface Props extends StackScreenProps<UserStackParams, 'EditNameUser'>{};



export default function EditName({ navigation, route }: Props) {

  //variables de las routas qyue llegan como parámetros
  const { id = '', NameUser = '' } = route.params;

  //métodos del contex tipo usuario, cargar usuario por Id
  const { loadUserById  } = useContext( UserUpdateContext );

  //variables de apoyo del useForm
  const { nombre, onChange, setFormValue, form } = useForm({
   _id: id,
   nombre: NameUser
  });


  
  //funciones que se activan al acceder a la pestaña
  useEffect(() => {
    navigation.setOptions({
        title: 'Nombre de Usuario',
    })
  }, [])

  useEffect(() => {
    loadUser();
  }, [])
    
    
  //creación de metodos locales, aqui carga la información de nombre de usuario que tenga el usuario
  const loadUser = async() => {
      if ( id.length === 0 ) return;
      const user = await loadUserById( id );
      //console.log (user)
        }

  return (
    <View style={styles.containerIndScreen}>

       {/* input nombre de Usuario */}
      <View style={styles.containerfield}>
        <TextInput 
                        placeholder="Ingrese su nombre de usuario"
                        value={ nombre }
                        placeholderTextColor="gray"
                        underlineColorAndroid="#4b58a6"
                        editable
                        maxLength={30}
                        
                        style={styles.input2}

                        selectionColor="#9caae8"

                        onChangeText={ (value) => onChange(value, 'nombre') }
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
      <Text> { JSON.stringify( form ).replace(/["']/g, "") }</Text>
    </View>
  )
}