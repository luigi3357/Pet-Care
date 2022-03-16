import React, { useEffect, useState } from "react";
import {
  View,
  StyleSheet,
  Text,
  Alert,
  ActivityIndicator,
  TouchableOpacity,
} from "react-native";
import { NativeBaseProvider, Button, Icon, Input } from "native-base";
import { useNavigation } from "@react-navigation/native";
import InputsLogin from "./Componentes/InpuntsLogin";
import { FontAwesome5 } from "@expo/vector-icons";
import { forgotPassword, getLogin, getUser } from "../../Store/Actions";
import { useDispatch, useSelector } from "react-redux";
import { Header } from "react-native-elements";

function ForgetPassword() {
  const navigation = useNavigation();
  const [email, onChangeEmail] = useState("");
  const data = { email: email };
  const dispatch = useDispatch();
  const [loading, setLoading] = useState(false);
  const [visible, setVisible] = useState(100);

  function notexistsEmail() {
    return Alert.alert("ERROR", "El email ingresado es incorrecto", [
      { text: "OK", onPress: () => onChangeEmail("") },
    ]);
  }

  useEffect(() => {
    dispatch(getUser());
  }, [dispatch]);

  const user = useSelector((state) => state.users);

  function handlesubmit() {
    if (email.length) {
      setLoading(true);
      setVisible(0);
      const verifyEmail = user.filter((e) => e.email === email);
      console.log(verifyEmail, "xdxdxd");
      if (!verifyEmail.length) {
        setTimeout(() => {
          setLoading(false);
          setVisible(100);
          notexistsEmail();
        }, 2000);
      } else {
        dispatch(forgotPassword(data));
        dispatch(getLogin(email));
        setTimeout(() => {
          setLoading(false);
          setVisible(100);
          navigation.navigate("MailCode");
        }, 2000);
      }
    }
  }

  return (
    <View style={styles.container}>
      <Header
        backgroundColor="#00d2c6"
        placement="left"
        leftComponent={
          <TouchableOpacity onPress={() => navigation.goBack()}>
            <Icon as={<FontAwesome5 name="angle-left" />} size="sm" m={2} />
          </TouchableOpacity>
        }
        centerContainerStyle={{ justifyContent: "center" }}
        centerComponent={
          <Text style={styles.HeaderTitle}>RECUPERAR CONTRASEÑA</Text>
        }
      />

      <View opacity={visible}>
        {/* <View style={{ position: "relative", top: 30 }}>
          <TouchableOpacity onPress={() => navigation.goBack()}>
            <Icon as={<FontAwesome5 name="angle-left" />} size="sm" m={2} />
          </TouchableOpacity>
        </View> */}
        <View style={styles.move}>
          <Text style={styles.text}>Ingresá el email de tu cuenta</Text>
          <Input
            type="text"
            value={email}
            InputLeftElement={
              <Icon
                as={<FontAwesome5 name="user" />}
                size="sm"
                m={2}
                _ligth={{
                  color: "black",
                }}
                _dark={{
                  color: "white",
                }}
              />
            }
            onChangeText={onChangeEmail}
            placeholder="Email"
          />
        </View>
        <View style={styles.buttonStyle}>
          <Button style={styles.buttonDesing} onPress={() => handlesubmit()}>
            Enviar
          </Button>
        </View>
      </View>
      <View style={styles.loading}>
        <ActivityIndicator size="large" color="#00d2c6" animating={loading} />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#f9f9f9",
  },
  move: {
    marginTop: 100,
    marginHorizontal: 20,
  },
  text: {
    fontSize: 14,
    marginBottom: 10,
  },
  buttonStyle: {
    marginRight: 15,
    marginLeft: 15,
    marginTop: 30,
    width: 100,
    alignSelf: "center",
  },
  buttonDesing: {
    backgroundColor: "#00d2c6",
  },
  loading: {
    flex:1,
    position: "absolute",
    top: "50%",
    alignSelf: "center",
  },
  HeaderTitle: {
    fontSize: 16,
    fontWeight: "bold",
    width: 200,
  },
});

export default () => {
  return (
    <NativeBaseProvider>
      <ForgetPassword />
    </NativeBaseProvider>
  );
};
