import { useNavigation } from '@react-navigation/native'
import { Button, Image, Input, NativeBaseProvider, Text} from 'native-base'
import React, { useEffect, useState } from 'react'
import { StyleSheet, TouchableOpacity, View, ActivityIndicator,Alert } from 'react-native'
import { useDispatch, useSelector } from 'react-redux'
import { getUser } from '../../Store/Actions/index'
import   bcrypt from 'bcryptjs'



const Login = () => {   
        

    const dispatch = useDispatch()
    const [email,onChangeEmail] = useState("")
    const [password,onChangePassword] = useState("")
    const [loading, setLoading]=useState(false)
    const [visible,setVisible]=useState(100)
    function errorAlert(){
  return(
    Alert.alert(
      "ERROR",
      "Ingrese correctamente sus datos para iniciar sesion",
      [
        { text: "OK", onPress: () => console.log("OK") }
      ]
    )

  )};

    useEffect(() => {
      dispatch(getUser())
    },[])
    
    const user = useSelector((state=>(state.users)))
    //console.log(user)
  async function handlesubmit(){ 
    setLoading(true)
    setVisible(0)
    const verifyEmail =  user.filter(e=>e.email===email)
    const passVerify = verifyEmail.map(e=>e.password).toString()
      const verifyPassword = await bcrypt.compare(password, passVerify)
      //console.log(password)
      //console.log(verifyPassword, "pass")
      //console.log(passVerify)
      //console.log(verifyEmail, "email")

      if(verifyPassword===true){
        setLoading(false)
        setVisible(100)
        navigation.navigate("HomeScreen")
      }else{
        setLoading(false)
        setVisible(100)
        errorAlert()
      }
  }
      const navigation = useNavigation();


    return(
        <View>
        <View opacity={visible}>
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
              onChangeText={onChangeEmail}
              placeholder = "Email"
             />
            <Input
             type="password"
             onChangeText={onChangePassword}
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
            <View style={styles.loading}>
            <ActivityIndicator size="large" color="#00d2c6" animating={loading}/>
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
    },
    loading:{
       position:'relative',
       top:-60,


    }
  })
