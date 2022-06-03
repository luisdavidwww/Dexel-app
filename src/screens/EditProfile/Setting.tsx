import React, { useEffect, useContext } from 'react'
import { ScrollView, View, Text, TouchableOpacity, StyleSheet, Image } from 'react-native';
import { useNavigation } from '@react-navigation/core';
import { AuthContext } from '../../context/AuthContext';

import { styles } from '../../theme/optionsTheme';

//icons
import AntDesign from '@expo/vector-icons/AntDesign';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import { Fontisto } from '@expo/vector-icons';



export default function EditProfile(props: any) {

  const { logOut, user } = useContext( AuthContext );

  useEffect(() => {
    navigation.setOptions({
        title: 'Configuración'
    })
}, [])

  //const { user } = props;   

  const UpdateDescription = () => {
    if( user?.uid ) {          
      logOut;
    }
     else {
    }
}

  const navigation = useNavigation();

  return (
    <View style={styles.container}>
      {/* Foto de Perfil */}

      {/* Número de Teléfono */}
      <TouchableOpacity activeOpacity={0.6}>
        <View style={styles.containerOp} >
            <View style={styles.containerOp} >
               <AntDesign name="phone" size={24} color="black" style={styles.icon2} />
               <Text style={styles.fontOp} >Número de teléfono</Text>
            </View>
        </View>
      </TouchableOpacity>

      {/* Nombre de usuario */}
      <TouchableOpacity activeOpacity={0.6}>
        <View style={styles.containerOp}>
            <View style={styles.containerOp} >
               <MaterialCommunityIcons name="email-outline" size={24} color="black" style={styles.icon2} />
               <Text style={styles.fontOp} >Correo electrónico</Text>
            </View>
        </View>
      </TouchableOpacity>

      {/* Direccion */}
      <TouchableOpacity activeOpacity={0.6}>
        <View style={styles.containerOp}>
            <View style={styles.containerOp} >
               <AntDesign name="lock1" size={24} color="black" style={styles.icon2} />
               <Text style={styles.fontOp} >Contraseña</Text>
            </View>
        </View>
      </TouchableOpacity>

      {/* Logout */}
      <TouchableOpacity activeOpacity={0.6} onPress={ logOut }>
        <View style={styles.containerOp}>
            <View style={styles.containerOp} >
               <Fontisto name="close" size={24} color="#4b58a6" style={styles.icon2} />
               <Text style={styles.fontLogout} >Cerrar Sesión</Text>
            </View>
        </View>
      </TouchableOpacity>
    </View>
  )
}