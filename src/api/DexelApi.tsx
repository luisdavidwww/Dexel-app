import axios from 'axios';
import AsyncStorage from '@react-native-async-storage/async-storage';

const baseURL = 'http://192.168.1.107:8080/api';

const DexelApi = axios.create({ baseURL });


DexelApi.interceptors.request.use(

    async(config) => {
        const token = await AsyncStorage.getItem('token');
        if ( token ) {
            if (config.headers === undefined) {
                config.headers = {};
              }
            config.headers['x-token'] = token;
        }
        return config;
    }
);

export default DexelApi;
