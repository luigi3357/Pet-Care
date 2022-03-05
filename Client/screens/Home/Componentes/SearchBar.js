import React, {useState, useEffect} from 'react'
import {Icon,NativeBaseProvider} from 'native-base'
import { Ionicons } from '@expo/vector-icons'; 
import {View,TouchableOpacity,Text,StyleSheet, TextInput} from 'react-native'


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
    
        <View style={styles.container}>
        <View style={styles.searchContainer}>
      <View style={styles.searchicon}>
         
      
       
  <TouchableOpacity
 style={styles.searchicon}
 onPress={submitSearch}
  >
  <Icon ml="2" size="7" color="#000000" as={<Ionicons name="ios-search" />} />
  </TouchableOpacity>
  
  </View>

      
       <TextInput
       style={styles.textInput}
      
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
          

         
       
      </View>
      
      
    <View>
{/* {
  error &&
  <Text style={{width:'90%',marginTop:'2%',color:'white'}}>
        {error}
    </Text>
} */}
    </View>
    


        
      </View>


      

       


     
      </NativeBaseProvider>
      )
 
     
      
 
    }
    const styles = StyleSheet.create({
      container:{
        width:'100%',
     
      alignItems:'center',

    },
    searchContainer:{
      alignItems: 'center',
      
      backgroundColor:'white',
      maxHeight : '2rem',
      width:'100%',
    flexDirection:'row',
    alignItems:'center'
  },
    searchicon:{
     
      justifyContent:'center',
      alignItems:'center',
      opacity: 0.5,
    
      
    },
    textInput:{
     
       height:'100%'

    },
      
  })
        
   
    
      
