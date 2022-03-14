import * as Linking from "expo-linking";
import React, { useEffect, useState } from "react";
import {
  ImageBackground,
  KeyboardAvoidingView,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from "react-native";
import { useDispatch, useSelector } from "react-redux";
import { postPayment } from "../../Store/Actions/index.js";
import bgCard from "../../assets/bgCard.jpeg";

export default function Payment(navigation) {
  const dispatch = useDispatch();

  const [carer, onChangeCarer] = useState("");
  const [amount, onChangeAmount] = useState("");

  const data = { carer: carer, amount: amount };

  const checkout_link = useSelector((state) => state.checkout_link);

  function handlePayment(e) {
    console.log(data, "handlePayment");
    dispatch(postPayment(data));
  }

  useEffect(() => {
    if (checkout_link) {
      Linking.openURL(checkout_link);
    }
  }, [checkout_link]);

  
  return (
    <ImageBackground source={bgCard} style={[styles.bgCard, styles.container]}>
    <KeyboardAvoidingView behavior="position" keyboardVerticalOffset={20}>
        
        <Text style={{
          justifyContent: "center",
          margin: 10,
          overflow: "hidden",
          color: "white",
          fontStyle: "italic",
          fontSize: 16,
          fontWeight: "bold",
          backgroundColor: "#005e50",
          padding: 10,
          borderRadius: 10,
        }} >DETALLE DE PAGO</Text>

        <Text  style={styles.title} >CUIDADOR:</Text>

        <TextInput
            type = "text"
            name = "carer"
            style = {styles.input}
            placeholder = "Nombre de cuidador..."
            value = {carer}
            onChangeText = {(value) => onChangeCarer(value)}
        />
        <Text>{carer}</Text>

        <Text style={styles.title} >MONTO:</Text>

        <TextInput
            type = "text" 
            keyboardType = "numeric" 
            name = "amount"
            style = {styles.input}
            placeholder = "Valor del servicio..."
            value = {amount}
            onChangeText = {(value) => onChangeAmount(value)} />
        <Text>${amount}</Text>   
        
        <TouchableOpacity type = "submit" title="payment" onPress={handlePayment}>  
            <Text style={styles.button}>Ir a pagar</Text> 
        </TouchableOpacity>  

    </KeyboardAvoidingView>
    </ImageBackground>
)
}

const styles = StyleSheet.create({
container: {
  display: "flex",
  backgroundColor: "#00d2c6",
  borderRadius: 10,
  borderWidth: 2,
  borderColor: "#CCC",
  justifyContent: "center",
  alignItems: "center",
  padding: 15,
  minWidth: 97,
  margin: 0,
  // ,zIndex : 4
},
title: {
  fontSize: 12,
  fontFamily : "Helvetica",
  fontWeight: "700",
},
button: {
  backgroundColor: "#7C169E",
  marginTop: 1,
  color: "#FFF",
  display: "flex",
  alignSelf: "flex-end",
  alignItems: "center",
  padding: 11,
  borderRadius: 10,
  fontWeight: "bold",
  overflow: "hidden",
  borderBottomStartRadius: 30
},
detailsReviews: {
  display: "flex",
  flexDirection: "row",
  //   ,width : 100
  //   ,marginLeft : '2px solid green'
},
input: {
    borderWidth: 1,
    borderColor: "white",
    color: "grey",
    padding: 8,
    margin: 10,
    width: 200,
    borderRadius: 10,
    backgroundColor: "white"
},
bgCard: {
  flex: 1,
  justifyContent: "center",
  resizeMode: "contain",
},
text: {
  color: "white",
  fontSize: 16,
}

})