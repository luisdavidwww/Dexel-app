import React, { useEffect, useContext, useState } from 'react'
import { ScrollView, View, Text, TouchableOpacity, StyleSheet, Image, Keyboard, TextInput, RefreshControl } from 'react-native';
import { useForm } from '../../../hooks/useForm';

import { UserUpdateContext } from '../../../context/UserContext';
import { StackScreenProps } from '@react-navigation/stack';
import { UserStackParams } from '../../../Navegation/UserNavigation';

import { styles } from '../../../theme/LoginRegisterTheme';

//icon
import { MaterialIcons } from '@expo/vector-icons';  



interface Props extends StackScreenProps<UserStackParams, 'EditNameUser'>{};



export default function EditName({ navigation, route }: Props) {

  //variables para el metodo de refrescar pantalla
  const [ isRefreshing, setIsRefreshing ] = useState( false );

  //definimos las variables de las routas que llegan como parámetros dela pestaña "Editar Perfil"
  const { id = '', NameUser = '' } = route.params;

  //métodos del contex tipo usuario
  const { loadUserById, updateUserName  } = useContext( UserUpdateContext );

  //variables de apoyo del formulario
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
    loadUserFromBackend();
  }, [])
  useEffect(() => {
    UpdateName();
  }, [])
    

  //método que actualiza al usuario
  const loadUserFromBackend = async() => {
    setIsRefreshing(true);
    await loadUserById(id);
    updateUserName( id, nombre );
    setIsRefreshing(false);
    }

  // Metodo para Actualizar el Nombre de usuario
  const UpdateName = async() => {
    if( nombre.length > 0 ) {            
      await updateUserName( id, nombre );
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


      {NameUser === nombre
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