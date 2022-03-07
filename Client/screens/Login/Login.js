import React, { useState } from 'react'
import { View, StyleSheet, TouchableOpacity, ScrollView, RefreshControl,Alert  } from 'react-native'
import { NativeBaseProvider,Button, Image,Input,Text} from 'native-base'
import {useNavigation} from '@react-navigation/native'
import { getLogin } from '../../redux/ApiActionCreator'
import {FontAwesome5} from '@expo/vector-icons'
import {useSelector, useDispatch} from 'react-redux'

const Login = () => {   
        
    const dispatch = useDispatch()
    const [email,onChangeEmail] = useState("")
    const [password,onChangePassword] = useState("")
    const data = { email: email, password :password}
    const [refresh, setRefresh] = useState(false)
    const trues = useSelector((state=>(state.true)))
    const falses = useSelector((state=>(state.false)))

    


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
        
        navigation.navigate("HomeScreen")

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
        <ScrollView  refreshControl={
            <RefreshControl
            refreshing={refresh}
            onRefresh={()=>pullMe()}
            />
          }>
            <View style={styles.logoPos}>
                <Image
                source={require("../../assets/slides/img1.png")}
                style={styles.logo}
                alt="image"/>
            </View>
            <View style={styles.middle}>
                <Text style={styles.loginText}>Login</Text>
            </View>
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
                 onPress={(data)=>handlesubmit(data)}
                style={styles.buttonDesing}>
                    LOGIN
                </Button>       
            </View>
            <View style={styles.text2}>
                <TouchableOpacity onPress={()=>navigation.navigate("Profile")}>
                <Text style={styles.singupText}>Olvidaste tu Contraseña?</Text>
                </TouchableOpacity>
            </View>

            <View style={styles.text2}>
                <Text >No tienes cuenta?</Text>
                <TouchableOpacity onPress={()=>navigation.navigate("Register")}>
                <Text style={styles.singupText}>REGISTRATE</Text>
                </TouchableOpacity>
            </View>
            </ScrollView>
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
          fontWeight: "bold"
      },
      middle:{
          alignItems:'center',
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
          width: 300,
          height: 300,
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
