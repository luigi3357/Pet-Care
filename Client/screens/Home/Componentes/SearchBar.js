import React, {useState, useEffect} from 'react'
import {VStack,Box,Divider,Input, Icon,NativeBaseProvider,AspectRatio, Center} from 'native-base'
import { Ionicons,AntDesign } from '@expo/vector-icons'; 
import {View,TouchableOpacity,TextInput,StyleSheet} from 'react-native'


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
      <View style={{marginTop:10}}>
    <AspectRatio ratio={3/1}>
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
    </View>
    </AspectRatio>
    </View>
    )

   
    

  }
    const styles = StyleSheet.create({
      container:{
        flex:1,
        width:'100%',
        height:'100%',
      alignItems:'center',
     backgroundColor:'orange',
      justifyContent:'center',
      
    },
    searchContainer:{
      alignItems: 'center',
      justifyContent:'flex-start',
      height:'124%',
      backgroundColor:'#00D2C6', //red search
      width:"100%",
      flexDirection:'row',
      marginLeft:15,
  },
    searchicon:{
      
     backgroundColor:'white',
     height:"40%",
     width:'30%',
      justifyContent:'center',
      alignItems:'center',
      borderTopLeftRadius:8,
      borderBottomLeftRadius:8
    
      
    },
    textInput:{
      width:'100%',
       height:"40%",
backgroundColor:'white',
borderWidth:6,
borderColor:'white',
borderTopRightRadius:8,
borderBottomRightRadius:8
    },
      
  })
        
   
    
      
