
import React from 'react'
import { NativeBaseProvider,Icon, Avatar,Box,Center,Fab} from 'native-base'
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
           
           <View style={styles.middle}>
                <Text style={styles.textName}>Franco Miño</Text>
           </View>

           <View style={styles.text2}>
               <Icon
             as={<FontAwesome5  name="star"/>}
             size="sm"
             m={2}
               />
                <Text style={{marginTop:10}}>4.5</Text>
                <View style={{marginTop:10, marginLeft:150, flexDirection:'row'}}>
                <Text>5</Text>
                <Text style={{ marginLeft:30}}>Contrataciones</Text>
                </View>
           </View>

           <View style={{flexDirection:'row', justifyContent:'space-between', marginLeft:20, marginRight:20, marginTop:30}}>
               <View style={{flexDirection:'column'}}>
                   <Text>feature</Text>
                   <Text>feature</Text>
                   <Text>feature</Text>
                   <Text>feature</Text>
               </View>
               <View style={{flexDirection:'column'}}>
                   <Text>feature</Text>
                   <Text>feature</Text>
                   <Text>feature</Text>
                   <Text>feature</Text>
               </View>
               <View style={{flexDirection:'column'}}>
                   <Text>feature</Text>
                   <Text>feature</Text>
                   <Text>feature</Text>
                   <Text>feature</Text>
               </View>
           </View>
           <View>
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
        backgroundColor:"#fff",
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
    })



