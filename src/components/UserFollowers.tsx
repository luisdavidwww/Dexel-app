import React from "react";
import { View, Text, Image, StyleSheet, TouchableOpacity, } from "react-native";
import Svg, { Path, Defs, LinearGradient, Stop } from "react-native-svg"


declare module 'react-native-svg' {
    export interface SvgProps {
        xmlns?: string;
        xmlnsXlink?: string;
    }
}

export default function UserPictureAndFollows(props: any) {



    function UserFollowers() {
    }
    return (

        <View>
            <View style={{ flexDirection: 'row', alignItems: 'center', marginHorizontal: 10, width: '100%', marginVertical: 6 }}>
                <Image source={{ uri: 'https://images.pexels.com/photos/5125329/pexels-photo-5125329.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500' }} style={{ width: 52, height: 52, borderRadius: 20 }} />
                <TouchableOpacity>
                    <Text style={styles.text}>Solicitudes de seguimiento</Text>
                    <Text style={styles.text2}>Aprobar o ignorar solicitudes</Text>
                </TouchableOpacity>
            </View>
            <Text style={styles.text}>Este Mes:</Text>
        </View>
    )

}

const styles = StyleSheet.create({
    text: {
        marginLeft: 10,
        fontSize: 17,
        fontWeight: 'bold',
    },
    text2: {
        marginLeft: 10,
        fontSize: 17,
        color: 'gray'
    }
})