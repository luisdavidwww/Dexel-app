import React, {useEffect, useState, useContext} from 'react'
import { ScrollView, View, Text, SafeAreaView, RefreshControl } from 'react-native';
import UserPictureAndFollows from '../components/UserPictureAndFollows.';
import UserInfo from '../components/UserInfo';
import ButtonComponent from '../components/ButtonComponent';
import { useAppSelector } from '../redux/Hooks'; 
import UserPostProfile from '../components/UserPostProfile';
import MenuPublications from '../components/MenuPublications';
import { UserUpdateContext } from '../context/UserContext';
import { AuthContext } from '../context/AuthContext';

export default function Profile() {

  //const user = useAppSelector(state => state.user)

  //variables para el metodo de refrescar pantalla
  const [ isRefreshing, setIsRefreshing ] = useState( false );

  //métodos del contex tipo autentificador de Usuario 
  const { user, signIn } = useContext( AuthContext );

  //métodos del contex tipo usuario
  const { usuario, updateUserImgProfile, loadUserById } = useContext( UserUpdateContext );

  useEffect(() => {
    loadUserFromBackend();
  }, [])


  //método que actualiza al usuario
  const loadUserFromBackend = async() => {
    setIsRefreshing(true);
    
    const _id :string = user?.uid || '';
    // const _id= user?.uid;
    const usuarito = await loadUserById( _id )

    let imgVar :string = usuarito?.img || '';

    await updateUserImgProfile( _id, imgVar );
    setIsRefreshing(false);
    console.log(usuarito?.img);
  }


  return (
    <ScrollView
  refreshControl={
    <RefreshControl 
        refreshing={ isRefreshing }
        onRefresh={ loadUserFromBackend }
    />
      }
  >
      <SafeAreaView style={{backgroundColor: '#fff', flex: 1}} >
      <ScrollView>
        <UserPictureAndFollows  user= {usuario}/>
        <UserInfo/>
        <ButtonComponent />
        <MenuPublications buttonName={'Edit Profile'}/>
        <UserPostProfile/>
      </ScrollView>
    </SafeAreaView>
    </ScrollView>
    
    
  )
}