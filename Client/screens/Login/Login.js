import { useNavigation } from '@react-navigation/native'
import { Button, Image, Input, NativeBaseProvider, Text } from 'native-base'
import React, { useState } from 'react'
import { Alert, StyleSheet, TouchableOpacity, View } from 'react-native'
import { useDispatch, useSelector } from 'react-redux'
import { getLogin } from '../../Store/Actions'

const Login = () => {   
        
    const dispatch = useDispatch()
    const [email,onChangeEmail] = useState("")
    const [password,onChangePassword] = useState("")
    const data = { email: email, password :password}
    const [refresh, setRefresh] = useState(false)
    const trues = useSelector((state=>(state.true)))
    const falses = useSelector((state=>(state.false)))

    const checks = useSelector((state=>(state.check)))
  
    console.log(checks)
  function errorAlert(){
    Alert.alert(
      "Error",
      "Ingrese los datos correctos para ingresar",
      [
        { text: "OK", onPress: ()=>navigation.navigate("Login") }
      ]
    )};




    function handlesubmit(){
        dispatch(getLogin(data)) 
        
        // navigation.navigate("HomeScreen")

    }
    
  const pullMe = ()=>{
        setRefresh(true)
     
        setTimeout(()=>{
          setRefresh(false)
        },2000)

        onChangeEmail("");
        onChangePassword("");
       }
     
   
      const navigation = useNavigation();


    return(
        <View>
        
            <View style={styles.logoPos}>
                <Image
                source={require("../../assets/slides/img1.png")}
                style={styles.logo}
                alt="."
               />
            </View>
            <View>
            <Input                          
             type="text"     
              onChangeText={(email)=>onChangeEmail(email)}
              placeholder = "Email"
             />
            <Input
             type="password"
             onChangeText={(password)=>onChangePassword(password)}
             placeholder = "Contraseña"
              />

            <View style={styles.buttonStyle}>
                <Button
                 onPress={handlesubmit}
                style={styles.buttonDesing}>
                    Inicia Sesion
                </Button>       
            </View>
            <View style={styles.text2}>
                <TouchableOpacity onPress={()=>navigation.navigate("ForgetPassword")}>
                <Text style={styles.singupText}>Olvidaste tu Contraseña?</Text>
                </TouchableOpacity>
            </View>

            <View style={styles.text2}>
                <Text >No tienes cuenta?</Text>
                <TouchableOpacity onPress={()=>navigation.navigate("Register")}>
                <Text style={styles.singupText}>REGISTRATE</Text>
                </TouchableOpacity>
            </View>
            </View>
            </View>
    )
}
export default () => {
    return (
      <NativeBaseProvider>
        <Login/>
      </NativeBaseProvider>
    )
  }



  const styles = StyleSheet.create({
      container:{
          flex:1,
          backgroundColor:"#f9f9f9",
      },
      loginText:{
          fontSize:30,
          fontWeight: "bold",

      },
      middle:{
          alignItems:'center',
          top:70
      },
      text2:{
          paddingTop: 10,
          alignItems:'center',
      },
      singupText:{
        fontWeight: "bold",
        paddingTop:5,
      },
      emailInput:{
          marginTop:10,
          marginRight:5,
      },
      buttonStyle:{
          marginRight:15,
          marginLeft:15,
          marginTop:30,
      },
      buttonStyleX:{
          marginTop:12,
          marginRight:15,
          marginLeft:15,
      },
      buttonDesing:{
        backgroundColor: "#00d2c6"
      },
      lineStyle:{
          flexDirection:'row',
          marginTop:30,
          marginLeft:15,
          marginRight:15,
          alignItems:'center'
      },
      lineStyle:{
          flexDirection:'row',
          marginTop:30,
          marginLeft:15,
          marginRight:15,
          justifyContent:"space-around"
    },
      logo: {
          width: 200,
          height: 200,
          resizeMode:'cover'
      },
      tinylogo: {
          width: 70,
          height: 70,
    },
    boxStyle:{
          flexDirection:'row'   
    },
    logoPos:{
          alignItems:'center',
          marginTop:30,
    }
  })
