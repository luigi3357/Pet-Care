import { Text, View, StyleSheet, Image } from "react-native";
import React from "react";
import { Octicons } from "@expo/vector-icons";

export default function ReviewCard({ id, titulo, rating, usuario, message }) {
  return (
    <View style={styles.reviewContainer}>
      <Text style={styles.reviewTitle}>{titulo}</Text>
      <View
        style={{
          display: "flex",
          flexDirection: "row",
          textAlign: "center",
          justifyContent: "space-evenly",
        }}
      >
        <View
          style={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
          }}
        >
          <Octicons name="star" size={24} color="white" />
          <Text style={styles.reviewRating}>{rating}</Text>
        </View>
        <Text style={styles.reviewUsuario}>{usuario}</Text>
        <Text style={styles.message}>{message}</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  reviewContainer: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#7C169E",
    borderRadius: 3,
    width: 300,
    height: 80,
    marginHorizontal: 10,
    padding: 5,
  },

  reviewTitle: {
    fontWeight: "bold",
    marginTop: 1,
  },
  reviewRating: {
    fontWeight: "bold",
    fontSize: 14,
    color: "white",
  },
  reviewUsuario: {
    fontWeight: "300",
  },
  message: {
    fontSize: 13,
    color: "white",
    overflow: "scroll",
    width: 200,
    marginLeft: 10,
  },
});
