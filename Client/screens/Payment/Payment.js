import React from "react";
import {useState} from "react";
import {useDispatch, useSelector} from "react-redux";
import {postPayment, postPublic} from "../../Store/Actions/ApiActionCreator";
import {View, Text, TouchableOpacity, StyleSheet, TextInput } from "react-native";


export default function Payment (navigation) {

    const dispatch = useDispatch()

    const [carer, onChangeCarer] = useState("")
    const [amount, onChangeAmount] = useState("")
    
    const data = { carer: carer, amount: amount};



    function handlePayment (e){
        console.log(data, "handlePayment")
        dispatch(postPublic(data))
        console.log(data, "afterPostpayment") 
    } 

    return (
        <View style = {styles.container}>
            <Text /* style={styles.title} */>Payment Detail</Text>
            <Text /* style={styles.title} */>Payment Detail</Text>
            <Text /* style={styles.title} */>Payment Detail</Text>
            <Text /* style={styles.title} */>Payment Detail</Text>
            <Text /* style={styles.title} */>Payment Detail</Text>
            <Text /* style={styles.title} */>Payment Detail</Text>
            <Text /* style={styles.title} */>Payment Detail</Text>

            <Text /* style={styles.title} */>CARER:</Text>

            <TextInput
                type = "text"
                name = "carer"
                style = {styles.input}
                placeholder = "Carer..."
                value = {carer}
                onChangeText = {(value) => onChangeCarer(value)}
            />
            <Text>{carer}</Text>

            <Text /* style={styles.title} */>AMOUNT:</Text>

            <TextInput
                type = "text" 
                keyboardType = "numeric" 
                name = "amount"
                style = {styles.input}
                placeholder = "Amount..."
                value = {amount}
                onChangeText = {(value) => onChangeAmount(value)} />
            <Text>${amount}</Text>   
            
            <TouchableOpacity type = "submit" title="payment" onPress={handlePayment}>  
                <Text style={styles.button}>Go to payment</Text> 
            </TouchableOpacity>  

        </View>
    )
}

const styles = StyleSheet.create({
    container: {
      display: "flex",
      backgroundColor: "#60D394",
      borderRadius: 10,
      borderWidth: 4,
      borderColor: "#CCC",
      justifyContent: "center",
      alignItems: "center",
      padding: 15,
      minWidth: 97,
      margin: 40,
      // ,zIndex : 4
    },
    title: {
      fontSize: 1.5,
      // fontFamily : "Helvetica",
      fontWeight: "700",
    },
    rating: {
      fontSize: 1.2,
      color: "gold",
      // fontFamily : "Courier New",
      fontWeight: "bold",
      textShadowColor: "#FFF",
      textShadowOffset: { width: 1, height: 1 },
    },
    button: {
      backgroundColor: "#8aF",
      marginTop: 0.5,
      color: "#FFF",
      display: "flex",
      justifyContent: "flex-end",
      
      alignItems: "center",
      // ,flex:1
      padding: 4,
    },
    details: {
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
      textAlign: "center",
    },
    detailsReviews: {
      display: "flex",
      flexDirection: "row",
      //   ,width : 100
      //   ,marginLeft : '2px solid green'
    },
    input: {
        borderWidth: 1,
        borderColor: "#777",
        padding: 8,
        margin: 10,
        width: 200,
    }

})