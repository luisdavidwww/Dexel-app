import * as React from 'react';
import { View, Text } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { StackNavegator }  from './src/Navegation/Navigation';
import  EditProfile   from './src/screens/EditProfile/EditProfile';



import { store } from './src/redux/store';
import { Provider } from 'react-redux';


const App = () => {
  return (
    <Provider store={store}>
    <NavigationContainer>
      <StackNavegator/>
    </NavigationContainer>
    </Provider>  
    
    
  );
}

export default App;