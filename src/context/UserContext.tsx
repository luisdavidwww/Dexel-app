import React, { createContext, useState, useEffect, useContext, useReducer } from 'react';
import { Usuario, UsuarioResponse } from '../interfaces/appInterfaces';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { ImagePickerResponse } from 'react-native-image-picker';


import { AuthContext } from '../context/AuthContext';
import { authReducer, AuthState } from './authReducer';

import DexelApi from '../api/DexelApi';
import { useDispatch } from 'react-redux';



type UserUpdateContextProps = {
    usuario: Usuario | null;
    updateUser: ( UserId: string, Name: string) => Promise<void>;
    updateUserName: ( UserId: string, Nombre: string) => Promise<void>;
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
    const updateUserName = async( UserId: string, Nombre: string ) =>{
        const resp = await DexelApi.put<Usuario>(`/usuarios/${ UserId }`, {
            uid:UserId,
            nombre: Nombre
        });
        setUser( usuario => {
            return (usuario?.uid === UserId )
                    ? resp.data
                    : usuario;
        });
        
    }


    // Actualizar Usuario Nombre Real
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
        const fileToUpload = {
            uri: data.uri,
            type: data.type,
            name: data.fileName
        }


        console.log("el nuevo");
        console.log(fileToUpload);

        const formData = new FormData();
        formData.append('archivo', fileToUpload);
        console.log(formData);

        try {
            const resp = await DexelApi.put(`/uploads/usuarios/${ id }`, formData )
            console.log(resp);
        } catch (error) {
            console.log({ error })
        }
        
    }





    return(
        <UserUpdateContext.Provider value={{
            usuario,
            updateUserName,
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