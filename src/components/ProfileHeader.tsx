import React from "react";
import { View, Text, StyleSheet} from "react-native";
import { TouchableOpacity } from 'react-native-gesture-handler';
import MaterialIcons from '@expo/vector-icons/Ionicons';
import { useAppSelector } from '../redux/Hooks'; 

//Cabecera de la seccion de Perfil
export default function ProfileHeader() {

    const user = useAppSelector(state => state.user)

    return (
        <View style={styles.container}>
            {/* Nombre de Usuario */}
            <Text style={styles.title}>{user.username}</Text>
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
