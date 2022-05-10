import React from "react";
import { View, Text, StyleSheet, TouchableOpacity } from "react-native";
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Ionicons from '@expo/vector-icons/Ionicons';
import { Feather } from '@expo/vector-icons'; 
import { FontAwesome5 } from '@expo/vector-icons'; 


const Tab = createBottomTabNavigator();

//iconos del menú de Perfil de usuario
export default function MenuPublications(props: any) {

    return (
        <View style={styles.row}>
                {/* icon feed*/}
                <TouchableOpacity style={styles.icon} activeOpacity={0.6}>
                    <Feather name="grid" size={24} color="black" />
                </TouchableOpacity>
                {/* icon etiquetas */}
                <TouchableOpacity style={styles.icon} activeOpacity={0.6}>
                    <FontAwesome5 name="user-astronaut" size={24} color="black" />
                </TouchableOpacity>   
        </View>
 
        
    );
    }


    const styles = StyleSheet.create({
        icon: {
            height: 30,
            width:50,
            marginHorizontal: 15,
            justifyContent: 'center',
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
