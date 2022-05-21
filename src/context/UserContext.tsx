import React, { createContext, useState, useEffect } from 'react';
import { Usuario } from '../interfaces/appInterfaces';

import DexelApi from '../api/DexelApi';

type UserUpdateContextProps = {
    updateUser: ( UserId: string, Name: string) => Promise<void>;
    loadUserById: ( id: string ) => Promise<Usuario>;
    uploadImage: ( data: any, id: string ) => Promise<void>; // TODO: cambiar ANY
}



export const UserUpdateContext = createContext({} as UserUpdateContextProps);


export const UserProvider = ({ children }: any ) => {

    const [setUser] = useState<Usuario>();

    useEffect(() => {
        //loadUser();
    }, [])


    const updateUser = async( UserId: string, Name: string ) =>{
        
    }
    const loadUserById = async( id: string ):Promise<Usuario> => {
        const resp = await DexelApi.get<Usuario>(`/usuarios/${ id }`);
        return resp.data;
    };

    // TODO: cambiar ANY
    const uploadImage = async( data: any, id: string ) => {
        
    }

    return(
        <UserUpdateContext.Provider value={{
            updateUser,
            loadUserById,
            uploadImage,
        }}>
            { children }
        </UserUpdateContext.Provider>
    )
}