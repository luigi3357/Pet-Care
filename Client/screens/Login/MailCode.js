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
import { FontAwesome5 } from "@expo/vector-icons";
import { useDispatch, useSelector } from "react-redux";
import { getLogin, resetPassword } from "../../Store/Actions/index";
import { Header } from "react-native-elements";

function MailCode() {
  const navigation = useNavigation();
  const user = useSelector((state) => state.login);
  const [token, setToken] = useState("");
  const [loading, setLoading] = useState(false);
  const [visible, setVisible] = useState(100);
  const dispatch = useDispatch();

  function errorAlert() {
    return Alert.alert("ERROR", "El codigo ingresado es incorrecto", [
      { text: "OK", onPress: () => setToken('') },
    ]);
  }

  useEffect(() => {
    dispatch(getLogin(user.email));
    dispatch(getLogin(emailL.email));
  }, [dispatch]);
  const emailL = useSelector((state) => state.login);
  console.log(emailL.email, "gagagagaga");

  function handlesubmit() {
    if (token.length) {
      setLoading(true);
      setVisible(0);
      dispatch(getLogin(user.email));

      const tokenVerify = user.token;

      if (tokenVerify === token) {
        setLoading(false);
        setVisible(100);
        navigation.navigate("NewPassword");
      } else {
        setLoading(false);
        setVisible(100);
        errorAlert();
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
          <Text style={styles.HeaderTitle}>VALIDAR CÓDIGO ÚNICO</Text>
        }
      />
      <View opacity={visible}>
        {/* <View style={{ position: "relative", top: 30 }}>
          <TouchableOpacity onPress={() => navigation.goBack()}>
            <Icon as={<FontAwesome5 name="angle-left" />} size="sm" m={2} />
          </TouchableOpacity>
        </View> */}
        <View style={styles.move}>
          <Text style={styles.text}>Ingresá el código enviado a tu email</Text>
          <Input
            InputLeftElement={
              <Icon
                as={<FontAwesome5 name="envelope" />}
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
            placeholder="Ingrese el codigo"
            onChangeText={setToken}
            value={token}
          />
        </View>
        <View style={styles.buttonStyle}>
          <Button style={styles.buttonDesing} onPress={handlesubmit}>
            Confirmar
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
      <MailCode />
    </NativeBaseProvider>
  );
};
