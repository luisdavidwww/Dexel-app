import React, {useState} from "react";
import { View, Image, Text, StyleSheet, TouchableOpacity, FlatList, Dimensions } from "react-native";


import { FakePostData } from '../util/FakePostData'
import { Feather } from '@expo/vector-icons';
import { AntDesign } from '@expo/vector-icons';
import Ionicons from '@expo/vector-icons/Ionicons';


//listado de publicaciones de Home
export default function PostListHome(props: any) {

    {/* Componente para cambiar el color del icon */}
    const [estado, setEstado] = useState(false);
    const agregarFavoritos = () => {
        setEstado(!estado);
      };


    const Post = (props: any) => {
        return(
            <View> 
                {/* foto de perfil + nombre de usuario + icono "more" */}
                <View style={{flexDirection:'row', justifyContent: 'space-between', alignItems: 'center', marginHorizontal: 10}}>
                    <View style={{flexDirection: 'row', alignItems: 'center', marginBottom: 10}}>
                        <Image source={{uri: props.image}} style={{ width: 30, height: 30, borderRadius: 20}}/>
                        <Text style={{marginLeft: 10, fontWeight: 'bold'}}>{props.username}</Text>                    
                    </View>
                    {/* icono "more" */}
                    <Feather name="more-horizontal" size={24} color="black"/>                    
                </View>

                {/* publicación de usuario */}
                <View>
                    <Image source={{uri: props.image}} style={styles.image}/>
                </View>

            {/* Opciones de Like + Comentarios + Guardar */}
            <View style={{flexDirection: 'row', justifyContent: 'space-between', marginVertical: 10, marginTop: 15}}>
               
                <View style={{flexDirection: 'row', alignItems: 'center'}}>
                    {/* Opcion Like */}
                    <TouchableOpacity style={{flexDirection: 'row'}} activeOpacity={0.6}>
                        <AntDesign name= 'hearto' size={24} color="#4b58a6"  style={{marginLeft: 10}}/>
                        <Text style={{fontWeight: 'bold', marginLeft: 10 }}>{props.likes}</Text>
                    </TouchableOpacity>
                    {/* Opcion Comentarios */}
                    <TouchableOpacity style={{flexDirection: 'row', marginLeft: 25}} activeOpacity={0.6}>
                        <Feather name="message-circle" size={24} color="#4b58a6" style={{marginLeft: 10}} />
                        <Text style={{fontWeight: 'bold', marginLeft: 10}}>Comentarios</Text>
                    </TouchableOpacity>    
                </View>
                {/* Opcion Guardar */}
                <TouchableOpacity onPress={() => agregarFavoritos()} activeOpacity={0.6}>
                    <Ionicons name={estado ? 'bookmark' : 'bookmark-outline'} size={28} color="#4b58a6" style={{marginRight: 10}}/>
                </TouchableOpacity>    
            </View>

                {/* Descripción de Publicación */}
                <View>
                    <Text style={{marginLeft: 10, marginBottom: 25}}>{props.title}</Text>
                </View>
            </View>
        )
    }

    {/* Componente */}
    return(
        <View>
            <FlatList
                data={FakePostData}
                renderItem={({item}) => <Post image={item.image} title={item.title} likes= {item.likes} username= {item.user.first_name}/>}
                keyExtractor={(item, index) => index.toString()}
                showsHorizontalScrollIndicator={false}
            />
        </View>
    )
}

const width = Dimensions.get('window').width;

const styles = StyleSheet.create({
    image: {
        width: width,
        height: 400,
        resizeMode: 'cover'
    },
    text: {
        textAlign: 'center',
    },
    Like: {
        textAlign: 'center',
        color: 'black',
        fontSize: 13,
        fontWeight: 'bold'
    }
})