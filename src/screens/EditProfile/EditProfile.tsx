import React, { useEffect, useContext, useState } from 'react'
import { ScrollView, View, Text, TouchableOpacity, Modal, Image, FlatList, Button, RefreshControl } from 'react-native';
import Svg, { Path, Defs, LinearGradient, Stop } from "react-native-svg";
import { AuthContext } from '../../context/AuthContext';
import { StackNavigationProp } from '@react-navigation/stack';
import { RootStackParamList } from "../../Navegation/Navigation";
import { useNavigation } from '@react-navigation/core';
import { useForm } from '../../hooks/useForm';
import { UserUpdateContext } from '../../context/UserContext';

//estilos
import { styles } from '../../theme/optionsTheme';

//icon
import AntDesign from '@expo/vector-icons/AntDesign';
import { FontAwesome5 } from '@expo/vector-icons';
import { MaterialIcons } from '@expo/vector-icons';
import { Fontisto } from '@expo/vector-icons';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import { SimpleLineIcons } from '@expo/vector-icons';

import { StackScreenProps } from '@react-navigation/stack';
import { UserStackParams } from '../../Navegation/UserNavigation';


//aquí llamo a los parametros de pantallas
interface Props extends StackScreenProps<UserStackParams>{}; 


export default function EditProfile({ navigation }: Props) {

   //funcion estilo para la foto de Perfil
   function SvgProfilePicture() {
      return (
        <Svg
          width={88}
          height={88}
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
        </Svg>
      )
    }


  //variable de navegación 
  const navigator = useNavigation<StackNavigationProp<RootStackParamList>>();

  //variables para el metodo de refrescar pantalla
  const [ isRefreshing, setIsRefreshing ] = useState( false );


  //métodos del contex tipo usuario
  const { loadUserById, updateUserDescription, updateUserApellido, updateUserNameReal, updateUserName, usuario  } = useContext( UserUpdateContext );

  //métodos del contex tipo autentificador de Usuario 
  const { user, signIn } = useContext( AuthContext );



  //variables de apoyo del formulario
  const { onChange, img, descripcion, apellido } = useForm({
   _id: user?.uid,
   nombre:'',
   descripcion: '',
   apellido: '',
   img: ''
  });




  //funciones que se activan al acceder a la pestaña
  useEffect(() => {
    navigation.setOptions({
        title: 'Editar Perfil'
    })
   }, [])
   useEffect(() => {
      loadUserFromBackend();
    }, [])



    //método que actualiza al usuario
    const loadUserFromBackend = async() => {
      setIsRefreshing(true);
      const _id= user?.uid
      const usuario = await loadUserById( _id )
      
      //await updateUserDescription( _id, usuario.descripcion );
      //await updateUserApellido( _id, usuario.apellido );
      //await updateUserNameReal( _id, usuario.nombreReal );
      await updateUserName( _id, usuario.nombre );

      setIsRefreshing(false);
      console.log("-----------------------------------------------------------------------------------------------");
      console.log(usuario.nombre);
      console.log(usuario.nombreReal);
      console.log(usuario.apellido);
      console.log(usuario.descripcion);    
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
    <View style={styles.container}>

      {/* Nombre de Usuario */}
      <TouchableOpacity onPress={ () => navigation.navigate('EditNameUser', { id:user?.uid, NameUser: usuario?.nombre} )} activeOpacity={0.6}>
        <View style={styles.containerOp} >
            <View style={styles.containerOp} >
               <FontAwesome5 name="user" size={19} color="black" style={styles.icon3} />
               <Text style={styles.fontOp} >Nombre de Usuario</Text>
            </View>
           <View style={styles.containerOp} >
              <Text style={styles.fontOp2} >{ JSON.stringify( usuario?.nombre ).replace(/["']/g, "") }</Text>
              <AntDesign name="right" size={18} color="gray" style={styles.icon} />
           </View>
        </View>
      </TouchableOpacity>

      {/* Nombre */}
      <TouchableOpacity  onPress={ () => navigation.navigate('EditName', { id:user?.uid, nameReal: usuario?.nombreReal} )} activeOpacity={0.6}>
        <View style={styles.containerOp}>
            <View style={styles.containerOp} >
               <MaterialIcons name="drive-file-rename-outline" size={24} color="black" style={styles.icon3} />
               <Text style={styles.fontOp} >Nombre</Text>
            </View>
           <View style={styles.containerOp} >
              <Text style={styles.fontOp2} >{ JSON.stringify( usuario?.nombreReal ).replace(/["']/g, "") }</Text>
              <AntDesign name="right" size={18} color="gray" style={styles.icon} />
           </View> 
        </View>
      </TouchableOpacity>

      {/* Apellido */}
      <TouchableOpacity onPress={ () => navigation.navigate('EditSurName', { id:user?.uid, Surname: usuario?.apellido} )} activeOpacity={0.6}>
        <View style={styles.containerOp}>
            <View style={styles.containerOp} >
               <SimpleLineIcons name="user-following" size={21} color="black" style={styles.icon3} />
               <Text style={styles.fontOp} >Apellido</Text>
            </View>
           <View style={styles.containerOp} >
              <Text style={styles.fontOp2}>{ JSON.stringify( usuario?.apellido ).replace(/["']/g, "") }</Text>
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
      <TouchableOpacity onPress={ () => navigation.navigate('EditDescription', { id:user?.uid,  descripcion: usuario?.descripcion  } )} activeOpacity={0.6}>
        <View style={styles.containerOp}>
           <View style={styles.containerOp} >
               <MaterialCommunityIcons name="comment-edit-outline" size={24} color="black" style={styles.icon3} />
               <Text style={styles.fontOp} >Descripción corta</Text>
            </View>
           <View style={styles.containerOp} >
              <Text style={styles.fontOp4} numberOfLines={1} >{ usuario?.descripcion }</Text>
              <AntDesign name="right" size={18} color="gray" style={styles.icon} />
           </View>            
        </View>
      </TouchableOpacity>

    </View>

</ScrollView>
  )
}
