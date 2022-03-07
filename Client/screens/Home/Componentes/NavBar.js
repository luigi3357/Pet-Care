import React,  {useEffect,useState} from 'react'
import { StyleSheet, SafeAreaView, View ,ScrollView,} from 'react-native';
import {AspectRatio,NativeBaseProvider} from 'native-base'
import SearchBar from './SearchBar'
import Filtrado from './FilterButton'
// import PostCard from './PostCard';

export default function Navbar() {
  return (
    <NativeBaseProvider> 
 <View style={styles.container}  >
   <View  style={{ flex:1, marginTop:10}}>
      <SearchBar/>
   </View>
   <View style={{ flex:1}}>

  <Filtrado />
   </View>
 </View>

</NativeBaseProvider> 

  )
}
const styles = StyleSheet.create({
  container: {
  backgroundColor:'#00D2C6', //Green
    flex:1,
    flexDirection:"row",
  
    // ,position: "absolute"
    // ,top: 15
  
  }
});