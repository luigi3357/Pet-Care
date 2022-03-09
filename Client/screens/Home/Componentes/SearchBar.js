import { Ionicons } from "@expo/vector-icons";
import { useNavigation } from "@react-navigation/native";
import { AspectRatio, Icon } from "native-base";
import React, { useEffect, useState } from "react";
import {
  Alert,
  StyleSheet,
  TextInput,
  TouchableOpacity,
  View
} from "react-native";
import { useSelector, useDispatch } from 'react-redux';
import { searchKeyword } from "../../../Store/Actions";

export default function SearchBar() {
  const navigation = useNavigation();
  const dispatch = useDispatch();
  const [value, setValue] = useState("");
  const [error, setError] = useState("");
  const filtered_posts = useSelector(state=>state.filtered_posts)

  function errorAlert(message) {
    Alert.alert("Error", message, [
      { text: "OK", onPress: () => navigation.navigate("HomeScreen") },
    ]);
  }

  function validateSearch(value) {
    if (value.length < 1) {
      setError("Ingresa una keyword en la búsqueda");
    } else if (!/[A-Za-z ]/.test(value)) {
      setError("Solo letras o espacios");
      //console.log(error)
    } else if (value.length > 30) {
      setError("Máximo 30 caracteres");
      //console.log(error)
    } else {
      setError("");
    }
    setValue(value);
  }

  useEffect(() => {
    validateSearch(value);
  }, [value]);
  useEffect(() => {
    //console.log(filtered_posts);
  }, [filtered_posts]);


  function submitSearch() {
    validateSearch(value);
    if (error) {
      errorAlert(error);
      setValue("");
    }else{
      dispatch(searchKeyword(value))
    }
    console.log(value);
  }

  return (
    <View style={{ marginTop: 10 }}>
      <AspectRatio ratio={3 / 1}>
        <View style={styles.container}>
          <View style={styles.searchContainer}>
            <View style={styles.searchIcon}>
              <TouchableOpacity
                style={styles.searchIcon}
                onPress={submitSearch}
              >
                <Icon
                  ml="2"
                  size="7"
                  color="#000000"
                  as={<Ionicons name="ios-search" />}
                />
              </TouchableOpacity>
            </View>
            <TextInput
              style={styles.textInput}
              onChangeText={(text) => {
                setValue(text);
              }}
              value={value}
            />
          </View>
        </View>
      </AspectRatio>
    </View>
  );
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    width: "100%",
    height: "100%",
    alignItems: "center",
    backgroundColor: "orange",
    justifyContent: "center",
  },
  searchContainer: {
    alignItems: "center",
    justifyContent: "flex-start",
    height: "124%",
    backgroundColor: "#00D2C6", //red search
    width: "100%",
    flexDirection: "row",
    marginLeft: 15,
  },
  searchIcon: {
    backgroundColor: "white",
    height: "40%",
    width: "30%",
    justifyContent: "center",
    alignItems: "center",
    borderTopLeftRadius: 8,
    borderBottomLeftRadius: 8,
  },
  textInput: {
    width: "100%",
    height: "40%",
    backgroundColor: "white",
    borderWidth: 6,
    borderColor: "white",
    borderTopRightRadius: 8,
    borderBottomRightRadius: 8,
  },
});
