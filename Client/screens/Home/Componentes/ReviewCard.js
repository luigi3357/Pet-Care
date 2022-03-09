import { Text, View, StyleSheet , Image} from 'react-native'
import React from 'react'

export default function ReviewCard({id,titulo, rating, usuario, message}) {
    return (
        <View style={styles.reviewContainer} >
            <Text style={styles.reviewTitle}>{titulo}</Text>
            <View style={{display:"flex", flexDirection:"row", textAlign:"center", alignItems:"center"}}>
                <Image
                    style= {{width:10, height:15}}

                  

                    source={require('../../../assets/Gold_Star.png')}

                />
                <Text style={styles.reviewRating}> {rating}</Text>
            </View>
            <Text style={styles.reviewUsuario}>{usuario}</Text>
            <Text style={styles.message}>{message}</Text>
            </View>
    )
}

const styles = StyleSheet.create({
    reviewContainer : {
        display : 'flex'
        ,flexDirection: 'row'
        ,justifyContent : "space-evenly"
        ,alignItems:"center"
        ,backgroundColor : "#AF8"
        ,borderWidth : 1
        ,borderColor : "lightblue"
        ,borderStyle : "solid"
        // ,margin : 2
        ,borderRadius : 3
        ,width :200
        ,height : 80
        ,marginHorizontal: 10
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
    ,message: {
        fontSize: 10,
        // borderTopColor : "#0F0",
        // borderTopWidth : 4,
        overflow : "scroll"
        // ,maxWidth : 60
        // ,fontFamily : 'Times New Roman'
        ,margin:10
    }
})

    
