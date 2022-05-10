import React from "react";
import { View, Text, Image, StyleSheet, TouchableOpacity, } from "react-native";

//Información del Usuario
export default function UserInfo(props: any) {

    const { user } = props;

    return(
        <View style={styles.container}>          
            <Text style={{}}>{user.about}</Text>   
            <Text style={{paddingTop: 5, marginBottom: 10}}>
                Followed by
                <Text style={styles.textBold}> {user.followedBy[0]} </Text>
                and
                <Text style={styles.textBold}> {user.followedBy[1]} </Text>
            </Text>   
                   
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
