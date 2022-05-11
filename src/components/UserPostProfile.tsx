import React from "react";
import { View, Image, Text, StyleSheet, TouchableOpacity, FlatList, SafeAreaView } from "react-native";
import { FakeImagesData } from '../util/FakePicturesData'

//feed de profile
export default function UserPostProfile(props: any) {

    const Post = (props: any) => {
        return(
            <TouchableOpacity>
                <View>
                    <Image source={{uri: props.image}} style={styles.image}/>
                </View>
            </TouchableOpacity>
        )
    }

    return(
        //SafeAreaView
        <View style={styles.container}>
            <FlatList  
                style={{flex:1}}
                data={FakeImagesData}
                renderItem={({item}) => <Post image={item.url} name={item.name}/>}
                keyExtractor={(item, index) => index.toString()}
                showsHorizontalScrollIndicator={false}
                numColumns={3}
                scrollEnabled={false}
            />
        </View >
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        //justifyContent: "space-between",
        alignContent: "center",
        marginVertical: 20,
        //paddingTop: 10,
        //marginLeft:10,
    },
    container2: {
        //flex: 1,
        //marginVertical: 20,
        alignContent: "center",
    },
    image: {
        width: 130,
        height: 130,
    },
    text: {
        textAlign: 'center',
    }
})