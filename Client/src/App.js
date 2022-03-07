import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import React from "react";
import { Provider } from "react-redux";
import Store from "./Store";
import HomeScreen from "./screens/Home/Componentes/HomeScreen";
import LandingPage from "./screens/LandingPage/LandingPage";
import ForgetPassword from "./screens/Login/ForgetPassword";
import Login from "./screens/Login/Login";
import MailCode from "./screens/Login/MailCode";
import NewPassword from "./screens/Login/NewPassword";
import Register from "./screens/Login/Register";







const Stack = createStackNavigator();

function App() {
  return (
   
    <Stack.Navigator screenOptions={{ headerShown: false }}>
      <Stack.Screen name="LandingPage" component={LandingPage} />
      <Stack.Screen name="Login" component={Login} />
      <Stack.Screen name="MailCode" component={MailCode} />
      <Stack.Screen name="ForgetPassword" component={ForgetPassword} />
      <Stack.Screen name="Register" component={Register} />
      <Stack.Screen name="NewPassword" component={NewPassword}/>
      <Stack.Screen name="HomeScreen" component={HomeScreen}/>
    </Stack.Navigator>

  );
  }

export default () => {
  return (
    <Provider store={Store}>
    <NavigationContainer>
      <App />
    </NavigationContainer>
    </Provider>
  );
};
