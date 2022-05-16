import React, { useEffect, useContext } from 'react'
import { ScrollView, View, Text, TouchableOpacity, StyleSheet, Image } from 'react-native';
import { AuthContext } from '../../context/AuthContext';
import { StackNavigationProp } from '@react-navigation/stack';
import { RootStackParamList } from "../../Navegation/Navigation";
import { useNavigation } from '@react-navigation/core';

import { styles } from '../../theme/optionsTheme';

//icon
import AntDesign from '@expo/vector-icons/AntDesign';
import { FontAwesome5 } from '@expo/vector-icons';
import { MaterialIcons } from '@expo/vector-icons';
import { Entypo } from '@expo/vector-icons';
import { Fontisto } from '@expo/vector-icons';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import { SimpleLineIcons } from '@expo/vector-icons';





export default function EditProfile(props: any) {

  const { user } = useContext( AuthContext );

  useEffect(() => {
    navigation.setOptions({
        title: 'Editar Perfil',
        //headerBackTitle: 'Atras'
    })
}, [])

  //const { user } = props;   

  const navigation = useNavigation<StackNavigationProp<RootStackParamList>>();

  return (
    <View style={styles.container}>
      {/* Foto de Perfil */}

      {/* Nombre de Usuario */}
      <TouchableOpacity onPress={ () => navigation.navigate('EditNameUser', {id: 'EditNameUser'})} activeOpacity={0.6}>
        <View style={styles.containerOp} >
            <View style={styles.containerOp} >
               <FontAwesome5 name="user" size={19} color="black" style={styles.icon3} />
               <Text style={styles.fontOp} >Nombre de Usuario</Text>
            </View>
           <View style={styles.containerOp} >
              <Text style={styles.fontOp2} >{ JSON.stringify( user?.nombre ).replace(/["']/g, "") }</Text>
              <AntDesign name="right" size={18} color="gray" style={styles.icon} />
           </View>
        </View>
      </TouchableOpacity>

      {/* Nombre */}
      <TouchableOpacity  onPress={ () => navigation.navigate('EditName', {id: 'EditName'})} activeOpacity={0.6}>
        <View style={styles.containerOp}>
            <View style={styles.containerOp} >
               <MaterialIcons name="drive-file-rename-outline" size={24} color="black" style={styles.icon3} />
               <Text style={styles.fontOp} >Nombre</Text>
            </View>
           <View style={styles.containerOp} >
              <Text style={styles.fontOp2} >Luis David</Text>
              <AntDesign name="right" size={18} color="gray" style={styles.icon} />
           </View> 
        </View>
      </TouchableOpacity>

      {/* Apellido */}
      <TouchableOpacity onPress={ () => navigation.navigate('EditSurName', {id: 'EditSurName'})} activeOpacity={0.6}>
        <View style={styles.containerOp}>
            <View style={styles.containerOp} >
               <SimpleLineIcons name="user-following" size={21} color="black" style={styles.icon3} />
               <Text style={styles.fontOp} >Apellido</Text>
            </View>
           <View style={styles.containerOp} >
              <Text style={styles.fontOp2} >Torrealba</Text>
              <AntDesign name="right" size={18} color="gray" style={styles.icon} />
           </View> 
        </View>
      </TouchableOpacity>

      {/* Fecha de Nacimiento */}
      <TouchableOpacity activeOpacity={0.6}>
        <View style={styles.containerOp}>
            <View style={styles.containerOp} >
               <Fontisto name="date" size={22} color="black"  style={styles.icon3} />
               <Text style={styles.fontOp} >Fecha de Nacimiento</Text>
            </View>
           <View style={styles.containerOp} >
              <Text style={styles.fontOp2} >25/04/1998</Text>
              <AntDesign name="right" size={18} color="gray" style={styles.icon} />
           </View> 
        </View>
      </TouchableOpacity>

      {/* Descripción corta */}
      <TouchableOpacity onPress={ () => navigation.navigate('EditDescription', {id: 'EditDescription'})} activeOpacity={0.6}>
        <View style={styles.containerOp}>
           <View style={styles.containerOp} >
               <MaterialCommunityIcons name="comment-edit-outline" size={24} color="black" style={styles.icon3} />
               <Text style={styles.fontOp} >Descripción corta</Text>
            </View>
           <View style={styles.containerOp} >
              <Text style={styles.fontOp2} >Soy un crack</Text>
              <AntDesign name="right" size={18} color="gray" style={styles.icon} />
           </View>            
        </View>
      </TouchableOpacity>
    </View>
  )
}