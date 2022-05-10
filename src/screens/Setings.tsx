import React from 'react'
import { Button, View, Text } from 'react-native';
import { StackScreenProps } from '@react-navigation/stack'
import { styles } from '../theme/appTheme';

interface Props extends StackScreenProps<any, any>{};

export default function Setings({ navigation }: Props) {
  return (
    <View style={ styles.globalMargin }>
    <Text style={styles.title }>Setings</Text>
            <Button 
                title="Ir a Home"
                onPress={ () => navigation.popToTop() }
            />
            
    </View>
  )
}
