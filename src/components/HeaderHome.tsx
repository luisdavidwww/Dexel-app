import React from "react";
import { Image, View, Text, StyleSheet, Button} from "react-native";
import { useNavigation } from '@react-navigation/core';
import { TouchableOpacity } from 'react-native-gesture-handler';


import Ionicons from '@expo/vector-icons/Ionicons';
import { MaterialIcons } from '@expo/vector-icons';
import { FontAwesome5 } from '@expo/vector-icons';

//cabecera de la sección de Home
export default function HeaderHome() {

    const navigation = useNavigation();

    return (
        <View style={styles.container} >

            {/* logo de la app */}
            <TouchableOpacity activeOpacity={0.6}>
                <Image style={styles.logo}
                       source={require('../stactic/img/dexel.png')}/>
            </TouchableOpacity>

            {/* iconos de acción */}
            <View style={{flexDirection: 'row', alignItems: 'center'}}>
                {/* btn crear */}
                <TouchableOpacity activeOpacity={0.6}>
                    <MaterialIcons name="add-box" size={24} color="black" />
                </TouchableOpacity>
                {/* btn likes */}
                <TouchableOpacity activeOpacity={0.6}>
                    <Ionicons name="heart" size={24} color="black" style={{marginLeft:12}} />
                </TouchableOpacity>
                {/* btn mensajes */}
                <TouchableOpacity activeOpacity={0.6}>
                    <FontAwesome5 name="facebook-messenger" size={22} color="black" style={{marginLeft:12}} />
                </TouchableOpacity>
            </View>
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
        fontSize: 22,
        fontWeight: "bold",
    },
    logo: {
        width: 104,
        height: 55,
    }
});
