import { FontAwesome5, MaterialIcons } from "@expo/vector-icons";
import { useNavigation } from "@react-navigation/native";
import { Button, Icon, Image, Input, NativeBaseProvider } from "native-base";
import React, { useEffect, useState } from "react";
import { Alert, StyleSheet, Text, TouchableOpacity, View } from "react-native";
import { useDispatch, useSelector } from "react-redux";
import { getUser, registerBack, getLogin } from "../../Store/Actions/index";

const Register = () => {
  const dispatch = useDispatch();
  const [email, onChangeEmail] = useState("");
  const [password, onChangePassword] = useState("");
  const [repeatPassword, onChangeRepeat] = useState("");
  const [name, onChangeName] = useState("");
  const [last_name, onChangeLastName] = useState("");
  const data = {
    email: email,
    password: password,
    name: name,
    last_name: last_name,
  };
  const navigation = useNavigation();
  const [show, setShow] = useState(false);
  const [showrepeat, setShowrepeat] = useState(false);

  function existsAlert() {
    Alert.alert("Error", "El email ya tiene una cuenta creada", [
      { text: "Ok", onPress: () => navigation.navigate("Login") },
    ]);
  }

  function log() {
    dispatch(getUser());
    navigation.navigate("Login");
  }

  function registerLog() {
    dispatch(getLogin(email));

    console.log("soy el email register", email);
    Alert.alert("Registrado", "Registro exitoso", [
      {
        text: "Logearse",
        onPress: () => {
          log();
        },
      },
    ]);
  }
  function errorPassword() {
    Alert.alert("Error", "Las contraseñas no coinciden.", [
      { text: "Volver", onPress: () => navigation.navigate("Register") },
    ]);
  }
  function existsAlert() {
    Alert.alert("Error", "El email ya tiene una cuenta creada", [
      { text: "Ok", onPress: () => navigation.navigate("Login") },
    ]);
  }

  function minPassword() {
    Alert.alert("Error", "La contraseña debe tener como minimo 8 caracteres.", [
      { text: "Volver", onPress: () => navigation.navigate("Register") },
    ]);
  }

  useEffect(() => {
    dispatch(getUser());
  }, [dispatch]);

  const user = useSelector((state) => state.users);

  function handlesubmit(e) {
    const verifyEmail = user.filter((e) => e.email === email);
    if (
      email.length &&
      name.length &&
      last_name.length &&
      password.length &&
      repeatPassword.length
    ) {
      if (verifyEmail.length) {
        existsAlert();
      } else {
        if (password !== repeatPassword) {
          errorPassword();
        } else if (password.length < 8) {
          minPassword();
        } else {
          dispatch(registerBack(data));
          registerLog();
        }
      }
    }
  }

  return (
    <View style={styles.container}>
      <View style={styles.logoPos}>
        <TouchableOpacity onPress={() => navigation.navigate("Login")}>
          <Icon as={<FontAwesome5 name="angle-left" />} size="sm" m={2} />
        </TouchableOpacity>
        <View style={{ marginLeft: 100 }}>
          <Image
            source={require("../../assets/slides/img1.png")}
            style={styles.tinylogo}
            alt="image"
          />
        </View>
      </View>
      <View style={styles.middle}>
        <Text style={styles.loginText}>Registrate</Text>
      </View>
      <View style={{ alignItems: "center" }}>
        <Input
          style={{ marginTop: 10 }}
          width={"5/6"}
          type="text"
          onChangeText={onChangeName}
          placeholder="Nombre"
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
        />
        <Input
          style={{ marginTop: 10 }}
          width={"5/6"}
          type="text"
          onChangeText={onChangeLastName}
          placeholder="Apellido"
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
        />
        <Input
          style={{ marginTop: 10 }}
          width={"5/6"}
          type="text"
          onChangeText={onChangeEmail}
          placeholder="Email"
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
        />
        <View>
          <Input
            style={{ marginTop: 10 }}
            width={"5/6"}
            onChangeText={onChangePassword}
            placeholder="Contraseña"
            type={show ? "text" : "password"}
            InputRightElement={
              <Icon
                as={
                  <MaterialIcons
                    name={show ? "visibility" : "visibility-off"}
                  />
                }
                size={5}
                mr="2"
                color="muted.400"
                onPress={() => setShow(!show)}
              />
            }
            InputLeftElement={
              <Icon
                as={<FontAwesome5 name="key" />}
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
          />
        </View>
        <Input
          style={{ marginTop: 50 }}
          width={"5/6"}
          onChangeText={onChangeRepeat}
          placeholder="Contraseña"
          type={showrepeat ? "text" : "password"}
          InputRightElement={
            <Icon
              as={
                <MaterialIcons
                  name={showrepeat ? "visibility" : "visibility-off"}
                />
              }
              size={5}
              mr="2"
              color="muted.400"
              onPress={() => setShowrepeat(!showrepeat)}
            />
          }
          InputLeftElement={
            <Icon
              as={<FontAwesome5 name="key" />}
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
        />
      </View>
      <View style={styles.buttonStyle}>
        <Button onPress={handlesubmit} style={styles.buttonDesing}>
          REGISTRATE
        </Button>
      </View>
      <View style={styles.text2}>
        <Text>Ya tienes cuenta?</Text>
        <TouchableOpacity onPress={() => navigation.navigate("Login")}>
          <Text style={styles.singupText}>INICIA SESION</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default () => {
  return (
    <NativeBaseProvider>
      <Register />
    </NativeBaseProvider>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
  },

  loginText: {
    fontSize: 30,
    fontWeight: "bold",
  },
  middle: {
    alignItems: "center",
    marginTop: 50,
  },
  text2: {
    paddingTop: 10,
    alignItems: "center",
  },
  singupText: {
    fontWeight: "bold",
    paddingTop: 5,
  },
  emailInput: {
    marginTop: 10,
    marginRight: 5,
  },
  buttonStyle: {
    marginRight: 15,
    marginLeft: 15,
    marginTop: 30,
  },
  buttonStyleX: {
    marginTop: 12,
    marginRight: 15,
    marginLeft: 15,
  },
  buttonDesing: {
    backgroundColor: "#00d2c6",
  },
  lineStyle: {
    flexDirection: "row",
    marginTop: 30,
    marginLeft: 15,
    marginRight: 15,
    alignItems: "center",
  },
  lineStyle: {
    flexDirection: "row",
    marginTop: 30,
    marginLeft: 15,
    marginRight: 15,
    justifyContent: "space-around",
  },
  logo: {
    width: 100,
    height: 100,
    resizeMode: "contain",
    marginLeft: 100,
  },
  tinylogo: {
    width: 100,
    height: 100,
  },
  boxStyle: {
    flexDirection: "row",
  },
  logoPos: {
    flexDirection: "row",
    marginTop: 50,
  },
  back: {
    marginTop: 50,
  },
});
