import React, { useEffect, useState }	from 'react'
import {View, StyleSheet, Text, Alert,ActivityIndicator,TouchableOpacity} from 'react-native'
import { NativeBaseProvider,Button,Icon, Input } from 'native-base'
import {useNavigation} from '@react-navigation/native'
import InputsLogin from './Componentes/InpuntsLogin'
import {FontAwesome5} from '@expo/vector-icons'
import { forgotPassword, getLogin, getUser } from '../../Store/Actions'
import { useDispatch, useSelector } from 'react-redux'



function ForgetPassword(){

    const navigation = useNavigation();
    const [email,onChangeEmail] = useState("")
    const data = { email: email}
    const dispatch = useDispatch();
    const [loading, setLoading]=useState(false)
    const [visible,setVisible]=useState(100)


    function notexistsEmail(){
      return(
      Alert.alert(
        "ERROR",
        "El email ingresado es incorrecto",
        [
          { text: "OK", onPress: () => console.log("OK") }
        ]
      )
  


    )};
  

  
useEffect(() => {
      dispatch(getUser())
      
    },[dispatch])
  
  const user = useSelector((state=>(state.users)))  




    
function handlesubmit(){   
  if(email.length){
  setLoading(true)
  setVisible(0)  
  const verifyEmail = user.filter(e=>e.email===email)
     console.log(verifyEmail,"xdxdxd")
  if(!verifyEmail.length){

    setTimeout(() => {
      setLoading(false)
      setVisible(100)
      notexistsEmail()
    }, 2000);
      }else{
      
      dispatch(forgotPassword(data));      
      dispatch(getLogin(email));  
      setTimeout(() => {
        setLoading(false)
        setVisible(100)
        navigation.navigate("MailCode");
      }, 2000);
         
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
       
          <Text style={styles.text}>Ingrese email de la cuenta</Text>
            <Input
            type="text" 
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
              onChangeText={onChangeEmail}
                        placeholder="Usuario o email"/> 
        </View>
        <View style={styles.buttonStyle}>
                <Button 
                style={styles.buttonDesing}
                onPress={()=>handlesubmit()}>
                    Enviar
                </Button>
            </View>
            </View>
            <View style={styles.loading}>
            <ActivityIndicator size="large" color="#00d2c6" animating={loading}/>
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
    top:160,
 }
  
  })


  export default () => {
    return (
      <NativeBaseProvider>
        <ForgetPassword/>
      </NativeBaseProvider>
    )
  }
