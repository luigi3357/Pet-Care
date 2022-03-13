import { NativeBaseProvider } from "native-base";
import React from "react";
import { StyleSheet, View } from "react-native";
import Filtrado from "./FilterButton";
import SearchBar from "./SearchBar";
// import PostCard from './PostCard';

export default function Navbar() {
  return (
    <NativeBaseProvider>
      <View style={styles.container}>
        <View style={{ flex: 1, marginTop: 10 }}>
          <SearchBar />
        </View>
        <View style={{ flex: 1 }}>
          <Filtrado />
        </View>
      </View>
    </NativeBaseProvider>
  );
}
const styles = StyleSheet.create({
  container: {
    backgroundColor: "#00d2c6", //Green
    flex: 1,
    flexDirection: "row",
    alignItems: "center",
  },
});
