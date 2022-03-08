import { Text, View, StyleSheet , Image} from 'react-native'
import React from 'react'

export default function ReviewCard({id,titulo, rating, usuario, review}) {
    return (
        <View style={styles.reviewCard} key={id} >
            <Text style={styles.reviewTitle}>{titulo}</Text>
            <View style={{display:"flex", flexDirection:"row", textAlign:"center", alignItems:"center"}}>
                <Image
                    style= {{width:10, height:15}}

                  

                    source={require('../../../assets/Gold_Star.png')}

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
        ,justifyContent : "flex-start"
        ,alignItems:"center"
        ,backgroundColor : "#AF8"
        ,borderWidth : 1
        ,borderColor : "lightblue"
        ,borderStyle : "solid"
        // ,margin : 2
        ,borderRadius : 3
        // ,minWidth: 88
        ,width : 150
        ,height : 120
        ,marginHorizontal: 5
    }

    

    ,reviewTitle : {
        // fontFamily : "Courier New",
        fontWeight : "bold"
        ,marginTop: 1
    }
    ,reviewRating : {
        fontWeight : "bold"
        ,textShadowColor : "black"
        ,textShadowOffset : {width : 1, height : 1}
        ,textShadowRadius : 2
        ,margin: 0
    }
    ,reviewUsuario : {
        fontWeight : "300"
        // ,fontFamily : "Helvetica"
        ,color : '#00F'
        ,margin : 0
    }
    ,reviewReview: {
        // borderTopColor : "#0F0",
        // borderTopWidth : 4,
        padding: 2,
        overflow : "hidden"
        // ,maxWidth : 60
        // ,fontFamily : 'Times New Roman'
        ,marginTop: 0.5
    }
})

    
