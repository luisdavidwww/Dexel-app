import React from 'react'
import { StackScreenProps } from '@react-navigation/stack'
import { Button, View, Text } from 'react-native';

interface Props extends StackScreenProps<any, any>{};

export default function Confi({ navigation }: Props ) {

  return (
    <View >
      <Text>Configuracion</Text>
      <Button 
                title="Ir a Privacidad"
                onPress={ () => navigation.navigate('Privacidad')  }
            />
    </View>
  )
}