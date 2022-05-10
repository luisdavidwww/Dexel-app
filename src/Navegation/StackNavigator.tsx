import React from 'react';

import  Home  from '../screens/Home';
import Explore from '../screens/Explore';
import New from '../screens/New';
import Notifications from '../screens/Notifications';
import Setings from '../screens/Setings';
import Profile from '../screens/Profile';
import Configuracion from '../screens/Configuracion';
import Privacidad from '../screens/Privacidad';
import { styles } from '../theme/appTheme';


import { createStackNavigator } from '@react-navigation/stack';


const Stack = createStackNavigator();

const MainStackNavigator = () => {
  return (
    <Stack.Navigator
    
     initialRouteName="Home"
      screenOptions={{
        headerStyle: {
          elevation: 100,
          shadowColor: 'transparent'
        },
        cardStyle: {
          backgroundColor: 'white'
        },
        headerTitleAlign: 'center'
      }}
    >
      <Stack.Screen name="New4"  component={ New } />
    </Stack.Navigator>
  );
}

export { MainStackNavigator };