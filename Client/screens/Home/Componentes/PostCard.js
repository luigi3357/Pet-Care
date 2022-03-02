import React, {useState} from 'react';
import { Text , View, Image, Button, StyleSheet, ScrollView } from 'react-native';
import GoldStar from '../../../assets/Gold_Star';
import ReviewCard from './ReviewCard';

export default function PostCard({id=1, image, title= 'Título', rating= 4, hiringNumber=12, details="detalles", reviews}){
    function showDetails(){
        if(detailsView){
            setDetailsView(false);
        }else{
           setDetailsView(true);
        }
    }

    const [detailsView, setDetailsView] = useState(false);
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
            style = {{maxHeight="10px"}}
            source={GoldStar}
            />
            <Text>
            {hiringNumber}
            </Text>
            <Button title="detalles" style={styles.button} onPress={()=> showDetails()}>
            </Button>
            { detailsView ?
            <View style={styles.details}>
                <Text>{details}</Text>


           <View style={styles.detailsReviews}>
           <ScrollView
            horizontal = {true}
            showsHorizontalScrollIndicator= {false}>
           { reviews?

               reviews.map(i=>{
                   return(
                        <ReviewCard titulo={i.titulo} rating = {i.rating} review = {i.review} usuario = {i.usuario}/>
                   )
               }) 
               
            : null}

            </ScrollView>
           </View>
            </View>
            
            : null}
        </View>
    )
}



const styles = StyleSheet.create({
    container : {
        display : "flex",
        backgroundColor : "#DDD",
        borderRadius : "10px",
        border : "2px solid blue",
        justifyContent : "center",
        alignItems : "center",
        flex : 1,
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
    ,details : {
    }
     ,detailsReviews : {
      display : "flex",
      flexFlow : "row"
      ,maxWidth : "100vw"
    }
})