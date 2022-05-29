import React, { useContext } from 'react'
import { View, Text, Image, StyleSheet, TouchableOpacity, } from "react-native";

import { AuthContext } from '../context/AuthContext';
import { UserUpdateContext } from '../context/UserContext';

//Información del Usuario
export default function UserInfo(props: any) {


    //métodos del contex tipo autentificador de Usuario 
    const { user } = useContext( AuthContext );

    //métodos del contex tipo usuario
    const { usuario  } = useContext( UserUpdateContext );
    

    return(
        <View style={styles.container}>     
             
            {/* Descripción de Usuario */}
            <Text style={{}}>{ JSON.stringify( usuario?.descripcion ).replace(/["']/g, "") }</Text>   

            {/* 
             <Text style={{paddingTop: 5, marginBottom: 10}}>
                Followed by
                <Text style={styles.textBold}> 500 </Text>
                and
                <Text style={styles.textBold}> 25 </Text>
             </Text>  

             */}
                   
        </View>
    )
}

const styles = StyleSheet.create({
    userPicture: {
        width: 77,
        height: 77,
        borderRadius: 100,
        marginRight: 10,
        position: 'absolute',
        alignSelf: 'center',
        top: 5,
    },
    container: {
        justifyContent: "flex-start",
        paddingHorizontal: 15,
        marginTop:15,
        marginEnd:20,
        marginStart:20,
    },
    followsContainer: {
        alignContent: "center",
        justifyContent: "center",
    }, 
    textBold: {
        fontWeight: "bold",
        paddingVertical: 5,
    }
})
