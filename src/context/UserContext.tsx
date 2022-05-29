import React, { createContext, useState, useEffect, useContext, useReducer } from 'react';
import { Usuario, UsuarioResponse } from '../interfaces/appInterfaces';
import AsyncStorage from '@react-native-async-storage/async-storage';


import { AuthContext } from '../context/AuthContext';
import { authReducer, AuthState } from './authReducer';

import DexelApi from '../api/DexelApi';
import { useDispatch } from 'react-redux';



type UserUpdateContextProps = {
    usuario: Usuario | null;
    updateUser: ( UserId: string, Name: string) => Promise<void>;
    updateUserNameReal: ( UserId: string, Nombre: string) => Promise<void>;
    updateUserDescription: ( UserId: string, Description: string) => Promise<void>;
    updateUserApellido: ( UserId: string, Apellido: string) => Promise<void>;
    loadUserById: ( id: string ) => Promise<Usuario>;
    uploadImage: ( data: any, id: string ) => Promise<void>; // TODO: cambiar ANY
}



export const UserUpdateContext = createContext({} as UserUpdateContextProps);



export const UserProvider = ({ children }: any ) => {



    const [usuario, setUser] = useState<Usuario>();


    const { user, signIn  } = useContext( AuthContext );



    //Aquí mantenemos siempre el Usuario Aactualizado
    useEffect(() => {
        updateUsuario();
    }, [])



    

    //Actualizar el Usuario
    const updateUsuario = async() =>{

        //buscamos el token
        const token = await AsyncStorage.getItem('token');
        
        // No token, no autenticado
        if ( !token ) return usuario;

        const resp = await DexelApi.get('/auth')
        setUser( usuario => {
            console.log(usuario)
            return (usuario?.uid === user?.uid )
                    ? resp.data.usuario
                    : usuario;      
        });
    }


    // Actualizar Usuario Nombre
    const updateUserNameReal = async( UserId: string, Nombre: string ) =>{
        const resp = await DexelApi.put<Usuario>(`/usuarios/${ UserId }`, {
            uid:UserId,
            nombreReal: Nombre
        });
        setUser( usuario => {
            return (usuario?.uid === UserId )
                    ? resp.data
                    : usuario;
        });
        
    }

    // Actualizar Usuario Apellido
    const updateUserApellido = async( UserId: string, Apellido: string ) =>{
        const resp = await DexelApi.put<Usuario>(`/usuarios/${ UserId }`, {
            uid:UserId,
            apellido: Apellido
        });
        setUser( usuario => {
            return (usuario?.uid === UserId )
                    ? resp.data
                    : usuario;
        });
        
    }



     // Actualizar Usuario Descripcion
    const updateUserDescription = async( UserId: string, Description: string ) =>{
        const resp = await DexelApi.put<Usuario>(`/usuarios/${ UserId }`, {
            uid:UserId,
            descripcion: Description
        });
        setUser( usuario => {
            return (usuario?.uid === UserId )
                    ? resp.data
                    : usuario;
        });
        
    }






    // cargar usuario por ID
    const loadUserById = async( id: string ):Promise<Usuario> => {
        const resp = await DexelApi.get<Usuario>(`/usuarios/${ id }`);
        return resp.data;
    };





    // TODO: cambiar ANY
    const uploadImage = async( data: any, id: string ) => {
        
    }





    return(
        <UserUpdateContext.Provider value={{
            usuario,
            updateUserNameReal,
            updateUserApellido,
            updateUserDescription,
            loadUserById,
            uploadImage,
        }}>
            { children }
        </UserUpdateContext.Provider>
    )
}