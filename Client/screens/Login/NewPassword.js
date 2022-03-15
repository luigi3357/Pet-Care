import React, { useEffect, useState } from 'react'
import {View, StyleSheet,Text,ActivityIndicator,Alert,TouchableOpacity} from 'react-native'
import { NativeBaseProvider,Button,Icon, Input } from 'native-base'
import {useNavigation} from '@react-navigation/native'
import InputsLogin from './Componentes/InpuntsLogin'
import {FontAwesome5,MaterialIcons} from '@expo/vector-icons'
import { useDispatch, useSelector } from 'react-redux'
import { getLogin, getUser, resetPassword } from '../../Store/Actions'


function NewPassword(){
    const [show, setShow] = useState(false);
    const [showrepeat, setShowrepeat] = useState(false);
    const navigation = useNavigation()  
    const dispatch = useDispatch()
    const user = useSelector((state) => state.login)
    const [password,onChangePassword] = useState("");
    const [repeatPassword,onChangeRepeat] = useState("");
    const data = {password, email: user.email, token:user.token}
    const [loading, setLoading]=useState(false)
    const [visible,setVisible]=useState(100)


    function log(){
     dispatch(getUser())  
    navigation.navigate("Login")
}



function resetAlert(){
        return(
        Alert.alert(
          "Exito",
          "Contraseña cambiada",
          [
            { text: "OK", onPress: () => { log() } }
          ]
        )
    
      )};


function errorAlert(){
        return(
        Alert.alert(
          "ERROR",
          "Las contraseñas no coinciden",
          [
            { text: "OK", onPress: () => console.log("OK") }
          ]
        )
    
      )};


function minPassword() {
        Alert.alert("Error", "La contraseña debe tener como minimo 8 caracteres.", [
          { text: "Ok", onPress: () => navigation.navigate("NewPassword")  },
        ]);
      }
    
    
useEffect(() => {
        dispatch(getLogin(user.email))
      },[dispatch])

    
 function handlesubmit(){ 
   if(password.length && repeatPassword.length){
        setLoading(true)
        setVisible(0)
        if(password.length < 8 ){
          setLoading(false)
          setVisible(100)
          minPassword()}
          else if(password===repeatPassword){
            setLoading(false)
            setVisible(100)
            resetAlert()
            dispatch(resetPassword(data))
          }else{
            setLoading(false)
            setVisible(100)
            errorAlert()
          }
         
        }
      }
      


    return(
        <View style={styles.container}>
            <View opacity={visible}>
            <View style={{position:'relative', top:30}}>
         <TouchableOpacity onPress={()=> navigation.goBack()}>
            <Icon
             as={<FontAwesome5  name="angle-left"/>}
             size="sm"
             m={2}
               />
               </TouchableOpacity>
         </View>
        <View style={styles.move}>
        <Text style={styles.text}>Ingrese contraseña nueva</Text>
            <Input
                onChangeText={onChangePassword}
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
                                    type={show? "text" : "password"}
                                    InputRightElement={<Icon 
                                        as={<MaterialIcons name={show ? "visibility" : "visibility-off"} 
                                        />} 
                                       size={5} mr="2" color="muted.400" onPress={() => setShow(!show)} 
                                       />}
                                    />
        <Text style={styles.text}>Repita contraseña nueva</Text>
            <Input
                      onChangeText={onChangeRepeat}
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
                                    type={showrepeat ? "text" : "password"} 
                    InputRightElement={<Icon 
                      as={<MaterialIcons name={showrepeat ? "visibility" : "visibility-off"} 
                      />} 
                     size={5} mr="2" color="muted.400" onPress={() => setShowrepeat(!showrepeat)} 
                     />}
                                    />
        </View>
        <View style={styles.buttonStyle}>
                <Button 
                onPress={handlesubmit}
                style={styles.buttonDesing}>
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
        <NewPassword/>
      </NativeBaseProvider>
    )
  }