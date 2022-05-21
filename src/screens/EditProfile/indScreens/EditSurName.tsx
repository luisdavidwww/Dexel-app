import React, { useEffect, useContext } from 'react'
import { ScrollView, View, Text, TouchableOpacity, StyleSheet, Image, Keyboard, TextInput } from 'react-native';
import { useForm } from '../../../hooks/useForm';

import { UserUpdateContext } from '../../../context/UserContext';
import { StackScreenProps } from '@react-navigation/stack';
import { UserStackParams } from '../../../Navegation/UserNavigation';

import { styles } from '../../../theme/LoginRegisterTheme';

//icon
import { MaterialIcons } from '@expo/vector-icons';  



interface Props extends StackScreenProps<UserStackParams, 'EditSurName'>{};


export default function EditName({ navigation, route }: Props) {

  
  //variables de las routas qyue llegan como parámetros
  const { id = '', apellido = '' } = route.params;

  //métodos del contex tipo usuario, cargar usuario por Id
  const { loadUserById  } = useContext( UserUpdateContext );

  //variables de apoyo del useForm
  const { onChange, setFormValue } = useForm({
   _id: id,
   apellido: apellido 
  });



  //funciones que se activan al acceder a la pestaña
  useEffect(() => {
    navigation.setOptions({
        title: 'Apellido',
    })
  }, [])


//creación de metodos locales
  const loadUser = async() => {
      if ( id.length === 0 ) return;
      const user = await loadUserById( id );
        setFormValue({
          _id: user.uid,
          apellido
           })
        }


  return (
    <View style={styles.containerIndScreen}>
       {/* input de Apellido */}
      <View style={styles.containerfield}>
          <TextInput 
                        placeholder="Ingrese su Apellido"
                        placeholderTextColor="gray"
                        underlineColorAndroid="#4b58a6"
                        editable
                        maxLength={30}
                        
                        style={styles.input2}

                        selectionColor="#9caae8"

                        //onChangeText={ (value) => onChange(value, 'name') }
                        value={ apellido }
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
            Indícanos tu apellido.
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