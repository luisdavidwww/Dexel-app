import React from "react";
import { View, Image, Text, StyleSheet, TouchableOpacity, FlatList, SafeAreaView } from "react-native";
import { FakeImagesData } from '../util/FakePicturesData'

export default function UserPostProfile(props: any) {

    const Story = (props: any) => {
        return(
            <TouchableOpacity>
                <View>
                    <Image source={{uri: props.image}} style={styles.image}/>
                </View>
            </TouchableOpacity>
        )
    }

    return(
        <SafeAreaView style={styles.container}>
            <FlatList  
                data={FakeImagesData}
                renderItem={({item}) => <Story image={item.url} name={item.name}/>}
                keyExtractor={(item, index) => index.toString()}
                showsHorizontalScrollIndicator={false}
                numColumns={3}
                scrollEnabled={false}
            />
        </SafeAreaView>
    )
}

const styles = StyleSheet.create({
    container: {
        justifyContent: "space-between",
        alignContent: "center",
        paddingTop: 10,
        marginLeft:10,
    },
    image: {
        width: 130,
        height: 130,
    },
    text: {
        textAlign: 'center',
    }
})