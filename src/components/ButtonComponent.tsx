import React from "react";
import { View, Text, StyleSheet, TouchableOpacity } from "react-native";
import { useNavigation } from '@react-navigation/core';

import Ionicons from '@expo/vector-icons/Ionicons';

//Botones de accion del Perfil de usuario
export default function ButtonComponent(props: any) {

    const navigation = useNavigation();

    return (
        <View style={styles.row}>
                {/* btn Editar Perfil */}
                <TouchableOpacity onPress={ () => navigation.navigate('EditProfile')} style={styles.button} activeOpacity={0.6}>
                    <Text style={styles.text} >Editar Perfil</Text>
                </TouchableOpacity> 

                {/* btn Publicaciones Guardadas */}
                <TouchableOpacity style={styles.button2} activeOpacity={0.6}>
                    <Ionicons style={styles.contentbtn}
                    name={'bookmark-outline'} size={27} color="black"/>
                </TouchableOpacity>

                {/* btn Ajustes */}
                <TouchableOpacity style={styles.button2} activeOpacity={0.6}>
                     <Ionicons style={styles.contentbtn}
                     name={'settings'} size={27} color="black"/>
                </TouchableOpacity>       
        </View>
 
        
    );
    }


    const styles = StyleSheet.create({
        button: {
            borderWidth: 1,
            borderColor: 'gray',
            height: 50,
            width:150,
            borderRadius: 5,
            marginHorizontal: 3,
            justifyContent: 'center',
        },
        button2: {
            alignContent: "center",
            justifyContent: "center",
            borderWidth: 1,
            borderColor: 'gray',
            height: 50,
            width:50,
            borderRadius: 5,
            marginHorizontal: 3,
        },
        contentbtn: {
            textAlign: 'center'
        },
        text: {
            fontWeight: 'bold',
            textAlign: 'center',
        },
        container: {
            flexDirection: "row",
            alignContent: "center",
            justifyContent: "center",
        },
        containerEditProfile: {
            justifyContent: "center",
        },
        row: {
            flexDirection: "row",
            flexWrap: "wrap",
            alignContent: "center",
            justifyContent: "center",
            marginTop: 10,
          },
        container2: {
            justifyContent: "flex-start",
        },
        
    });
