import React,  {useEffect,useState} from 'react'
import { StyleSheet, SafeAreaView, View ,ScrollView,} from 'react-native';
// import {AspectRatio,NativeBaseProvider} from 'native-base'
// import SearchBar from './SearchBar'
// import Filtrado from './FilterButton'
import Navbar from './NavBar';
import PostCard from './PostCard';
import Bottomplus from './BottomForm/Bottomplus'

export default function HomeScreens() {

  function getRandomName(q) {

  const loremIpsum =  "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."
    var string = '';
  for(let i = 0; i<q ; i++){
  string += loremIpsum.split(' ')[Math.floor(Math.random() * loremIpsum.split(' ').length)] + ' ';
}
  return string.trim();
}

  var reviewsPostCard = [];

  for(let i =0; i<5; i++){
    let arrAux = [];
  for(let i =0; i<8;i++){

    let obj = {
      id: 'r.'+ i,
      titulo : getRandomName(3),
      rating : Math.ceil(Math.random()*5),
      usuario: getRandomName(2),
     review : getRandomName(Math.ceil(Math.random()*17))
    }
    arrAux.push(obj);
    
  }
  reviewsPostCard.push(arrAux);
}


  return (
      <>
      <View style={{zIndex:1,height:'12%',width:'100%',backgroundColor:'orange'}}>
           <Navbar/>
    </View >
 
    <ScrollView>
           <PostCard id={1} key={1}  details={getRandomName(12)} title={getRandomName(Math.ceil(Math.random()* 3))} hiringNumber={Math.ceil(Math.random()*20)} rating={Math.ceil(Math.random()*5)}/>
           <PostCard id={2} key={2}  details={getRandomName(12)} title={getRandomName(Math.ceil(Math.random()* 3))} hiringNumber={Math.ceil(Math.random()*20)} rating={Math.ceil(Math.random()*5)}/>
           <PostCard id={3} key={3}  details={getRandomName(12)} title={getRandomName(Math.ceil(Math.random()* 3))} hiringNumber={Math.ceil(Math.random()*20)} rating={Math.ceil(Math.random()*5)}/>
           <PostCard id={4} key={4}  details={getRandomName(12)} title={getRandomName(Math.ceil(Math.random()* 3))} hiringNumber={Math.ceil(Math.random()*20)} rating={Math.ceil(Math.random()*5)}/>
           <PostCard id={5} key={5}  details={getRandomName(12)} title={getRandomName(Math.ceil(Math.random()* 3))} hiringNumber={Math.ceil(Math.random()*20)} rating={Math.ceil(Math.random()*5)}/>
           </ScrollView>
   <View style={styles.container}>

           <Bottomplus/>
   </View>

        </>
    )
  }
  const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: 'orange',
      alignItems: 'flex-end',
      justifyContent: 'flex-end'
    },
  });