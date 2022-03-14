import React, { useEffect, useState } from "react";
import {
  ScrollView,
  StyleSheet,
  View,
  TouchableOpacity,
  Text,
  ActivityIndicator,
  KeyboardAvoidingViewBase,
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
import { SafeAreaView } from "react-native-safe-area-context";
import PublishButton from "./PublishButton";

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
    }, 2000);
  }, [filtered_posts]);

  const navigation = useNavigation();

  return (
    <SafeAreaView style={{ backgroundColor: "#00D2C6", height: "100%" }}>
      {loading ? (
        <PetLover />
      ) : (
        <>
          {/* <PublishButton /> */}
          <View style={{ height: 90, width: "100%" }}>
            <Navbar />
          </View>

          <ScrollView style={{ backgroundColor: "#f9f9f9", marginBottom: 70 }}>
            {filtered_posts
              ? filtered_posts.map((post) => {
                  return (
                    <PostCard
                      authorId={post.author.id}
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

          <View
            style={{
              backgroundColor: "transparent",
              height: 70,
              position: "absolute",
              bottom: 0,
              width: "100%",
            }}
          >
            <Footer />
          </View>
        </>
      )}
    </SafeAreaView>
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
    marginTop: 0.5,
    color: "#FFF",
    display: "flex",
    alignSelf: "flex-end",
    // ,flex:1
    padding: 4,
  },
  loading: {
    position: "absolute",
    top: "50%",
    alignSelf: "center",
  },
});

{
  /* <View>
 <TouchableOpacity title="goToPay" onPress={() => navigation.navigate("Payment")}>  
 <Text style={styles.button}>Contratar!</Text> 
 </TouchableOpacity>  
 </View> */
}
