import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import React, { useEffect, useState } from "react";
import { Provider } from "react-redux";
import FormCard from "./screens/Home/Componentes/BottomForm/Form";
import HomeScreen from "./screens/Home/Componentes/HomeScreen";
import LandingPage from "./screens/LandingPage/LandingPage";
import ForgetPassword from "./screens/Login/ForgetPassword";
import Login from "./screens/Login/Login";
import MailCode from "./screens/Login/MailCode";
import NewPassword from "./screens/Login/NewPassword";
import Register from "./screens/Login/Register";
import Profile from "./screens/Profile/Profile";
import Payment from "./screens/Payment/Payment";
import Store from "./Store";
import { SafeAreaProvider, SafeAreaView } from "react-native-safe-area-context";
import * as Linking from "expo-linking";
import Review from "./screens/Review/Review";

const Stack = createStackNavigator();

function App() {
  //   const [data, setData] = useState(null);

  //   function handleDeepLink(e){
  //     let data = Linking.parse(e.url);
  //     setData(data);
  //   }

  // useEffect(()=>{
  //   Linking.addEventListener('url', handleDeepLink);
  //   return(()=>{
  //     Linking.removeEventListener('url');
  //   })
  // }, []);

  return (
    <Stack.Navigator screenOptions={{ headerShown: false }}>
      {/* <Stack.Screen name="LandingPage" component={LandingPage} />
      <Stack.Screen name="Login" component={Login} />
      <Stack.Screen name="MailCode" component={MailCode} />
      <Stack.Screen name="ForgetPassword" component={ForgetPassword} />
      <Stack.Screen name="Register" component={Register} />
    <Stack.Screen name="NewPassword" component={NewPassword} /> */}
    <Stack.Screen name="HomeScreen" component={HomeScreen} />
      <Stack.Screen name="Review" component={Review} />
      <Stack.Screen name="Form" component={FormCard} />
      <Stack.Screen name="Payment" component={Payment} />
      <Stack.Screen name="Profile" component={Profile} />
    </Stack.Navigator>
  );
}

export default () => {
  return (
    <Provider store={Store}>
      <SafeAreaProvider>
        <NavigationContainer>
          <App />
        </NavigationContainer>
      </SafeAreaProvider>
    </Provider>
  );
};
