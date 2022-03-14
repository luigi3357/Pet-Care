import React, { useState } from "react";
import {
  Image,
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import ReviewCard from "./ReviewCard";
import { useNavigation } from "@react-navigation/native";
import { Octicons } from "@expo/vector-icons";

export default function PostCard({
  id,
  autorId,
  date,
  title,
  image = require("../../../assets/profile.jpg"),
  rating,
  bookings,
  description,
  reviews,
}) {
  const [detailsView, setDetailsView] = useState(false);
  const navigation = useNavigation();
  function showDetails() {
    if (detailsView) {
      setDetailsView(false);
    } else {
      setDetailsView(true);
    }
  }

  return (
    <View style={styles.container}>
      <View
        style={{
          display: "flex",
          flexDirection: "row",
          alignItems: "flex-start",
          justifyContent: "flex-start",
          textAlign: "center",
          paddingLeft: 20,
        }}
      >
        <TouchableOpacity
          onPress={() => navigation.navigate("Profile", autorId)}
        >
          <Image
            style={{
              width: 80,
              height: 80,
              borderRadius: 100,
              borderWidth: 1,
              borderColor: "#FFF",
            }}
            source={image}
          />
        </TouchableOpacity>

        <View
          style={{
            display: "flex",
            flexDirection: "column",
            alignItems: "flex-start",
            justifyContent: "space-around",
            marginHorizontal: 15,
            width: "65%",
          }}
        >
          <Text style={styles.title}>{title}</Text>

          <View
            style={{
              display: "flex",
              flexDirection: "row",
              alignItems: "center",
              justifyContent: "space-around",
            }}
          >
            <Text style={styles.text}>Rating: </Text>
            <Octicons name="star" size={24} color="white" />
            <Text style={styles.rating}>{rating}</Text>
          </View>
          <Image />
          <Text style={styles.text}>Contrataciones: {bookings}</Text>
          <View style={{ alignSelf: "flex-end" }}>
            <TouchableOpacity title="detalles" onPress={() => showDetails()}>
              <Text style={styles.button}>Detalles</Text>
            </TouchableOpacity>
          </View>
        </View>
      </View>
      {detailsView ? (
        <View style={styles.details}>
          <Text
            style={{
              justifyContent: "center",
              margin: 15,
              overflow: "hidden",
              color: "white",
              fontStyle: "italic",
              fontSize: 16,
            }}
          >
            {description}
          </Text>

          <View style={styles.detailsReviews}>
            <ScrollView
              horizontal={true}
              showsHorizontalScrollIndicator={false}
            >
              {reviews ? (
                reviews.map((i) => {
                  return (
                    <ReviewCard
                      id={i.id}
                      key={i.id}
                      rating={i.rate}
                      message={i.message}
                      from={i.from_id}
                    />
                  );
                })
              ) : (
                <Text style={styles.text}>El usuario aún no posee reviews</Text>
              )}
            </ScrollView>
          </View>
        </View>
      ) : null}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    display: "flex",
    backgroundColor: "#00d2c6",
    minHeight: 200,

    justifyContent: "center",
    alignItems: "flex-start",
    minWidth: 300,
    marginVertical: 10,
    marginHorizontal: 15,
    padding: 10,
  },
  title: {
    fontSize: 14,
    fontWeight: "bold",
    color: "white",
    textTransform: "uppercase",
  },
  text: {
    color: "white",
    fontSize: 16,
  },
  rating: {
    fontSize: 1.2,
    color: "gold",
    fontWeight: "bold",
    textShadowColor: "#FFF",
    textShadowOffset: { width: 1, height: 1 },
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
  details: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    textAlign: "center",
  },
  detailsReviews: {
    display: "flex",
    flexDirection: "row",
    alignContent: "center",
    justifyContent: "center",
  },
});
