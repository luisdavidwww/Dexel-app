import React, { useContext } from 'react'
import { View, Text, StyleSheet} from "react-native";
import { TouchableOpacity } from 'react-native-gesture-handler';

import { AuthContext } from '../context/AuthContext';
import { useAppSelector } from '../redux/Hooks';

import MaterialIcons from '@expo/vector-icons/Ionicons';
 

//Cabecera de la seccion de Perfil
export default function ProfileHeader() {

    
    const { user } = useContext( AuthContext );

    //const user = useAppSelector(state => state.user)

    return (
        <View style={styles.container}>
            {/* Nombre de Usuario */}
            <Text style={styles.title}>{ JSON.stringify( user?.nombre ) }</Text>
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
        fontSize: 25,
        fontWeight: "bold",
    }
});
