import { View, Text, StyleSheet, TouchableOpacity, RefreshControl  } from 'react-native'
import React,{ useEffect, useState } from 'react'
import { useDispatch } from "react-redux";
import {Input, NativeBaseProvider,Button, Icon, Image } from 'native-base'
import {FontAwesome5, MaterialCommunityIcons} from '@expo/vector-icons'
import {useNavigation} from '@react-navigation/native'
import InputsLogin from './Componentes/InpuntsLogin'
import  { registerBack } from '../../Store/Actions/ApiActionCreator';


const Register = () => {

  const dispatch = useDispatch();
  const [email,onChangeEmail] = useState("");
  const [password,onChangePassword] = useState("");
  const [name,onChangeName] = useState("");
  const[last_name,onChangeLastName] = useState("");
  const [refresh, setRefresh] = useState(false)
  const data = { email: email, password :password, name:name, last_name:last_name};
  const [showModal, setShowModal] = useState(false);
  const navigation = useNavigation();
 
  const pullMe = ()=>{
   setRefresh(true)

   setTimeout(()=>{
     setRefresh(false)
   },2000)
  }



 function handlesubmit(e){
    dispatch(registerBack(data));
    navigation.navigate("HomeScreen");
  }
  
  return (
    <View style={styles.container}>


       <View style={styles.logoPos}>
       <TouchableOpacity onPress={()=> navigation.navigate("Login")}>
            <Icon
             as={<FontAwesome5  name="angle-left"/>}
             size="sm"
             m={2}
               />
               </TouchableOpacity>
        <View style={{marginLeft:100}}>
         <Image
          source={require("../../assets/slides/img1.png")}
          style={styles.tinylogo}
          alt="image"/>
          </View>

      
            </View>
            <View style={styles.middle}>
                <Text style={styles.loginText}>Registrate</Text>
            </View>
                    <Input                            
                    type="text"     
                    onChangeText={onChangeName}
                        placeholder = "Nombre"
                    />
                    <Input                            
                    type="text"     
                    onChangeText={onChangeLastName}
                        placeholder = "Apellido"
                    />
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
                    REGISTRATE
                </Button>

                
            </View>            
            <View style={styles.text2}>
                <Text >Ya tienes cuenta?</Text>
                <TouchableOpacity onPress={()=>navigation.navigate("Login")}>
                <Text style={styles.singupText}>INICIA SESION</Text>
                </TouchableOpacity>
            </View>

    </View>
  )
}

export default () => {
  return(
  <NativeBaseProvider>
  <Register/>
</NativeBaseProvider>
  )
}



const styles = StyleSheet.create({
  container:{
      flex:1,
      backgroundColor:"#fff",
  },


loginText:{
  fontSize:30,
  fontWeight: "bold"
},
middle:{
  alignItems:'center',
  marginTop:50
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
  width: 100,
  height: 100,
  resizeMode:'contain',
  marginLeft:100,
},
tinylogo: {
  width: 100,
  height: 100,
},
boxStyle:{
  flexDirection:'row'   
},
logoPos:{
  flexDirection:'row',
  marginTop:50,
},
back:{
  marginTop:50,
}
})