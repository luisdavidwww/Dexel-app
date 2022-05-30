import React, { useEffect, useContext, useState } from 'react'
import { ScrollView, View, Text, TouchableOpacity, StyleSheet, Image, Keyboard, TextInput, RefreshControl } from 'react-native';
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


  //variables para el metodo de refrescar pantalla
  const [ isRefreshing, setIsRefreshing ] = useState( false );

  //definimos las variables de las routas que llegan como parámetros dela pestaña "Editar Perfil"
  const { id = '', nameReal = '' } = route.params;

  //métodos del contex tipo usuario
  const { loadUserById, updateUserNameReal  } = useContext( UserUpdateContext );

  ////variables de apoyo del formulario
  const { nombreReal, onChange, setFormValue, form } = useForm({
    _id: id,
    nombreReal: nameReal 
   });




  //funciones que se activan al acceder a la pestaña
  useEffect(() => {
    navigation.setOptions({
        title: 'Nombre',
    })
    }, [])
    useEffect(() => {
      //loadProductsFromBackend();
      }, [])



  //método que actualiza al usuario
  const loadUserFromBackend = async() => {
    setIsRefreshing(true);
    await loadUserById(id);
    updateUserNameReal( id, nombreReal );
    setIsRefreshing(false);
    }

    // Metodo para Actualizar el Nombre
  const UpdateName = async() => {
    if( nombreReal.length > 0 ) {            
      await updateUserNameReal( id, nombreReal );
      loadUserFromBackend();
    }
     else {
    }
}


  return (

    <ScrollView
  refreshControl={
    <RefreshControl 
        refreshing={ isRefreshing }
        onRefresh={ loadUserFromBackend }
    />
      }
  >

    <View style={styles.containerIndScreen}>
       {/* input nombre de Usuario */}
      <View style={styles.containerfield}>
         <TextInput 
                        placeholder="Ingrese su Nombre"
                        value={ nombreReal }
                        placeholderTextColor="gray"
                        underlineColorAndroid="#4b58a6"
                        editable
                        maxLength={30}
                        
                        style={styles.input2}

                        selectionColor="#9caae8"

                        onChangeText={ (value) => onChange(value, 'nombreReal') }
                        onSubmitEditing={ UpdateName }

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


      {nameReal === nombreReal
      ? <>
                  <TouchableOpacity style={{
                        ...styles.buttonDisable, width: '100%'}}
                        disabled={true}
                        >
                     <Text style={{...styles.buttonText,color:'#60605f'}}>Guardar</Text>
                  </TouchableOpacity>
        </>
      : <>
                 <TouchableOpacity style={{
                        ...styles.button, width: '100%'}}
                        onPress={ UpdateName }
                        >
                      <Text style={{...styles.buttonText,color:'white'}}>Guardar</Text>  
                 </TouchableOpacity>
      
        </>    
    }

      </View>
    </View>
    </ScrollView>
  )
}