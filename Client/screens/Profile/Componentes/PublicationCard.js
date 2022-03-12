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
    borderRadius: 10,
    justifyContent: "center",
    alignItems: "center",
    minWidth: 300,
    marginVertical: 2,
    marginHorizontal: 15,
    padding: 10,
  },
  title: {
    marginTop: 10,
    marginBottom: 10,
    marginHorizontal: 5,
    fontSize: 20,
    fontWeight: "bold",
    textAlign: "center",
  },
  description: {
    fontSize: 16,
    textAlign: "center",
    marginBottom: 10,
    marginHorizontal: 5,
  },
});
