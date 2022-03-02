import React, {useState} from 'react';
import { Text , View, Image, Button, StyleSheet, ScrollView } from 'react-native';
import ReviewCard from './ReviewCard';

export default function PostCard({id=1, image= require("../../assets/profile.png"), title= 'Título', rating= 4, hiringNumber=12, details="Acá van todos los detalles del prestador del servicio abajo van las reviews??? ", reviews  = [{
    titulo : "Review 1",
    rating : "5",
    usuario : "Usuario 1",
    review : "muy buena la atención !!!"
},
{
    titulo : "Review 2",
    rating : "1",
    usuario : "usuario 2",
    review : "un uno!! un UNO le pongo. vuelva a leer"
},{
    titulo : "Bond",
    rating : "007",
    usuario : "James Bond",
    review : "Dr No"
},{
    titulo : "expo 4",
    rating : "4",
    usuario : "tarjeta expo",
    review : "detalles review tarjeta 4"
},{
    titulo : "expo 5",
    rating : "5",
    usuario : "tarjeta expo",
    review : "detalles review tarjeta 5"
},{
    titulo : "expo 6",
    rating : "3",
    usuario : "tarjeta expo",
    review : "detalles review tarjeta 6"
}
]}){
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

            <View style= {{display: "flex", flexFlow:"row", alignItems : "center", justifyContent:"space-around"}}>
                <Image
                style = {{width: 50, height: 50, borderRadius:"5px", border:"1px solid black"}}
                source={image}
                />

                <Text style={styles.title}>
                {title}
                </Text>
            </View>

            <View style= {{display: "flex", flexFlow:"row", alignItems : "center", justifyContent:"space-around"}}>
                <Text> Rating: </Text>
                <Image
                style= {{width:25, height:25}}
                source={require('../../assets/Gold_Star.png')}
                />
                <Text style={styles.rating}>
                {rating}
                </Text>
            </View>
            <Image
            />
            <Text>
            {hiringNumber}
            </Text>
            <Button title="detalles" style={styles.button} onPress={()=> showDetails()}>
            </Button>
            { detailsView ?
            <View style={styles.details}>
                <Text style={{flexFlow:"center", margin : "8px"}}>{details}</Text>


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
        padding : "15px",
        width : "97vw",
    }
    ,title : {
        fontSize : "1.5rem",
        fontFamily : "Helvetica",
        fontWeight : 700
    }
    ,rating : {
        fontSize : "1.2rem",
        color : "gold",
        fontFamily : "Courier New",
        fontWeight : "bold",
        textShadow : "1px 1px 0px black",
    }
    ,button : {
    }
    ,details : {
        display:"flex",
        justifyContent:"center",
        alignItems:"center",
        textAlign:"center"
    }
     ,detailsReviews : {
      display : "flex",
      flexFlow : "row"
      ,maxWidth : "100vw"
    }
})