import React from "react";
import { StyleSheet, View, Text } from "react-native";
import LottieView from "lottie-react-native";
import { SafeAreaView } from "react-native-safe-area-context";

export default function PetLover() {
  return (
    <SafeAreaView style={styles.container}>
      <LottieView
        source={require("../../assets/LottieJsons/24278-pet-lovers.json")}
        style={styles.animation}
        autoPlay
      />
    </SafeAreaView>
  );
}
const styles = StyleSheet.create({
  animation: {
      flexDirection: "column",
    width: "100%",
    height: 300,
    alignSelf: "center",
    position: "absolute",
    bottom: "1%",
},
container: {
      backgroundColor: '#f9f9f9',
      flex: 1,
      
  }
});