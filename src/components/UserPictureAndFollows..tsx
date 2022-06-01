import React, { useContext, useState, useEffect } from 'react'
import {View,Text,Image,StyleSheet,TouchableOpacity, Modal, Button} from "react-native";
import Svg, { Path, Defs, LinearGradient, Stop } from "react-native-svg";
import { ItemSeparator } from '../components/ItemSeparator';
import { UserUpdateContext } from '../context/UserContext';

import {launchCamera, launchImageLibrary} from 'react-native-image-picker';
//import ImagePicker from 'react-native-image-picker'
import * as ImagePicker from 'expo-image-picker';



declare module 'react-native-svg' {
  export interface SvgProps {
    xmlns?: string;
    xmlnsXlink?: string;
  }
}

export default function UserPictureAndFollows(props: any) {


  const { user } = props;

   //variables para el metodo de refrescar pantalla
   const [ isRefreshing, setIsRefreshing ] = useState( false );

  //métodos del contex tipo usuario
  const { usuario, uploadImage, loadUserById } = useContext( UserUpdateContext );

  //variables para el modal 
  const [isVisible, setIsVisible] = useState(false);

  //tomar foto
  const [pickedImagePath, setPickedImagePath] = useState<string>()


  //vector parafoto de perfil
  function SvgProfilePicture() {
    return (
      <Svg
        width={88}
        height={88}
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <Path
          d="M86.667 44c0 23.611-19.122 42.75-42.708 42.75C20.372 86.75 1.25 67.611 1.25 44S20.372 1.25 43.959 1.25c23.586 0 42.708 19.139 42.708 42.75z"
          stroke="url(#prefix__paint0_linear_279_663)"
          strokeWidth={2.5}
        />
        <Defs>
          <LinearGradient
            id="prefix__paint0_linear_279_663"
            x1={43.959}
            y1={0}
            x2={43.959}
            y2={88}
            gradientUnits="userSpaceOnUse"
          >
            <Stop stopColor="#DE0046" />
            <Stop offset={1} stopColor="#F7A34B" />
          </LinearGradient>
        </Defs>
      </Svg>
    )
  }



/*const takePhoto = () => {
  launchCamera({
      mediaType: 'photo',
      quality: 0.5
  }, (resp) => {
      if ( resp.didCancel ) return;
      if( !resp.uri ) return;

      setPickedImagePath( resp.uri );
      console.log(resp);
      uploadImage( resp, usuario?.uid );
  });
}*/



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
    uploadImage( result, _id );
    setIsVisible(false);
  }
};


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
    uploadImage( result, _id );
    setIsVisible(false);
  }

}




        return (
          <View>
             {/* Foto de Perfil */}
            <View style={styles.container}>
              <TouchableOpacity style={styles.containerPicture} onPress={ () => setIsVisible(true)} >
                <SvgProfilePicture />
                <Image
                    style={styles.userPicture}
                    source={{uri: user?.img}}
                />
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
                        height: 200,
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

                         {/* Hacer Una foto */}
                         <TouchableOpacity onPress={ () => openCamera() }>
                          <Text style={{ fontSize: 16, fontWeight: 'bold', marginBottom: 10, marginTop: 10 }}>
                              Hacer Una foto
                          </Text>
                           
                        </TouchableOpacity>

                        {/* Item Separador */}
                        <View
                           style={{
                           borderBottomWidth: 1,
                           opacity: 0.1,
                           width:500,
                           marginVertical: 4,
                          }}
                        />
                        

                        {/* Seleccionar una foto de la galería */}
                        <TouchableOpacity onPress={ () => ImageGallery() } >
                          <Text style={{ fontSize: 16, fontWeight: 'bold', marginBottom: 10, marginTop: 10}}>
                              Seleccionar una foto de la galería
                          </Text>
                        </TouchableOpacity>

                       {/* Item Separador */}
                        <View
                           style={{
                           borderBottomWidth: 1,
                           opacity: 0.1,
                           width:500,
                           marginVertical: 4,
                          }}
                        />

                        {/* Cerrar */}
                        <TouchableOpacity onPress={ () => setIsVisible(false) }>
                          <Text style={{ fontSize: 16, fontWeight: '300', marginBottom: 10, marginTop: 10, opacity: 0.4 }} >Cerrar</Text>
                        </TouchableOpacity>
                       </View>
                    </View>
                </View>
            </Modal>               
              </TouchableOpacity>
            </View>

            
            {/* Nombre de Usuario */}
            <View style={styles.container}>
              <View style={styles.UserName}>
                <Text style={styles.textBold}>{usuario?.nombre}</Text>             
              </View>
            </View> 

            <View style={styles.container}>
              <View style={styles.followsContainer}>
                <Text style={styles.textBold}>01</Text>
                <Text>Post</Text>                
              </View>
              <View style={styles.followsContainer}>
                <Text style={styles.textBold}>02</Text>
                <Text>Seguidores</Text>               
              </View>
              <View style={styles.followsContainer}>
                <Text style={styles.textBold}>03</Text>
                <Text>Siguiendo</Text>             
              </View>
            </View>         
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
        flexDirection: "row",
        alignContent: "center",
        justifyContent: "center",
        paddingHorizontal: 15,
    },
    containerPicture: {
      marginTop: 10,
  },
    followsContainer: {
        alignContent: "center",
        justifyContent: "center",
        paddingHorizontal: 15,
        paddingTop: 8,
    }, 
    textBold: {
        fontWeight: "bold",
        textAlign: "center",
    },
    UserName: {
      fontSize: 15,
      fontWeight: "normal",
      paddingTop: 8,
    }
})
