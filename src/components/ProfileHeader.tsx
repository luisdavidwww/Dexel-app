import React, { useContext } from 'react'
import { View, Text, StyleSheet} from "react-native";
import { TouchableOpacity } from 'react-native-gesture-handler';

import { AuthContext } from '../context/AuthContext';
import { UserUpdateContext } from '../context/UserContext';

import MaterialIcons from '@expo/vector-icons/Ionicons';
import { Usuario } from '../interfaces/appInterfaces';
 

//Cabecera de la seccion de Perfil
export default function ProfileHeader() {

    
    const { user } = useContext( AuthContext );

    //métodos del contex tipo usuario
  const { usuario  } = useContext( UserUpdateContext );


    return (
        <View style={styles.container}>
            {/* Nombre de Usuario */}
            <Text style={styles.title}>{ JSON.stringify( usuario?.nombre ).replace(/["']/g, "") }</Text>
            {/* Menú de Opciones */}
            <TouchableOpacity activeOpacity={0.6} style={{flexDirection: 'row'}}>
                <MaterialIcons name="menu-outline" color="black" size={28}></MaterialIcons>
            </TouchableOpacity>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        width: "100%",
        flexDirection: "row",
        justifyContent: "space-between"
    },
    title: {
        fontSize: 21,
        fontWeight: "bold",
    }
});
