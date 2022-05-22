import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';

//pantallas
import EditNameUser from '../screens/EditProfile/indScreens/EditNameUser';
import EditName from '../screens/EditProfile/indScreens/EditName';
import EditSurName from '../screens/EditProfile/indScreens/EditSurName';
import EditDescription from '../screens/EditProfile/indScreens/EditDescription'

//parametros globales para la navegacion
export type RootStackParamList = {
    //EditNameUser: { id: string };
    //EditName: { id: string };
    EditSurName: { id: string };
    EditDescription: { id: string };
    Setting: { id: string };
    EditProfile: { id: string };
  };


export type UserStackParams = {
    //EditNameUser: undefined,
    EditNameUser: { id?: string, NameUser?: string }
    EditName: { id?: string, nameReal?: string },
    EditSurName: { id?: string, Surname?: string },
    EditDescription: { id?: string, descripcion?: string },
}


const Stack = createStackNavigator<UserStackParams>();



export const UserNavigator = () => {
    return (
        <Stack.Navigator
            screenOptions={{
                cardStyle: {
                    backgroundColor: 'white'
                },
                headerStyle: {
                    elevation: 0,
                    shadowColor: 'transparent'
                }
            }}
        >
            <Stack.Screen 
                name="EditNameUser"
                component={ EditNameUser }
                options={{ title: 'Nombre de Usuario' }}
            />

            <Stack.Screen 
                name="EditName"
                component={ EditName }
                options={{ title: 'Nombre' }}
            />
            <Stack.Screen 
                name="EditSurName"
                component={ EditSurName }
                options={{ title: 'Apellido' }}
            /> 
            <Stack.Screen 
                name="EditDescription"
                component={ EditDescription }
                options={{ title: 'Descripción' }}
            /> 
        </Stack.Navigator>
    )
}
