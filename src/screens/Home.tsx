import React, {useEffect, useState} from "react";
import { View, Text, ScrollView, Button } from "react-native";
import axios from "axios";
import { useDispatch, useSelector } from "react-redux";
import { setUser } from '../redux/slices/userSlice';
import { useAppSelector } from '../redux/Hooks'; 
import { StackScreenProps } from '@react-navigation/stack'

import StoryComponent from "../components/StoryComponent";
import PostListHome from "../components/PostListHome";
import HeaderHome from "../components/HeaderHome";




interface Props extends StackScreenProps<any, any>{};



export default function Home({ navigation }: Props) {

  const dispatch = useDispatch();
  const user = useAppSelector(state => state.user)
  
  useEffect(() => {
    getUser();
  }, []);

  const getUser = async () => {
    const user = await axios.get('https://randomuser.me/api/');
    const newUser = {
      username: user.data.results[0].login.username,
      profilePicture: user.data.results[0].picture.large,
    }
    console.log(newUser)
    dispatch(setUser(newUser));
  }

  return (
    <ScrollView style={{backgroundColor: '#fff', flex: 1}}>
      <StoryComponent />
      <PostListHome />
    </ScrollView>
  )
}