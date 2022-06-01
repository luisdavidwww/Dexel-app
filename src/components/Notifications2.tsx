import React, { useEffect } from "react";
import { View, Image, Text, StyleSheet, TouchableOpacity, FlatList, Button } from "react-native";
import { FakeNotifications } from '../util/FakeNotifications'


//Componente de Listado de Notificaciones
export default function Notifications2(props: any) {

    const Notif2 = (props: any) => {
        return (
            <View style={{ flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center', marginHorizontal: 10, width: '95%', marginVertical: 6 }}>
                <View style={{ flexDirection: 'row', alignItems: 'center', marginTop: 10 }}>
                    <Image source={{ uri: props.image1 }} style={{ width: 52, height: 52, borderRadius: 20 }} />
                    <View style={{ marginRight: 7 }}>
                        <TouchableOpacity>
                            <Text style={{ marginLeft: 10, fontWeight: 'bold', fontSize: 17 }}>{props.name}</Text>
                        </TouchableOpacity>
                        <Text style={styles.text}>Solicitó seguirte.</Text>
                        <Text style={styles.text2}>1 Sem.</Text>
                    </View>
                </View>

                <TouchableOpacity style={{
                    alignSelf: 'center',
                    paddingVertical: 15,
                    borderRadius: 10,
                    backgroundColor: '#545cda',
                    width: '25%',
                }}
                >
                    <Text style={{ textAlign: 'center', color: 'white' }}>Confirmar</Text>
                </TouchableOpacity>

                <TouchableOpacity style={{
                    alignSelf: 'center',
                    paddingVertical: 15,
                    borderRadius: 10,
                    backgroundColor: '#C0C0C0',
                    width: '25%',
                }}
                >
                    <Text style={{ textAlign: 'center', color: 'black' }}>Eliminar</Text>
                </TouchableOpacity>
            </View >

        )
    }

    return (
        <View>
            <FlatList
                data={FakeNotifications}
                renderItem={({ item }) => <Notif2 image1={item.user_image} name={item.user.username} />}
                keyExtractor={(item, index) => index.toString()}
                //horizontal={true}
                showsHorizontalScrollIndicator={false}
            />
            <Text>Holis</Text>
        </View>
    )
}

const styles = StyleSheet.create({
    image: {
        width: 52,
        height: 52,
        borderRadius: 20,
        position: 'absolute',
        top: 4,
        left: 4

    },
    text: {
        marginLeft: 10,
        fontSize: 17,
    },
    text2: {
        marginLeft: 10,
        fontSize: 17,
        color: 'gray'
    }
})
