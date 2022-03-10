import { Text, View, StyleSheet , Image} from 'react-native'
import React from 'react'

export default function ReviewCard({id,titulo, rating, usuario, message}) {
    return (
        <View style={styles.reviewContainer} >
            <Text style={styles.reviewTitle}>{titulo}</Text>
            <View style={{display:"flex", flexDirection:"row", textAlign:"center", alignItems:"center"}}>
                <View style={{display:"flex", flexDirection:"column", alignItems:"flex-end"}}>
                    <Image
                        style= {{width:22, height:20,  }}

                  

                    source={require('../../../assets/Gold_Star.png')}

                />
                <Text style={styles.reviewRating}>{rating}</Text>
                </View>
            <Text style={styles.reviewUsuario}>{usuario}</Text>
            <Text style={styles.message}>{message}</Text>
            </View>
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
        ,width :270
        ,height : 80
        ,marginHorizontal: 10
        ,padding: 5
    }

    

    ,reviewTitle : {
        // fontFamily : "Courier New",
        fontWeight : "bold"
        ,marginTop: 1
    }
    ,reviewRating : {
        fontWeight : "bold"
        ,fontSize:14
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
        ,marginHorizontal:15
    }
})

    
