import React, {useState, useEffect} from 'react'
import {VStack,Box,Divider,Input, Icon,NativeBaseProvider,AspectRatio, Center} from 'native-base'
import { Ionicons,AntDesign } from '@expo/vector-icons'; 
import {View,TouchableOpacity,Text,StyleSheet} from 'react-native'


export default function SearchBar() {
  const [value,setValue]=useState('')
 const[error,setError]=useState()
  
 
 function searchText (valor){
   setValue(valor)
   console.log(value)
  }
  function submitSearch(){
   
    console.log(value)
  }
    return (
        <NativeBaseProvider>
      <AspectRatio ratio={3/1} >
        <View style={styles.container}>
        <View style={styles.searchContainer}>
      
         
      
       
  <TouchableOpacity
 style={styles.searchicon}
 onPress={submitSearch}
  >
  <Icon ml="2" size="8" color="#000000" as={<Ionicons name="ios-search" />} />
  </TouchableOpacity>
  
        <VStack w="75%" space={5} >
        <Input 
        variant="filled" 
        width="100%"  py="1" 
        color={'white'}
        onChangeText={(text)=>{
          var letters = /^[A-Za-z]+$/;
          if(text.length>30){
            setError('Query too long.')
          }
          else if(text.match(letters)){
            searchText(text)
          if(error){
            setError(false)
          }
          }
          else setError('Solo letras del alfabeto')
        }
      }
      />
      </VStack>
      </View>
      
      
    <View>
{
  error &&
  <Text style={{width:'75vw',marginTop:'2%',color:'white'}}>
        {error}
    </Text>
}
    </View>
    


        
      </View>


      

       


      </AspectRatio>
      </NativeBaseProvider>
      )
 
     
      
 
    }
    const styles = StyleSheet.create({
      container:{
      
        maxHeight: "1.5rem",
      alignItems:'center',

    },
    searchContainer:{
      backgroundColor:'rgb(224, 224, 224)',
      borderRadius:40,
      width:'75vw',
    flexDirection:'row',
    alignItems:'center'
  },
    searchicon:{
    
      justifyContent:'center',
      alignItems:'center',
      bottom:2,
      opacity: 0.5,
      width:40,
      zIndex:1,
      
    },
  })