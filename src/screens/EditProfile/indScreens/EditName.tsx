import React, { useEffect, useContext } from 'react'
import { ScrollView, View, Text, TouchableOpacity, StyleSheet, Image, Keyboard, TextInput } from 'react-native';
import { AuthContext } from '../../../context/AuthContext';
import { useNavigation } from '@react-navigation/core';
import { useForm } from '../../../hooks/useForm';

import { UserUpdateContext } from '../../../context/UserContext';
import { StackScreenProps } from '@react-navigation/stack';
import { UserStackParams } from '../../../Navegation/UserNavigation';

import { styles } from '../../../theme/LoginRegisterTheme';

//icon
import { MaterialIcons } from '@expo/vector-icons'; 



interface Props extends StackScreenProps<UserStackParams, 'EditName'>{};


export default function EditName({ navigation, route }: Props) {



  //variables de las routas qyue llegan como parámetros
  const { id = '', nameReal = '' } = route.params;

  //métodos del contex tipo usuario
  const { loadUserById  } = useContext( UserUpdateContext );

  //variables de apoyo del useForm
  const { nombre, onChange, setFormValue } = useForm({
    _id: id,
    nombre: nameReal 
   });



  //funciones que se activan al acceder a la pestaña
  useEffect(() => {
    navigation.setOptions({
        title: 'Nombre',
    })
    }, [])



  //creación de metodos locales
  const loadUser = async() => {
    if ( id.length === 0 ) return;
    const user = await loadUserById( id );
      setFormValue({
        _id: user.uid,
        nombre
       })
    }



  return (
    <View style={styles.containerIndScreen}>
       {/* input nombre de Usuario */}
      <View style={styles.containerfield}>
         <TextInput 
                        placeholder="Ingrese su Nombre"
                        placeholderTextColor="gray"
                        underlineColorAndroid="#4b58a6"
                        editable
                        maxLength={30}
                        
                        style={styles.input2}

                        selectionColor="#9caae8"

                        //onChangeText={ (value) => onChange(value, 'name') }
                        value={ nombre }
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
        <View style={styles.containerfield}>
          <Text style={styles.consejo} >
            Indícanos tu nombre de pila.
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