import React from 'react'
import { ScrollView, View, Text, TouchableOpacity, StyleSheet } from 'react-native';
import AntDesign from '@expo/vector-icons/AntDesign';

//import { styles } from '../theme/appTheme';


export default function EditProfile() {

  return (
    <View style={styles.container}>

      {/* Nombre */}
      <TouchableOpacity activeOpacity={0.6}>
        <View style={styles.containerOp} >
           <Text style={styles.fontOp} >Nombre</Text>
           <View style={styles.containerOp} >
              <Text style={styles.fontOp2} >Luis David</Text>
              <AntDesign name="right" size={18} color="gray" style={{marginLeft:5, marginBottom:7}} />
           </View>
        </View>
      </TouchableOpacity>

      {/* Nombre de usuario */}
      <TouchableOpacity activeOpacity={0.6}>
        <View style={styles.containerOp}>
           <Text style={styles.fontOp} >Nombre de usuario</Text>
           <View style={styles.containerOp} >
              <Text style={styles.fontOp2} >LuisCrack</Text>
              <AntDesign name="right" size={18} color="gray" style={{marginLeft:5, marginBottom:7}} />
           </View> 
        </View>
      </TouchableOpacity>

      {/* Direccion */}
      <TouchableOpacity activeOpacity={0.6}>
        <View style={styles.containerOp}>
           <Text style={styles.fontOp} >Direccion</Text>
           <View style={styles.containerOp} >
              <Text style={styles.fontOp2} >Calle 59 entre carr..</Text>
              <AntDesign name="right" size={18} color="gray" style={{marginLeft:5, marginBottom:7}} />
           </View> 
        </View>
      </TouchableOpacity>

      {/* Fecha de Nacimiento */}
      <TouchableOpacity activeOpacity={0.6}>
        <View style={styles.containerOp}>
           <Text style={styles.fontOp} >Fecha de Nacimiento</Text>
           <View style={styles.containerOp} >
              <Text style={styles.fontOp2} >25/04/1998</Text>
              <AntDesign name="right" size={18} color="gray" style={{marginLeft:5, marginBottom:7}} />
           </View> 
        </View>
      </TouchableOpacity>

      {/* Descripción corta */}
      <TouchableOpacity activeOpacity={0.6}>
        <View style={styles.containerOp}>
           <Text style={styles.fontOp} >Descripción corta</Text>
           <View style={styles.containerOp} >
              <Text style={styles.fontOp2} >Soy un crack</Text>
              <AntDesign name="right" size={18} color="gray" style={{marginLeft:5, marginBottom:7}} />
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
    marginTop:100,
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
});