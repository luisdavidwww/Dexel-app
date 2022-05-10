import React from 'react'
import { ScrollView, View, Text } from 'react-native';
import UserPictureAndFollows from '../components/UserPictureAndFollows.';
import UserInfo from '../components/UserInfo';
import ButtonComponent from '../components/ButtonComponent';
import { useAppSelector } from '../redux/Hooks'; 
import UserPostProfile from '../components/UserPostProfile';
import MenuPublications from '../components/MenuPublications';

export default function Profile() {

  const user = useAppSelector(state => state.user)

  return (

    <ScrollView style={{backgroundColor: '#fff', flex: 1}} >
      <UserPictureAndFollows  user= {user}/>
      <UserInfo  user= {user}/>
      <ButtonComponent/>
      <MenuPublications buttonName={'Edit Profile'}/>
      <UserPostProfile/>
    </ScrollView>
  )
}