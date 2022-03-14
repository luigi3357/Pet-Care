import { NativeBaseProvider } from "native-base";
import React from "react";
import { StyleSheet, View } from "react-native";
import Filtrado from "./FilterButton";
import SearchBar2 from "./filterPanel/searchBar";
import OverlayComponent from "./filterPanel/FilterMenu";
// import PostCard from './PostCard';

export default function Navbar() {
  return (
    <NativeBaseProvider>
      <View style={styles.container}>
        <View style={styles.searchBar}>
          <SearchBar2 />
        </View>
        <View style={styles.over}>
          <OverlayComponent/>
        </View>
          {/* <Filtrado /> */}
      </View>
    </NativeBaseProvider>
  );
}
const styles = StyleSheet.create({
  container: {
    backgroundColor: "#00d2c6", //Green
    flex: 1,
    flexDirection: "row",
    justifyContent: "center",
  },
  searchBar: {
    flex:1,
  },
  over: {
    flex:0.2,
    justifyContent: "center"
  }
});
