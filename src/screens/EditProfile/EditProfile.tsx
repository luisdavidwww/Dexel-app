import React, { useEffect, useContext } from 'react'
import { ScrollView, View, Text, TouchableOpacity, StyleSheet, Image, FlatList } from 'react-native';
import { AuthContext } from '../../context/AuthContext';
import { StackNavigationProp } from '@react-navigation/stack';
import { RootStackParamList } from "../../Navegation/Navigation";
import { useNavigation } from '@react-navigation/core';
import { useForm } from '../../hooks/useForm';

import { styles } from '../../theme/optionsTheme';

//icon
import AntDesign from '@expo/vector-icons/AntDesign';
import { FontAwesome5 } from '@expo/vector-icons';
import { MaterialIcons } from '@expo/vector-icons';
import { Entypo } from '@expo/vector-icons';
import { Fontisto } from '@expo/vector-icons';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import { SimpleLineIcons } from '@expo/vector-icons';

import { StackScreenProps } from '@react-navigation/stack';
import { UserStackParams } from '../../Navegation/UserNavigation';
import EditName from './indScreens/EditDescription';


interface Props extends StackScreenProps<UserStackParams>{}; 


export default function EditProfile({ navigation }: Props) {


  //variable de navegación 
  const navigator = useNavigation<StackNavigationProp<RootStackParamList>>();


  //métodos del contex tipo autentificador de Usuario 
  const { user } = useContext( AuthContext );

  //variables de apoyo del useForm
  const { onChange, img, form } = useForm({
      img: ''
  });


  //funciones que se activan al acceder a la pestaña
  useEffect(() => {
    navigation.setOptions({
        title: 'Editar Perfil'
    })
   }, [])


  return (
    <View style={styles.container}>

       
                        {/* Foto de Perfil */}
                        {
                          (img.length > 0) && (
                            <Image 
                              source={{ uri: img }}
                              style={{
                                marginTop: 20,
                                width: '100%',
                                height: 300
                                }}
                            />
                          )
                        }

      {/* Nombre de Usuario */}
      <TouchableOpacity onPress={ () => navigation.navigate('EditNameUser', { id:user?.uid, NameUser: user?.nombre} )} activeOpacity={0.6}>
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
      <TouchableOpacity  onPress={ () => navigation.navigate('EditName', { id:user?.uid, nameReal: user?.nombreReal} )} activeOpacity={0.6}>
        <View style={styles.containerOp}>
            <View style={styles.containerOp} >
               <MaterialIcons name="drive-file-rename-outline" size={24} color="black" style={styles.icon3} />
               <Text style={styles.fontOp} >Nombre</Text>
            </View>
           <View style={styles.containerOp} >
              <Text style={styles.fontOp2} >{ JSON.stringify( user?.nombreReal ).replace(/["']/g, "") }</Text>
              <AntDesign name="right" size={18} color="gray" style={styles.icon} />
           </View> 
        </View>
      </TouchableOpacity>

      {/* Apellido */}
      <TouchableOpacity onPress={ () => navigation.navigate('EditSurName', { id:user?.uid, Surname: user?.apellido} )} activeOpacity={0.6}>
        <View style={styles.containerOp}>
            <View style={styles.containerOp} >
               <SimpleLineIcons name="user-following" size={21} color="black" style={styles.icon3} />
               <Text style={styles.fontOp} >Apellido</Text>
            </View>
           <View style={styles.containerOp} >
              <Text style={styles.fontOp2}>{ JSON.stringify( user?.apellido ).replace(/["']/g, "") }</Text>
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
      <TouchableOpacity onPress={ () => navigation.navigate('EditDescription', { id:user?.uid, descripcion: user?.descripcion} )} activeOpacity={0.6}>
        <View style={styles.containerOp}>
           <View style={styles.containerOp} >
               <MaterialCommunityIcons name="comment-edit-outline" size={24} color="black" style={styles.icon3} />
               <Text style={styles.fontOp} >Descripción corta</Text>
            </View>
           <View style={styles.containerOp} >
              <Text style={styles.fontOp3} numberOfLines={1} >{ JSON.stringify( user?.descripcion ).replace(/["']/g, "") }</Text>
              <AntDesign name="right" size={18} color="gray" style={styles.icon} />
           </View>            
        </View>
      </TouchableOpacity>
    </View>
  )
}