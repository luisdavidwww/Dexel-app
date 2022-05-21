import React, { useEffect, useContext } from 'react'
import { ScrollView, View, Text, TouchableOpacity, StyleSheet, Image, Keyboard, TextInput } from 'react-native';
import { useForm } from '../../../hooks/useForm';

import { UserUpdateContext } from '../../../context/UserContext';
import { StackScreenProps } from '@react-navigation/stack';
import { UserStackParams } from '../../../Navegation/UserNavigation';

import { styles } from '../../../theme/LoginRegisterTheme';

//icon
import { MaterialIcons } from '@expo/vector-icons';  



interface Props extends StackScreenProps<UserStackParams, 'EditDescription'>{};


export default function EditName({ navigation, route }: Props) {

  //variables de las routas qyue llegan como parámetros
  const { id = '', descripcion = '' } = route.params;

  //métodos del contex tipo usuario, cargar usuario por Id
  const { loadUserById  } = useContext( UserUpdateContext );

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


  //creación de metodos locales
  const loadUser = async() => {
      if ( id.length === 0 ) return;
      const user = await loadUserById( id );
        setFormValue({
          _id: user.uid,
          descripcionn
           })
        }


  return (
    <View style={styles.containerIndScreen}>
       {/* input nombre de Usuario */}
      <View style={styles.containerfield}>
          <TextInput 
                        placeholder="¿Cómo te describes?"
                        placeholderTextColor="gray"
                        underlineColorAndroid="#4b58a6"
                        multiline={true}
                        editable
                        maxLength={80}
                        
                        style={styles.inputDescripcion}

                        selectionColor="#9caae8"

                        //onChangeText={ (value) => onChange(value, 'name') }
                        value={ descripcion }
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
            Describete en pocas palabras. Todos los usuarios verán tu descripción en tu perfil.
          </Text>
        </View>
      </View>

      {/* btn Guardar Cambios */}
      <View style={styles.containerfield}>
         <TouchableOpacity style={{
               ...styles.button, width: '100%'}}
               >
            <Text style={{...styles.buttonText,color:'white'}}>Guardar</Text>
         </TouchableOpacity>
      </View>


    </View>
  )
}