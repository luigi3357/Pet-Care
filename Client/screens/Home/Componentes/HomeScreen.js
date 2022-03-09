import React, { useEffect } from "react";
import { ScrollView, StyleSheet, View } from "react-native";
import { useDispatch, useSelector } from "react-redux";
import { fetchAllPosts } from "../../../Store/Actions";
import Footer from "../../Profile/Componentes/Footer";
import Bottomplus from "./BottomForm/Bottomplus";
import Navbar from "./NavBar";
import PostCard from "./PostCard";

export default function HomeScreens() {
  const filtered_posts = useSelector((state) => state.filtered_posts);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchAllPosts());
  }, []);
  useEffect(() => {}, [filtered_posts]);

  return (
    <>
      <View style={{ height: "20%", width: "100%" }}>
        <Navbar />
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
                  reviews={post.author.reviews.length>0 ? post.author.reviews : null}
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
  },
});
