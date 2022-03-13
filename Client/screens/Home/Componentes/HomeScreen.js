import React, { useEffect, useState } from "react";
import {
  ScrollView,
  StyleSheet,
  View,
  TouchableOpacity,
  Text,
  ActivityIndicator,
} from "react-native";
import { useDispatch, useSelector } from "react-redux";
import { fetchAllPosts } from "../../../Store/Actions";
import Footer from "../../Profile/Componentes/Footer";
import Bottomplus from "./BottomForm/Bottomplus";
import Navbar from "./NavBar";
import PostCard from "./PostCard";
import LottieView from "lottie-react-native";
import { useNavigation } from "@react-navigation/native";
import PetLover from "../../Animations/petLover";

export default function HomeScreens() {
  const filtered_posts = useSelector((state) => state.filtered_posts);
  const dispatch = useDispatch();
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    dispatch(fetchAllPosts());
  }, []);
  useEffect(() => {
    setInterval(() => {
      if (filtered_posts.length > 0) {
      }
      setLoading(false);
    }, 1000);
    console.log(filtered_posts);
  }, [filtered_posts]);

  const navigation = useNavigation();

  return (
    <>
      {loading ? (
        <PetLover />
      ) : (
        <>
          <View style={{ height: "20%", width: "100%" }}>
            <Navbar />
          </View>

          <View>
            <TouchableOpacity
              title="goToPay"
              onPress={() => navigation.navigate("Payment")}
            >
              <Text style={styles.button}>Contratar!</Text>
            </TouchableOpacity>
          </View>
          <ScrollView>
            {filtered_posts
              ? filtered_posts.map((post) => {
                  return (
                    <PostCard
                      autorId={post.author.id}
                      id={post.id}
                      key={post.id}
                      title={post.title}
                      description={post.description}
                      reviews={
                        post.author.reviews.length > 0
                          ? post.author.reviews
                          : null
                      }
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
      )}
    </>
  );
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "flex-end",
    justifyContent: "flex-end",
  },
  button: {
    backgroundColor: "#8aF",
    marginTop: 1,
    textTransform: "uppercase",
    color: "#FFF",
    display: "flex",
    alignSelf: "flex-end",
    padding: 10,
    borderRadius: 10,
    fontWeight: "bold",
    overflow: "hidden",
    borderBottomStartRadius: 30,
  },
  loading: {
    position: "absolute",
    top: "50%",
    alignSelf: "center",
  },
});
