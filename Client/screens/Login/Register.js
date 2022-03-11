import { FontAwesome5,MaterialIcons  } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native';
import { Button, Icon, Image, Input, NativeBaseProvider } from 'native-base';
import React, { useState } from 'react';
import { Alert, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import { useDispatch } from "react-redux";
import { registerBack } from '../../Store/Actions/index';


const Register = () => {

  const dispatch = useDispatch();
  const [email,onChangeEmail] = useState("");
  const [password,onChangePassword] = useState("");
  const [repeatPassword,onChangeRepeat] = useState("");
  const [name,onChangeName] = useState("");
  const[last_name,onChangeLastName] = useState("");
  const [refresh, setRefresh] = useState(false)
  const data = { email: email, password :password, name:name, last_name:last_name};

  const navigation = useNavigation();
  const [show, setShow] = useState(false);
  const [showrepeat, setShowrepeat] = useState(false);


  const pullMe = ()=>{
   setRefresh(true)

   setTimeout(()=>{
     setRefresh(false)
   },2000)
  }

  function registerLog(){
    Alert.alert(
      "Registrado",
      "Registro exitoso",
      [
        { text: "Inicia Sesion", onPress: ()=>navigation.navigate("HomeScreen") }
      ]
    )};
  function errorPassword(){
      Alert.alert(
        "Error",
        "Las contraseñas no coinciden.",
        [
          { text: "Volver", onPress: ()=>navigation.navigate("Register") }
        ]
      )};

 function handlesubmit(e){
   if(password!==repeatPassword){
        errorPassword()
   }else{
    dispatch(registerBack(data)) 
    registerLog()
   }
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
            <View style={{ alignItems:'center'}}>
                    <Input 
                    style={{marginTop:10}}  
                    width={'5/6'}                          
                    type="text"     
                    onChangeText={onChangeName}
                        placeholder = "Nombre"
                    InputLeftElement={
                          <Icon
                             as={<FontAwesome5  name="user"/>}
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
                    />
                    <Input 
                    style={{marginTop:10}}  
                    width={'5/6'}                           
                    type="text"     
                    onChangeText={onChangeLastName}
                        placeholder = "Apellido"
                    InputLeftElement={
                          <Icon
                             as={<FontAwesome5  name="user"/>}
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
                    />
                    <Input 
                    style={{marginTop:10}}  
                    width={'5/6'}                            
                    type="text"     
                    onChangeText={onChangeEmail}
                    placeholder = "Email"
                    InputLeftElement={
                      <Icon
                         as={<FontAwesome5  name="user"/>}
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
                    />
                    <View>
                    <Input
                    style={{marginTop:10}} 
                    width={'5/6'}  
                    onChangeText={onChangePassword}
                    placeholder = "Contraseña"
                    type={show ? "text" : "password"} 
                    InputRightElement={<Icon 
                      as={<MaterialIcons name={show ? "visibility" : "visibility-off"} 
                      />} 
                     size={5} mr="2" color="muted.400" onPress={() => setShow(!show)} 
                     />}              
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
                    />
                    </View>
                    <Input
                    style={{marginTop:50}} 
                    width={'5/6'}  
                    onChangeText={onChangeRepeat}
                    placeholder = "Contraseña"
                    type={showrepeat ? "text" : "password"} 
                    InputRightElement={<Icon 
                      as={<MaterialIcons name={showrepeat ? "visibility" : "visibility-off"} 
                      />} 
                     size={5} mr="2" color="muted.400" onPress={() => setShowrepeat(!showrepeat)} 
                     />}
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
                    />
                  </View>
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