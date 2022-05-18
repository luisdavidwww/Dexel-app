import React, { createContext, useEffect, useReducer } from 'react';
import AsyncStorage from '@react-native-async-storage/async-storage';

import { Usuario, LoginResponse, LoginData, RegisterData } from '../interfaces/appInterfaces';
import { authReducer, AuthState } from './authReducer';
import DexelApi from '../api/DexelApi';

type AuthContextProps = {
    errorMessage: string;
    token: string | null;
    user: Usuario | null;
    status: 'checking' | 'authenticated' | 'not-authenticated';
    UpdateName: ( Usuario: Usuario ) => void;
}


// Estado Inicial
const authInicialState: AuthState = {
    status: 'checking',
    token: null,
    user: null,
    errorMessage: ''
}



export const AuthContext = createContext({} as AuthContextProps);

export const AuthProvider = ({ children }: any)=> {

    const [ state, dispatch ] = useReducer( authReducer, authInicialState);

    useEffect(() => {
        checkToken();
    }, [])


    //validacion de Token
    const checkToken = async() => {

        const token = await AsyncStorage.getItem('token');
        
        // No token, no autenticado
        if ( !token ) return dispatch({ type: 'notAuthenticated' });

        // Hay token
        const resp = await DexelApi.get('/auth');
        if ( resp.status !== 200 ) {
            return dispatch({ type: 'notAuthenticated' });
        }
        
        await AsyncStorage.setItem('token', resp.data.token );
        dispatch({ 
            type: 'signUp',
            payload: {
                token: resp.data.token,
                user: resp.data.usuario
            }
        });
    }



    {/* Iniciar Sesión */}
    const signIn = async({ correo, password }: LoginData ) => {
        try {
         
            const { data } = await DexelApi.post<LoginResponse>('/auth/login', { correo, password } );
            console.log(data)
            dispatch({ 
                type: 'signUp',
                payload: {
                    token: data.token,
                    user: data.usuario
                }
            });

            await AsyncStorage.setItem('token', data.token );

        } catch (error) {
            console.log(error)
            dispatch({ 
                type: 'addError', 
                payload:  error.response.data.errors[0].msg || 'Revise la información'
            })
        }

    };
    

    {/* Registrar Usuario */}
    const signUp = async( { nombre, correo, password }: RegisterData ) => {

        try {
         
            const { data } = await DexelApi.post<LoginResponse>('/usuarios', { correo, password, nombre } );
            dispatch({ 
                type: 'signUp',
                payload: {
                    token: data.token,
                    user: data.usuario
                }
            });

            await AsyncStorage.setItem('token', data.token );

        } catch (error) {
            if (error instanceof Error) {
                dispatch({ 
                    type: 'addError', 
                    payload:  error.response.data.errors[0].msg || 'Revise la información'
                });
              } else {
                console.log('Unexpected error', error);
              }

              {/*
              
              dispatch({ 
                type: 'addError', 
                payload:  error.response.data.errors[0].msg || 'Revise la información'
                //payload: error.response.data.errors[0].msg || 'Revise la información'
            });
              
              */}
        }

    };



    {/* Cerrar Sesión */}
    const logOut = async() => {
        await AsyncStorage.removeItem('token');
        dispatch({ type: 'logout' });
    };

    const removeError = () => {
        dispatch({ type: 'removeError' });
    };

    return (
        <AuthContext.Provider value={{
            ...state,
            signUp,
            signIn,
            logOut,
            removeError,
        }}>
            { children }
        </AuthContext.Provider>
    )

}


