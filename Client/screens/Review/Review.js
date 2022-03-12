import React, { useEffect, useState } from "react";
import { useNavigation } from "@react-navigation/native";
import {
  View,
  StyleSheet,
  Text,
  TouchableOpacity,
  Icon,
  Button,
  Alert,
} from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { FontAwesome5 } from "@expo/vector-icons";
import { NativeBaseProvider } from "native-base";
import { Rating, AirbnbRating } from "react-native-ratings";
import { TextInput } from "react-native-gesture-handler";

export default function Review() {
  const titles = [
    "Nunca más",
    "No lo recomiendo",
    "Regular",
    "Bueno",
    "Excelente",
  ];
  const navigation = useNavigation();
  const [form, setForm] = useState({ rate: 3, title: "Regular", message: "" });
  function rated(rating) {
    setForm({ ...form, rate: rating, title: titles[rating - 1] });
  }
  function submitHandler() {
    Alert.alert("Enviado", 'Evaluacion enviada correctamente')
  }
  useEffect(() => {

    console.log(form);
  }, [form]);

  return (
    <SafeAreaView style={styles.container}>
      <View
        style={{
          flex: 0.3,
          justifyContent: "center",
          backgroundColor: "#f9f9f9",
          marginTop:"40%",
          marginBottom:"5%"
        }}
      >
        <AirbnbRating
          count={5}
          reviews={[
            "Nunca más",
            "No lo recomiendo",
            "Regular",
            "Bueno",
            "Excelente",
          ]}
          defaultRating={3}
          size={25}
          onFinishRating={(e) => rated(e)}
          reviewColor={"#00d2c6"}
        />
      </View>

      <View style={{ flex: 1 }}>
        <TextInput
          style={styles.input}
          placeholder={"Dejanos tu opinion"}
          multiline={true}
          numberOfLines={5}
          maxLength={120}
          onChangeText={(text) => setForm({ ...form, message: text })}
          value={form.message}
        />
        <Text style={styles.count}>{form.message.length}/120</Text>

        <View style={styles.btnInput}>
          <Button title="Enviar" color={"#00d2c6"} onPress={submitHandler}>
            Enviar
          </Button>
        </View>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    //backgroundColor: "red",
    backgroundColor: "#f9f9f9",
    paddingHorizontal: 5,
    paddingBottom: 5,
    alignContent: "center",
    justifyContent: "center",
  },
  input: {
    borderWidth: 1,
    width: "80%",
    alignSelf: "center",
    borderRadius: 10,
    borderColor: "#C4C4C4",
    padding: 10,
    textAlignVertical: "top",
  },
  btnInput: {
      marginTop: 25,
      width: "30%",
      alignSelf: "center",
  },
  count: {
    //   backgroundColor:"red",
      fontSize: 10,
      width: "12%",
      alignSelf: "flex-end",
      marginEnd: 40,
      textAlign:"right"
  }
});
