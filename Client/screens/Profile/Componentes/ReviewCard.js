import { Text, View, StyleSheet, Image } from "react-native";
import React from "react";

import { Octicons } from "@expo/vector-icons";

export default function ReviewCard({ id, titulo, rating, usuario, message }) {
  return (
    <View style={styles.reviewContainer}>
      <Text style={styles.reviewTitle}>
        {titulo ? titulo : "Review sin titulo"}
      </Text>
      <View
        style={{
          display: "flex",
          flexDirection: "row",
          textAlign: "center",
          alignItems: "center",
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
    backgroundColor: "#00d2c6",
    borderRadius: 10,
    justifyContent: "center",
    alignItems: "center",
    padding: 10,
  },
  reviewTitle: {
    fontWeight: "bold",
    color: "white",
    marginBottom: 2,
  },
  reviewRating: {
    fontWeight: "bold",
    fontSize: 14,
    margin: 0,
    color: "white",
  },
  reviewUsuario: {
    color: "white",
  },
  message: {
    fontSize: 14,
    overflow: "scroll",
    color: "white",
    marginHorizontal: 15,
  },
});
