import * as React from 'react';
import { View, Text } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { StackNavegator }  from './src/Navegation/Navigation';
import  EditProfile   from './src/screens/EditProfile/EditProfile';
import  { Login }   from './src/screens/Login/Login';
import { AuthProvider } from './src/context/AuthContext';
import { UserProvider } from './src/context/UserContext';



import { store } from './src/redux/store';
import { Provider } from 'react-redux';

const AppState = ({ children }: any ) => {
  return (
    
    <AuthProvider>
      <UserProvider>
      { children }
      </UserProvider>  
    </AuthProvider>
  )
}

const App = () => {
  return (
    <Provider store={store}>
    <NavigationContainer>
      <AppState>
        <StackNavegator/>
      </AppState>
    </NavigationContainer>
    </Provider>  
  );
}

export default App;