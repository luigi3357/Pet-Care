import React from 'react';
import { Text , View, Image, Button, StyleSheet } from 'react-native';
import GoldStar from '../../../assets/Gold_Star';

export default function PostCard({id=1, image, title= 'Título', rating= 4, hiringNumber=12}){
    return (
        <View style={styles.container} id={id}>
            { image ? <Image
            source={image}
            />: null}
            <Text style={styles.title}>
            {title}
            </Text>
            <Text style={styles.rating}>
            {rating}
            </Text>
            <Image
            source={GoldStar}
            />
            <Text>
            {hiringNumber}
            </Text>
            <Button style={styles.button}>
            Detalles
            </Button>
        </View>
    )
}

const styles = StyleSheet.create({
    container : {
        display : "flex",
        backgroundColor : "CCC",
        justifyContent : "center",
        alignItems : "center",
        flex : 1
    }
    ,title : {
        fontFamily : "Helvetica",
        fontWeight : 700
    }
    ,rating : {
        color : "gold",
        fontFamily : "Courier New",
        fontWeight : "bold",
        textShadow : "1px 1px 2px black",
    }
    ,button : {
    }
})