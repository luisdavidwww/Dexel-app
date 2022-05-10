import React from 'react'
import { StyleSheet, Button, View, SafeAreaView, Text, Alert } from 'react-native';
import { styles } from '../theme/appTheme';
import { StackScreenProps } from '@react-navigation/stack'


interface Props extends StackScreenProps<any, any>{};


export default function Notification ({ navigation }: Props ) {
  return (
    <View style={ styles.globalMargin }>
    <Text style={styles.title }>Home</Text>
            <Button 
                title="Ir a Setings"
                onPress={ () => navigation.navigate('Privacidad')  }
            />
    </View>
  )
}
