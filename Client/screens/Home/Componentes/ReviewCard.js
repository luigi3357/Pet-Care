import { Text, View, StyleSheet } from 'react-native'
import React from 'react'

export default function ReviewCard({titulo, rating, usuario, review}) {
    return (
        <View style={styles.reviewCard}>
            <Text style={styles.reviewTitle}>{titulo}</Text>
            <Text style={styles.reviewRating}>{rating}</Text>
            <Text style={styles.reviewUsuario}>{usuario}</Text>
            <Text style={styles.reviewReview}>{review}</Text>
            </View>
    )
}

const styles = StyleSheet.create({
    reviewCard : {
        display : 'flex'
        ,backgroundColor : "#FFF"
        ,border : "1px solid lightblue"
        ,justifyContent : "top"
        ,margin : "1px"
        ,borderRadius : "3px"
    }
    ,reviewTitle : {
        fontFamily : "Courier New"
        ,fontWeight : "bold"
        ,marginTop: "1px"
    }
    ,reviewRating : {
        fontWeight : "bold"
        ,textShadow: "1px 1px 2 solid black"
    }
    ,reviewUsuario : {
        fontWeight : "300"
        ,fontFamily : "Helvetica"
        ,color : "Blue"
        ,margin : "1px"
    }
    ,reviewReview: {
        backgroundColor : "#FF0",
        //padding: "2px",
        overflow : "hidden"
        ,maxWidth : "70vw"
    }
})