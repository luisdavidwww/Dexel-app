import React, { useEffect } from 'react'
import { ScrollView, View, Text, TouchableOpacity, StyleSheet, Image } from 'react-native';
import { useNavigation } from '@react-navigation/core';
import Svg, { Path, Defs, LinearGradient, Stop } from "react-native-svg"
import AntDesign from '@expo/vector-icons/AntDesign';

//import { styles } from '../theme/appTheme';


export default function EditProfile(props: any) {

  useEffect(() => {
    navigation.setOptions({
        title: 'Editar Perfil',
        //headerBackTitle: 'Atras'
    })
}, [])

  const { user } = props;   

  const navigation = useNavigation();

  return (
    <View style={styles.container}>
      {/* Foto de Perfil */}

      {/* Nombre */}
      <TouchableOpacity activeOpacity={0.6}>
        <View style={styles.containerOp} >
           <Text style={styles.fontOp} >Nombre</Text>
           <View style={styles.containerOp} >
              <Text style={styles.fontOp2} >Luis David</Text>
              <AntDesign name="right" size={18} color="gray" style={styles.icon} />
           </View>
        </View>
      </TouchableOpacity>

      {/* Nombre de usuario */}
      <TouchableOpacity activeOpacity={0.6}>
        <View style={styles.containerOp}>
           <Text style={styles.fontOp} >Nombre de usuario</Text>
           <View style={styles.containerOp} >
              <Text style={styles.fontOp2} >LuisCrack</Text>
              <AntDesign name="right" size={18} color="gray" style={styles.icon} />
           </View> 
        </View>
      </TouchableOpacity>

      {/* Direccion */}
      <TouchableOpacity activeOpacity={0.6}>
        <View style={styles.containerOp}>
           <Text style={styles.fontOp} >Direccion</Text>
           <View style={styles.containerOp} >
              <Text style={styles.fontOp2} >Calle 59 entre carr..</Text>
              <AntDesign name="right" size={18} color="gray" style={styles.icon} />
           </View> 
        </View>
      </TouchableOpacity>

      {/* Fecha de Nacimiento */}
      <TouchableOpacity activeOpacity={0.6}>
        <View style={styles.containerOp}>
           <Text style={styles.fontOp} >Fecha de Nacimiento</Text>
           <View style={styles.containerOp} >
              <Text style={styles.fontOp2} >25/04/1998</Text>
              <AntDesign name="right" size={18} color="gray" style={styles.icon} />
           </View> 
        </View>
      </TouchableOpacity>

      {/* Descripción corta */}
      <TouchableOpacity activeOpacity={0.6}>
        <View style={styles.containerOp}>
           <Text style={styles.fontOp} >Descripción corta</Text>
           <View style={styles.containerOp} >
              <Text style={styles.fontOp2} >Soy un crack</Text>
              <AntDesign name="right" size={18} color="gray" style={styles.icon} />
           </View>            
        </View>
      </TouchableOpacity>
    </View>
  )
}

const styles = StyleSheet.create({
  globalMargin: {
      marginHorizontal: 20
  },
  container: {
    width: "100%",
    marginTop:5,
    justifyContent: "flex-start"
  },
  containerOp: {
    flexDirection:'row', 
    justifyContent: 'space-between', 
    alignItems: 'center', 
    marginHorizontal: 20,
    marginVertical:10
  },
  fontOp: {
      fontSize: 17,
      marginBottom: 10,
  },
  fontOp2: {
    fontSize: 15,
    marginBottom: 10,
    color: 'gray'
},
icon: {
  marginLeft:5, 
  marginRight:-15,
  marginBottom:7
},
containerPicture: {
  marginTop: 10,
},
userPicture: {
  width: 77,
  height: 77,
  borderRadius: 100,
  marginRight: 10,
  position: 'absolute',
  alignSelf: 'center',
  top: 5,
},
});