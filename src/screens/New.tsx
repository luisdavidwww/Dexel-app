import React, { useEffect, useState,useContext } from "react";
import { View, Text, StyleSheet, TouchableOpacity, Modal, TextInput, Button, Image } from "react-native";
import { useNavigation } from '@react-navigation/core';
import { StackNavigationProp } from '@react-navigation/stack';
import { RootStackParamList } from "../Navegation/Navigation";
import { UserUpdateContext } from '../context/UserContext';

import * as ImagePicker from 'expo-image-picker';





export default function ButtonComponent(props: any) {

  const navigation = useNavigation<StackNavigationProp<RootStackParamList>>();


  //tomar foto
  const [pickedImagePath, setPickedImagePath] = useState<string>()

  //métodos del contex tipo usuario
  const { usuario, uploadImage, loadUserById } = useContext( UserUpdateContext );

  //variables para el modal 
  const [isVisible, setIsVisible] = useState(false);



  //funciones que se activan al acceder a la pestaña
  useEffect(() => {
    navigation.setOptions({
        title: 'Nueva Publicación'
    })
   }, [])



   //Abrir la camara
  const openCamera = async () => {
  
  const permissionResult = await ImagePicker.requestCameraPermissionsAsync();

  if (permissionResult.granted === false) {
    alert("You've refused to allow this appp to access your camera!");
    return;
  }

  const result = await ImagePicker.launchCameraAsync({
    mediaTypes: ImagePicker.MediaTypeOptions.Images,
    allowsEditing: true,
    aspect: [4, 4],
    quality: 0.5,
  });

  if (!result.cancelled) {
    setPickedImagePath(result.uri);
    
    const _id :string = usuario?.uid || '';
    //uploadImage( result, _id );
  }

}

//Seleccionar una imagén de la galería
const ImageGallery = async () => {
  let result = await ImagePicker.launchImageLibraryAsync({
    mediaTypes: ImagePicker.MediaTypeOptions.Images,
    allowsEditing: true,
    aspect: [4, 4],
    quality: 0.5,
  });

  if (!result.cancelled) {
    setPickedImagePath(result.uri);
    const _id :string = usuario?.uid || '';
    //uploadImage( result, _id );
  }
};


    return (
        <View style={styles.row}>
          <View style={styles.row}>
            {/* btn Editar Perfil */}
            <TouchableOpacity  style={styles.button} activeOpacity={0.6}  onPress={ () => setIsVisible(true)}>
                    <Text style={styles.text} >Tomar una Foto</Text>

                {/* El Modal esla ventana emergente de opciones  */}
                <Modal
                animationType="fade"
                visible={ isVisible }
                transparent={ true }
                >
                {/* Background negro */}
                <View style={{
                    flex: 1,
                    backgroundColor: 'rgba(0,0,0,0.3)',
                    justifyContent: 'flex-end',
                    alignItems: 'center'
                }}>

                    {/* Contenido del modal */}
                    <View style={{
                        width: "100%",
                        height: "100%",
                        backgroundColor: 'white',
                        justifyContent: 'center',
                        alignItems: 'center',
                        shadowOffset: {
                            width: 0,
                            height: 10
                        },
                        shadowOpacity: 0.25,
                        elevation: 10,
                        borderRadius: 5
                    }}>


                      <View style={{ flex: 1, paddingTop:20, alignItems: 'center'}}>


                        {/* TODO: Mostrar imagen temporal */}
            {
                    ( pickedImagePath ) && (
                        <Image 
                            source={{ uri: pickedImagePath }}
                            style={{
                                marginTop: 20,
                                width: '100%',
                                height: 300
                            }}
                        />
                    )
                }



                         {/* Opcion paracolocar la Foto */}
                         <TouchableOpacity onPress={ () => openCamera() }>
                          <Text style={{ fontSize: 16, fontWeight: 'bold', marginBottom: 10, marginTop: 10 }}>
                              camarita
                          </Text>
                        </TouchableOpacity>



                        {/* Descripción de Post */}
                        <TouchableOpacity>
                          <TextInput 
                            placeholder="Cuentanos como te describes a ti mismo"
                            //value={ descripcionn }
                            placeholderTextColor="gray"
                            underlineColorAndroid="#4b58a6"
                            editable
                            maxLength={200}
                        
                            style={styles.inputDescripcion}

                            selectionColor="#9caae8"

                            //onChangeText={ (value) => onChange(value, 'descripcionn') }
                            //onSubmitEditing={ UpdateDescription }

                            autoCapitalize="none"
                            autoCorrect={ false }
                            multiline={true}
                        
                          /> 
                        </TouchableOpacity>


                        {/* Btn Publicar */}
                        <TouchableOpacity style={{
                          ...styles.buttonV2, width:200}}
                          //onPress={ UpdateDescription }
                          >
                          <Text style={{...styles.buttonText,color:'white'}}>Publicar</Text>  
                        </TouchableOpacity>



                        {/* btn Cerrar */}
                        <TouchableOpacity onPress={ () => setIsVisible(false) }>
                          <Text style={{ fontSize: 16, fontWeight: '300', marginBottom: 10, marginTop: 10, opacity: 0.4 }} >Cerrar</Text>
                        </TouchableOpacity>


                      </View>
                    </View>
                </View>
                </Modal>  
                </TouchableOpacity> 
          </View>
                

                {/* btn Editar Perfil */}
                <TouchableOpacity onPress={ () => ImageGallery() } style={styles.button} activeOpacity={0.6}>
                    <Text style={styles.text} >Abrir la galería</Text>
                </TouchableOpacity>     
        </View>
 
        
    );
    }


    const styles = StyleSheet.create({
        button: {
            borderWidth: 1,
            borderColor: '#545cda',
            height: 100,
            width:300,
            borderRadius: 10,
            marginHorizontal: 3,
            marginTop:20,
            justifyContent: 'center',
        },
        buttonV2:{
          alignSelf: 'center',
          paddingVertical:15,
          borderRadius:10,
          backgroundColor:'#545cda'
      },
        button2: {
            alignContent: "center",
            justifyContent: "center",
            borderWidth: 1,
            borderColor: 'gray',
            height: 50,
            width:50,
            borderRadius: 5,
            marginHorizontal: 3,
        },
        contentbtn: {
            textAlign: 'center'
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
        inputDescripcion: {
          width: '100%',
          borderRadius:10,
          height: 150,
          paddingStart:15,
          paddingEnd:20,
          paddingBottom:10,
          marginTop: 10,
          color:'black',
          //color:'#4b58a6',
          fontSize: 14,
        },
        buttonText: {
          textAlign: 'center'
      },
      
        
    });