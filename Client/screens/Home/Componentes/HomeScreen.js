import React, { useEffect } from "react";
import { ScrollView, StyleSheet, View, TouchableOpacity, Text } from "react-native";
import { useDispatch, useSelector } from "react-redux";
import { fetchAllPosts } from "../../../Store/Actions";
import Footer from "../../Profile/Componentes/Footer";
import Bottomplus from "./BottomForm/Bottomplus";
// import {AspectRatio,NativeBaseProvider} from 'native-base'
// import SearchBar from './SearchBar'
// import Filtrado from './FilterButton'
import Navbar from "./NavBar";
import PostCard from "./PostCard";

import { useNavigation } from '@react-navigation/native'

export default function HomeScreens() {
  const filtered_posts = useSelector((state) => state.filtered_posts);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchAllPosts());
  }, []);
  useEffect(() => {}, [filtered_posts]);

  const navigation = useNavigation();

  return (
    <>
      <View style={{ height: "13%", width: "100%" }}>
        <Navbar />
      </View>
      <View>
        <TouchableOpacity title="goToPay" onPress={() => navigation.navigate("Payment")}>  
          <Text style={styles.button}>Contratar!</Text> 
        </TouchableOpacity>  
      </View>
      <ScrollView>
        {filtered_posts
          ? filtered_posts.map((post) => {
              return (
                <PostCard
                  id={post.id}
                  key={post.id}
                  title={post.title}
                  description={post.description}
                  reviews={post.author.reviews}
                  rating={post.author.rating}
                  bookings={post.author.bookings}
                />
              );
            })
          : null}
      </ScrollView>
      <View>
        <Bottomplus />
      </View>
      <View style={{ height: "8%", width: "100%" }}>
        <Footer />
      </View>
    </>
  );
}
const styles = StyleSheet.create({
  container: {
    flex: 1,

    alignItems: "flex-end",
    justifyContent: "flex-end",
  },button: {
    backgroundColor: "#8aF",
    marginTop: 0.5,
    color: "#FFF",
    display: "flex",
    alignSelf: "flex-end",
    // ,flex:1
    padding: 4,
  }
});

//   var reviewsPostCard = [];

//   for(let i =0; i<5; i++){
//     let arrAux = [];
//   for(let i =0; i<8;i++){

//     let obj = {
//       titulo : getRandomName(3),
//       rating : Math.ceil(Math.random()*5),
//       usuario: getRandomName(2)
//      ,review : getRandomName(Math.ceil(Math.random()*17))
//     }
//     arrAux.push(obj);

//   }
//   reviewsPostCard.push(arrAux);
// }

// function getRandomName(q) {
//   const loremIpsum =
//     "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.";
//   var string = "";
//   for (let i = 0; i < q; i++) {
//     string +=
//       loremIpsum.split(" ")[
//         Math.floor(Math.random() * loremIpsum.split(" ").length)
//       ] + " ";
//   }
//   return string.trim();
// }
