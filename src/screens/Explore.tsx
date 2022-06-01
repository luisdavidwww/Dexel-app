import React from "react";
import { View, Image, Text, StyleSheet, TouchableOpacity, FlatList, SafeAreaView, TextInput } from "react-native";
import { FakeImagesData } from '../util/FakePicturesExplore'
import FastImage from 'react-native-fast-image'


//feed de profile
export default function Explore(props: any) {

  const Post = (props: any) => {
    return (
        <View style={styles.container2}>
          <Image source={{ uri: props.image }} style={styles.image} />
        </View>    
        )
  }

  const renderItem = ({ item }: any) => <Post image={item.url} name={item.name}  />;
  const keyExtractor = (item: any, index: any) => index.toString();

  return (

    <View style={styles.container}>

      <TextInput placeholder="  Buscar"
        placeholderTextColor="gray"

        style={styles.input}

        selectionColor="#4b58a6"

      />

      <FlatList
        style={{ flex: 1, width: '95%' }}
        data={FakeImagesData}
        renderItem={renderItem}
        keyExtractor={keyExtractor}
        //showsHorizontalScrollIndicator={false}
        numColumns={3}
        //scrollEnabled={false}
      />
    </View >
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: "space-between",
    marginTop: 60,
    marginHorizontal:3,
  },
  container2: {
    flex: 1,
    alignContent: "center",
    justifyContent: "center",
  },
  image: {
    width: 150,
    height: 130,
    //margin:2,
  },
  text: {
    textAlign: 'center',
  },
  input: {
    borderColor: '#E0E0E0',
    backgroundColor: '#EEEEEE',
    borderWidth: 1,
    width: '93%',
    borderRadius: 10,
    height: 45,
    paddingStart: 10,
    //marginTop: 15,
    marginBottom: 15,
    color: '#4b58a6',
    fontSize: 16,

  },
  flatList: {
    width: '100%',
    flex: 1,
  }

})