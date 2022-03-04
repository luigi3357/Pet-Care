import React from "react";
import Login from "./screens/Login/Login";
import Register from "./screens/Login/Register";
import LandingPage from "./screens/LandingPage/LandingPage";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import MailCode from "./screens/Login/MailCode"
import ForgetPassword from "./screens/Login/ForgetPassword"
import NewPassword from "./screens/Login/NewPassword"
import { Provider } from "react-redux";
import { store } from "./redux/store";

const Stack = createStackNavigator();

function App() {
  return (
    <Stack.Navigator screenOptions={{ headerShown: false }}>
      <Stack.Screen name="LandingPage" component={LandingPage} />
      <Stack.Screen name="Login" component={Login} />
      <Stack.Screen name="MailCode" component={MailCode} />
      <Stack.Screen name="ForgetPassword" component={ForgetPassword} />
      <Stack.Screen name="Register" component={Register} />
      <Stack.Screen name="NewPassword" component={NewPassword} />
    </Stack.Navigator>
  );
}

export default () => {
  return (
    <Provider store={store}>
    <NavigationContainer>
      <App />
    </NavigationContainer>
    </Provider>
  );
};
