import React, { useEffect } from "react";
import { Button, View, Image, Text, StyleSheet, TouchableOpacity, FlatList } from "react-native";
import { FakeImagesData } from '../util/FakePicturesData'
import { FakeNotifications } from '../util/FakeNotifications'
import { useNavigation } from '@react-navigation/native';

//Componente de Listado de Notificaciones
export default function Notifications(props: any) {

  const navigation = useNavigation();

  //funciones que se activan al acceder a la pestaña
   useEffect(() => {
     navigation.setOptions({
         title: 'Notificaciones',
     })
     }, [])

  const Notif = (props: any) => {
    return (
      <View style={{ flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center', marginHorizontal: 10, width: '100%', marginVertical: 6 }}>
        <View style={{ flexDirection: 'row', alignItems: 'center', marginTop: 10 }}>
          <Image source={{ uri: props.image1 }} style={{ width: 52, height: 52, borderRadius: 20 }} />
          <View>
            <View style={{ flexDirection: 'row', alignItems: 'center', }}>
              <Text style={styles.text}>A</Text>
              <TouchableOpacity>
                <Text style={{ marginLeft: 10, fontWeight: 'bold', fontSize: 17 }}>{props.name}</Text>
              </TouchableOpacity>
              <Text style={styles.text}>le gustó tu foto.</Text>
            </View>
            <Text style={styles.text2}>1 Sem.</Text>
          </View>

        </View>


        <Image source={{ uri: props.image2 }} style={{ width: 52, height: 52, marginRight: 20 }} />
      </View >


    )
  }

  return (
    <View>
      <FlatList
        data={FakeNotifications}
        renderItem={({ item }) => <Notif image1={item.user_image} name={item.user.username} image2={item.post} />}
        keyExtractor={(item, index) => index.toString()}
        //horizontal={true}
        showsHorizontalScrollIndicator={false}
      />
    </View>
  )
}

const styles = StyleSheet.create({
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