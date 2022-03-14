import React from "react";
import { StyleSheet, Text, View } from "react-native";

export default function PublicationCard({ id, date, title, description }) {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>{title}</Text>
      <Text style={styles.description}>{description}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    display: "flex",
    backgroundColor: "#00d2c6",
    borderBottomRightRadius: 100,
    borderTopLeftRadius: 100,
    justifyContent: "center",
    alignItems: "center",
    paddingBottom: 30,
    paddingTop: 30,
    paddingHorizontal: 10,
    marginTop: 10,
  },
  title: {
    marginTop: 10,
    marginBottom: 10,
    marginHorizontal: 5,
    fontSize: 20,
    fontWeight: "bold",
    textAlign: "center",
    color: "white",
  },
  description: {
    fontSize: 16,
    textAlign: "center",
    marginBottom: 10,
    marginHorizontal: 5,
    color: "white",
  },
});
