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
<<<<<<< HEAD
import Payment from "./screens/Payment/Payment";
import DetailsPage from "./screens/Home/Componentes/DetailsPage";
=======
import Payment from "./screens/Payment/PaymentMercadoPago";
>>>>>>> 77598d2d7b35248c2f80ce4b2373e57269daa2ba
import Store from "./Store";
import { SafeAreaProvider, SafeAreaView } from "react-native-safe-area-context";
import * as Linking from "expo-linking";
import Review from "./screens/Review/Review";
import { SelectPublic } from "./screens/Home/Componentes/BottomForm/SelectPublic";
import ServicioForm from "./screens/Home/Componentes/BottomForm/ServicioForm";
import Maps from "./screens/Maps/Maps";

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
      {/* <Stack.Screen name="LandingPage" component={LandingPage} /> */}
      {/* <Stack.Screen name="Login" component={Login} />
      <Stack.Screen name="Register" component={Register} />
      <Stack.Screen name="NewPassword" component={NewPassword} />
      <Stack.Screen name="MailCode" component={MailCode} />
      
      <Stack.Screen name="ForgetPassword" component={ForgetPassword} /> */}
      {/* <Stack.Screen name="Payment" component={Payment} />  */}
      <Stack.Screen name="HomeScreen" component={HomeScreen} />
      <Stack.Screen name="Review" component={Review} />
      <Stack.Screen name="SelectPublic" component={SelectPublic} />
      <Stack.Screen name="Form" component={FormCard} />
      <Stack.Screen name="ServicioForm" component={ServicioForm} />
<<<<<<< HEAD
      <Stack.Screen name="Payment" component={Payment} /> 
      <Stack.Screen name="DetailsPage" component={DetailsPage} />
=======
>>>>>>> 77598d2d7b35248c2f80ce4b2373e57269daa2ba
      <Stack.Screen name="Profile" component={Profile} />
      <Stack.Screen name="Maps" component={Maps}/>
     
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
