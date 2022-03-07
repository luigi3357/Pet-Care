
import React, { useEffect } from 'react'
import { NativeBaseProvider,Icon, Avatar,Box,Center,Fab, Button} from 'native-base'
import {useNavigation} from '@react-navigation/native'
import {View, StyleSheet,Text,TouchableOpacity} from 'react-native'
import {FontAwesome5,MaterialCommunityIcons, MaterialIcons} from '@expo/vector-icons'
import Footer from './Componentes/Footer'


function Profile(){

    const navigation = useNavigation()

    return(
       <View style={styles.container}>
           <View style={styles.up}>
               <TouchableOpacity onPress={()=>navigation.navigate("Login")}>
               <Icon
             as={<FontAwesome5  name="angle-left"/>}
             size="sm"
             m={2}
              _ligth={{
              color:'black'
             }}
              _dark={{
             color:'white'
              }}
               />
                </TouchableOpacity>
                <TouchableOpacity onPress={()=>navigation.navigate("Login")}
                style={styles.movepen}>
               <Icon
             as={<FontAwesome5  name="pen"/>}
             size="sm"
             m={2}
              _ligth={{
              color:'black'
             }}
              _dark={{
             color:'white'
              }}
               />
                </TouchableOpacity>
           </View>

           <View style={styles.avatar}>
           <Avatar bg="purple.600" alignSelf="center" size="2xl" source={
       require("../../assets/profileblank.jpg")
      }>
          RB
        </Avatar>
           </View>
           <View style={styles.buttonStyle}>
                <Button
                 onPress={()=>navigation.navigate("Login")}
                style={styles.buttonDesing}>
                    Cerrar Sesion
                </Button>       
            </View>
    
           <Footer/>
       </View>

    )
}


export default () => {
    return (
      <NativeBaseProvider>
        <Profile/>
      </NativeBaseProvider>
      )
  }



  const styles = StyleSheet.create({
    container:{
        flex:1,
        backgroundColor:"#f9f9f9",
    },

    up:{
        flexDirection:'row',
        marginTop:50,
    },
    text2:{
        marginLeft:10,
        flexDirection:'row',
        marginTop:50,
    },

    movepen:{
        marginLeft:290,
    },
    avatar:{
        marginTop:30,
    },
    textName:{
        fontSize:30,
        fontWeight: "bold"
    },
    middle:{
        alignItems:'center',
        marginTop:10,
    },
    buttonStyle:{
        marginRight:15,
        marginLeft:15,
        marginTop:300,
    },
    buttonDesing:{
        backgroundColor: "#00d2c6"
      },
    })



