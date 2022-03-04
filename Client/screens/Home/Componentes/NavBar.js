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
   
      <SearchBar/>
        <Filtrado/>

 </View>

</NativeBaseProvider> 

  )
}
const styles = StyleSheet.create({
  container: {
    // flex:1,
    display: "flex",
    flexFlow:"row",
    justifyContent:"space-between",
  }
});