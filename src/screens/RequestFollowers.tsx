import React, { useEffect} from 'react'
import { ScrollView, SafeAreaView } from 'react-native';

import { useNavigation } from '@react-navigation/core';
import { StackNavigationProp } from '@react-navigation/stack';
import { RootStackParamList } from "../Navegation/Navigation";

import UserFollowers from '../components/UserFollowers';
import Notifications2 from '../components/Notifications2';

export default function RequestFollowers() {

  const navigation = useNavigation<StackNavigationProp<RootStackParamList>>();

 //funciones que se activan al acceder a la pestaña
  useEffect(() => {
    navigation.setOptions({
        title: 'Solicitud de Seguidores',
    })
    }, [])

    return (

        <SafeAreaView style={{ backgroundColor: '#fff', flex: 1 }} >
            <ScrollView>
                <UserFollowers />
                <Notifications2 />
            </ScrollView>
        </SafeAreaView>
    )
}