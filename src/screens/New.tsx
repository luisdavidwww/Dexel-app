import React, { useEffect } from 'react'
import { Button, View, Text } from 'react-native';
import { StackScreenProps } from '@react-navigation/stack'
import { styles } from '../theme/appTheme';



interface Props extends StackScreenProps<any, any>{};


export default function New({ navigation }: Props) {
  
  useEffect(() => {
    navigation.setOptions({
        title: 'Yorgelis',
        headerBackTitle: 'Atras'
    })
}, [])

  return (
    <View style={ styles.globalMargin }>
    <Text style={styles.title }>New</Text>
            <Button 
                title="Ir a Setings"
                onPress={ () => navigation.navigate('Setings')  }
            />
            
    </View>
  )
}