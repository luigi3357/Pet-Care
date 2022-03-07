import React from 'react'
import {View, StyleSheet,Text} from 'react-native'
import { NativeBaseProvider,Button,Icon } from 'native-base'
import {useNavigation} from '@react-navigation/native'
import InputsLogin from './Componentes/InpuntsLogin'
import {FontAwesome5} from '@expo/vector-icons'


function NewPassword(){

    const navigation = useNavigation()


    return(
        <View style={styles.container}>
        <View style={styles.move}>
        <Text style={styles.text}>Ingrese contraseña nueva</Text>
            <InputsLogin
                  InputLeftElement={
                                        <Icon
                                           as={<FontAwesome5  name="key"/>}
                                           size="sm"
                                           m={2}
                                           _ligth={{
                                               color:'black'
                                           }}
                                           _dark={{
                                            color:'white'
                                           }}
                                        />
                                    }
                                    placeholder="Contraseña nueva"
                                    />
        <Text style={styles.text}>Repita contraseña nueva</Text>
            <InputsLogin
                                      InputLeftElement={
                                        <Icon
                                           as={<FontAwesome5  name="key"/>}
                                           size="sm"
                                           m={2}
                                           _ligth={{
                                               color:'black'
                                           }}
                                           _dark={{
                                            color:'white'
                                           }}
                                        />
                                    }
                                    placeholder="Repita contraseña nueva"
                                    />
        </View>
        <View style={styles.buttonStyle}>
                <Button 
                style={styles.buttonDesing}>
                    Confirmar
                </Button>
            </View>
        
    </View>
    )
}




const styles = StyleSheet.create({

    container:{
        flex:1,
        backgroundColor:"#f9f9f9",
    },
    move:{
        marginTop:100
    },
    text:{
        marginLeft:15
    },

    buttonStyle:{
        marginRight:15,
        marginLeft:15,
        marginTop:30,
  },
  buttonDesing:{
    backgroundColor:"#026efd"
  },
  
  })

  export default () => {
    return (
      <NativeBaseProvider>
        <NewPassword/>
      </NativeBaseProvider>
    )
  }