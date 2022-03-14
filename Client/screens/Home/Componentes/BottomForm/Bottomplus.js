import { AntDesign, FontAwesome } from "@expo/vector-icons";
import { useNavigation } from "@react-navigation/native";
import { Icon, NativeBaseProvider } from "native-base";
import React from "react";
import { StyleSheet, TouchableOpacity, View } from "react-native";

export default function Button() {
  const navigation = useNavigation();
  return (
    <NativeBaseProvider>
      <View style={styles.viewBody}>
        <TouchableOpacity
          onPress={
            () => navigation.navigate("SelectPublic") //SelectPublic
            // console.log('boton crear')
          }
        >
          <AntDesign
            style={styles.btnContainer}
            name="pluscircle"
            size={24}
            color="black"
          />
        </TouchableOpacity>
      </View>
    </NativeBaseProvider>
  );
}

const styles = StyleSheet.create({
  viewBody: {
    flex: 1,
  },
  btnContainer: {
    position: "absolute",
    bottom: 50,
    right: 100,
  },
  btnContainer2: {
    position: "absolute",
    bottom: 45,
    right: -1.2,
  },
});
