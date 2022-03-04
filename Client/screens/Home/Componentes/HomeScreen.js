import React,  {useEffect,useState} from 'react'
import { StyleSheet, SafeAreaView, View ,ScrollView,} from 'react-native';
import {AspectRatio,NativeBaseProvider} from 'native-base'
import SearchBar from './SearchBar'
import Filtrado from './FilterButton'
import Navbar from './Navbar';
import PostCard from './PostCard';


export default function HomeScreens() {

  return (
      <>
      <View style={{zIndex:'1'}}>
           <Navbar/>
    </View>
           <ScrollView>
           <PostCard />
           <PostCard/>
           <PostCard/>
           <PostCard/>
           <PostCard/>
           </ScrollView>

        </>
    )
  }