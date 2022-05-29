import React, { useEffect, useContext, useState } from 'react'
import { ScrollView, View, Text, TouchableOpacity, StyleSheet, Image, Keyboard, TextInput, Button, RefreshControl } from 'react-native';
import { useForm } from '../../../hooks/useForm';

import { UserUpdateContext } from '../../../context/UserContext';
import { StackScreenProps } from '@react-navigation/stack';
import { UserStackParams } from '../../../Navegation/UserNavigation';

import { styles } from '../../../theme/LoginRegisterTheme';

//icon
import { MaterialIcons } from '@expo/vector-icons';  



interface Props extends StackScreenProps<UserStackParams, 'EditDescription'>{};


export default function EditName({ navigation, route }: Props) {


  //estado inicial para el pull to refresh
  const [ isRefreshing, setIsRefreshing ] = useState( false );

  //variables de las routas que llegan como parámetros
  const { id = '', descripcion = '' } = route.params;

  //métodos del contex tipo usuario
  const { loadUserById, updateUserDescription  } = useContext( UserUpdateContext );

  //variables de apoyo del useForm
  const { onChange, setFormValue, descripcionn, form } = useForm({
   _id: id,
   descripcionn: descripcion 
  });


  //funciones que se activan al acceder a la pestaña
  useEffect(() => {
    navigation.setOptions({
        title: 'Descripción',
    })
  }, [])
  useEffect(() => {
    loadUser();
  }, [])


  //pull to refresh
  const loadProductsFromBackend = async() => {
    setIsRefreshing(true);
    await loadUserById(id);
    updateUserDescription( id, descripcionn );
    setIsRefreshing(false);
}

  //creación de metodos locales, aqui carga la información de descripción que tenga el usuario
  const loadUser = async() => {
      if ( id.length === 0 ) return;
      const user = await loadUserById( id );
        setFormValue({
          _id: user.uid,
          descripcionn
           })
        }


  // Metodo para Actualizar la Descripción
  const UpdateDescription = async() => {
        if( descripcionn.length > 0 ) {            
          await updateUserDescription( id, descripcionn );
          loadProductsFromBackend();
        }
         else {
        }
    }



  return (
  <ScrollView
  refreshControl={
    <RefreshControl 
        refreshing={ isRefreshing }
        onRefresh={ loadProductsFromBackend }
    />
      }
  >
    <View  style={styles.containerIndScreen} >
       {/* input nombre de Usuario */}
      <View style={styles.containerfield}>
          <TextInput 
                        placeholder="Cuentanos como te describes a ti mismo"
                        value={ descripcionn }
                        placeholderTextColor="gray"
                        underlineColorAndroid="#4b58a6"
                        editable
                        maxLength={200}
                        
                        style={styles.inputDescripcion}

                        selectionColor="#9caae8"

                        onChangeText={ (value) => onChange(value, 'descripcionn') }
                        //onSubmitEditing={ UpdateDescription }

                        autoCapitalize="none"
                        autoCorrect={ false }
                        multiline={true}
                        
                    />

      </View>

      {/* Consejo */}
      <View style={styles.containerConsejo}>
        <View style={styles.containerIcon}>
          <MaterialIcons name="info-outline" size={18} color="black" />
        </View>
        <View style={styles.containerfield2}>
          <Text style={styles.consejo} >
            Describete en pocas palabras. Todos los usuarios verán tu descripción en tu perfil.
          </Text>
        </View>
      </View>

      {/* btn Guardar Cambios */}
      <View style={styles.containerfield}>


      {descripcion === descripcionn
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
                        onPress={ UpdateDescription }
                        >
                      <Text style={{...styles.buttonText,color:'white'}}>Guardar</Text>  
                 </TouchableOpacity>
      
        </>    
    }

      </View>

        


      <Text> { JSON.stringify( form ).replace(/["']/g, "") }</Text>
    </View>
  </ScrollView>
  )
}