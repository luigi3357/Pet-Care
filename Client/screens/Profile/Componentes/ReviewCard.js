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
          alignItems: "center",
        }}
      >
        <View
          style={{
            display: "flex",
            flexDirection: "column",
            alignItems: "flex-end",
          }}
        >
          <Octicons name="star" size={24} color="black" />
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
    minWidth: 300,
    marginVertical: 2,
    marginHorizontal: 15,
    padding: 10,
  },

  reviewTitle: {
    // fontFamily : "Courier New",
    fontWeight: "bold",
    marginTop: 1,
  },
  reviewRating: {
    fontWeight: "bold",
    fontSize: 14,
    margin: 0,
  },
  reviewUsuario: {
    fontWeight: "300",
    // ,fontFamily : "Helvetica"
    color: "#00F",
    margin: 0,
  },
  message: {
    fontSize: 10,
    // borderTopColor : "#0F0",
    // borderTopWidth : 4,
    overflow: "scroll",
    // ,maxWidth : 60
    // ,fontFamily : 'Times New Roman'
    marginHorizontal: 15,
  },
});
