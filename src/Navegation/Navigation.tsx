import React from "react";
import { View, Text } from 'react-native';
import Ionicons from '@expo/vector-icons/Ionicons';

import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createStackNavigator } from '@react-navigation/stack';
import { StackScreenProps } from '@react-navigation/stack'

//screen
import Home from '../screens/Home';
import Explore from '../screens/Explore';
import New from '../screens/New';
import Notifications from '../screens/Notifications';
import Profile from '../screens/Profile';
import Configuracion from '../screens/Configuracion';
import Privacidad from '../screens/Privacidad';

//components
import HeaderHome from "../components/HeaderHome";
import ProfileHeader from "../components/ProfileHeader";

//interface Props extends StackScreenProps<any, any>{};

const Tab = createBottomTabNavigator();
const Stack = createStackNavigator();

const TabButtonNavigation = () => {
    return (
      <Tab.Navigator 
        screenOptions={({ route }) => ({
        tabBarOptions: () => { showLabel: false },
        //tabBarShowLabel: false,
        
        tabBarIcon: ({ focused, color, size }) => {
          let iconName;
          if(route.name === 'Home2') {
              iconName = focused ? 'home' : 'home-outline';
          } else if(route.name === 'Explore2') {
              iconName = focused ? 'compass' : 'compass-outline';
          } else if(route.name === 'New2') {
              iconName = focused ? 'add-circle' : 'add-circle-outline';
          } else if(route.name === 'Notifications2') {
              iconName = focused ? 'notifications' : 'notifications-outline';
          } else if(route.name === 'Profile2') {
              iconName = focused ? 'person' : 'person-outline';
          }
          return <Ionicons name={iconName} size={25} color={'black'} />;
      },
        cardStyle: {
          backgroundColor: 'white'
        },
        headerTitleAlign: 'center',
        headerShown: false
    })}
      >
      <Tab.Screen name="Home2"  component={ StackHome }
      options={{
        tabBarLabel: ''
      }}/>
      <Tab.Screen name="Explore2" component={ StackExplore } 
      options={{
        tabBarLabel: ''
      }}/>
      <Tab.Screen name="New2" component={ StackNew } 
      options={{
        tabBarLabel: ''
      }}/>
      <Tab.Screen name="Notifications2" component={ StackNotifications } 
      options={{
        tabBarLabel: ''
      }}/>
      <Tab.Screen name="Profile2" component={ StackProfile } 
      options={{
        tabBarLabel: ''
      }}/>
    </Tab.Navigator> 
    );
}

export const StackNavegator = () => {
  return (
    <Stack.Navigator
    initialRouteName="Home1"
    screenOptions={() => ({
      //tabBarShowLabel: false,
      headerStyle: {
        elevation: 100,
        shadowColor: 'transparent'
      },
      cardStyle: {
        backgroundColor: 'white'
      },
      headerTitleAlign: 'center',
  })}
      
    >
      <Stack.Screen name="Home1"  options={{headerShown: false}} component={ TabButtonNavigation } />
      <Stack.Screen name="Configuracion"  component={ Configuracion } />
      <Stack.Screen name="New2"  component={ StackNew }/>
      <Stack.Screen name="Privacidad"  component={ Privacidad } />
    </Stack.Navigator>
  );
}



const StackHome = () => {
  return (
    <Stack.Navigator
    screenOptions={() => ({
      cardStyle: {
        backgroundColor: 'white'
      },
      headerTitleAlign: 'center',
  })}>
    
      <Stack.Screen name="Home" component={ Home } 
      options={{
        headerTitle: () => <HeaderHome/>
      }}
      />
    </Stack.Navigator>
  );
}
const StackExplore = () => {
  return (
    <Stack.Navigator
    screenOptions={() => ({
      cardStyle: {
        backgroundColor: 'white'
      },
      headerTitleAlign: 'center',
  })}>
      <Stack.Screen name="Explore" component={ Explore } />
    </Stack.Navigator>
  );
}
const StackNew = () => {
  return (
    <Stack.Navigator
    screenOptions={() => ({
      cardStyle: {
        backgroundColor: 'white'
      },
      headerTitleAlign: 'center',
  })}>
      <Stack.Screen name="New" component={ New } />
    </Stack.Navigator>
  );
}

const StackNotifications = () => {
  return (
    <Stack.Navigator
    screenOptions={() => ({
      cardStyle: {
        backgroundColor: 'white'
      },
      headerTitleAlign: 'center',
  })}>
      <Stack.Screen name="Notifications" component={ Notifications } />
    </Stack.Navigator>
  );
}
const StackProfile = () => {
  return (
    <Stack.Navigator
    screenOptions={() => ({
      cardStyle: {
        backgroundColor: 'white'
      },
      headerTitleAlign: 'center',
  })}>
      <Stack.Screen name="Profile" component={ Profile } 
      options={{
        headerTitle: () => <ProfileHeader/>
    }}
      />
    </Stack.Navigator>
  );
}



