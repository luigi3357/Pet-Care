import { Text, View, StyleSheet , Image} from 'react-native'
import React from 'react'

export default function ReviewCard({titulo, rating, usuario, review}) {
    return (
        <View style={styles.reviewCard}>
            <Text style={styles.reviewTitle}>{titulo}</Text>
            <View style={{display:"flex", flexFlow:"row", textAlign:"center", alignItems:"center"}}>
                <Image
                    style= {{width:10, height:15}}
                    source={require('../../assets/Gold_Star.png')}
                />
                <Text style={styles.reviewRating}> {rating}</Text>
            </View>
            <Text style={styles.reviewUsuario}>{usuario}</Text>
            <Text style={styles.reviewReview}>{review}</Text>
            </View>
    )
}

const styles = StyleSheet.create({
    reviewCard : {
        display : 'flex'
        ,justifyContent:"center"
        ,alignItems:"center"
        ,backgroundColor : "#FFF"
        ,border : "1px solid lightblue"
        ,justifyContent : "top"
        ,margin : "0.5vw"
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
        ,margin : "%4"
    }
    ,reviewReview: {
        borderTop: "4px thick green",
        backgroundColor : "#FF0",
        padding: "%2",
        overflow : "hidden"
        ,maxWidth : "60vw"
    }
})