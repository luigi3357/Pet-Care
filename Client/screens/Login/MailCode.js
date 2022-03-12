import React, { useEffect, useState } from 'react'
import {View, StyleSheet,Text, Alert,ActivityIndicator} from 'react-native'
import { NativeBaseProvider,Button,Icon, Input } from 'native-base'
import {useNavigation} from '@react-navigation/native'
import {FontAwesome5} from '@expo/vector-icons'
import { useDispatch, useSelector } from 'react-redux'
import { getLogin, resetPassword } from '../../Store/Actions/index'


function MailCode(){

    const navigation = useNavigation()
    const user = useSelector((state) => state.login)
    const [token, setToken] =useState('')
    const [loading, setLoading]=useState(false)
    const [visible,setVisible]=useState(100)
    const dispatch = useDispatch()
  
function errorAlert(){
      return(
      Alert.alert(
        "ERROR",
        "El codigo ingresado es incorrecto",
        [
          { text: "OK", onPress: () => console.log("OK") }
        ]
      )
  
    )};

  
    useEffect(() => {
      dispatch(getLogin(user.email))
      dispatch(getLogin(emailL.email))
    },[dispatch])
    const emailL = useSelector((state) => state.login)
    console.log(emailL.email, "gagagagaga")
    

    

    function handlesubmit(){ 
      setLoading(true)
      setVisible(0)
     dispatch(getLogin(user.email))
     
       const tokenVerify = user.token
     
        if(tokenVerify===token){
          setLoading(false)
          setVisible(100)
          navigation.navigate("NewPassword")
        }else{
          setLoading(false)
          setVisible(100)
          errorAlert()
        }
    }
    

    return(
     <View style={styles.container}>
        <View opacity={visible}>
        <View style={styles.move}>
        <Text style={styles.text}>Ingrese codigo enviado</Text>
            <Input
                                      InputLeftElement={
                                        <Icon
                                           as={<FontAwesome5  name="envelope"/>}
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
                                    placeholder="Ingrese codigo"
                                    onChangeText={setToken}
                                    />
        </View>
        <View style={styles.buttonStyle}>
                <Button 
                style={styles.buttonDesing}
                onPress={handlesubmit}>
                    Confirmar
                </Button>
            </View>
            <View style={styles.loading}>
            <ActivityIndicator size="large" color="#00d2c6" animating={loading}/>
            </View>
            </View>
    </View>
    )
}




const styles = StyleSheet.create({

    container:{
        flex:1,
        backgroundColor:"#f9f9f9",
    },
    text:{
      marginLeft:15
  },
    move:{
        marginTop:100
    },

    buttonStyle:{
        marginRight:15,
        marginLeft:15,
        marginTop:30,
  },
  buttonDesing:{
    backgroundColor:"#00d2c6"
  },
  loading:{
    position:'relative',
    top:-100,
  }
  })

  export default () => {
    return (
      <NativeBaseProvider>
        <MailCode/>
      </NativeBaseProvider>
    )
  }