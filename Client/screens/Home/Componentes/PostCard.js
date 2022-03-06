import React, {useState} from 'react';
import { Text , View, Image, TouchableOpacity, StyleSheet, ScrollView } from 'react-native';
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
        <View style={styles.container} key={id}>

            <View style= {{display: "flex", flexDirection:"row", alignItems : "center", justifyContent:"center", textAlign:'center'}}>
                <Image
                style = {{width: 50, height: 50, borderRadius:5, borderWidth: 1, borderColor : "#FFF"}}
                source={image}
                />

                <Text style={styles.title}>
                {title}
                </Text>
            </View>

            <View style= {{display: "flex", flexDirection:"row", alignItems : "center", justifyContent:"space-around"}}>
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
            Cantidad de contrataciones: {hiringNumber}
            </Text>





            <TouchableOpacity title="detalles"onPress={()=> showDetails()}>
                <Text  style={styles.button} >Detalles</Text>
            </TouchableOpacity>
            { detailsView ?
            <View style={styles.details}>
                <Text style={{justifyContent:"center", margin : 50}}>{details}</Text>


           <View style={styles.detailsReviews}>
           <ScrollView
            horizontal = {true}
            showsHorizontalScrollIndicator= {false}>
           { reviews?

               reviews.map((i,idx)=>{
                   return(
                        <ReviewCard id={idx} titulo={i.titulo} rating = {i.rating} review = {i.review} usuario = {i.usuario}/>
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
        backgroundColor :"#60D394",
        borderRadius : 10,
        borderWidth : 4,
        borderColor : "#CCC",
        justifyContent : "center",
        alignItems : "center",
        padding : 15,
        minWidth : 97,
        margin : 40
        // ,zIndex : 4
    }
    ,title : {
        fontSize: 1.5,
        // fontFamily : "Helvetica",
        fontWeight : "700"
    }
    ,rating : {
        fontSize : 1.2,
        color : "gold",
        // fontFamily : "Courier New",
        fontWeight : "bold",
        textShadowColor : "#FFF",
        textShadowOffset : {width : 1, height : 1},
    }
    ,button : {
        backgroundColor : '#8aF',
        marginTop: 0.5
        ,color: '#FFF'
        ,display: 'flex',
        justifyContent:'flex-end'
        ,alignItems : 'flex-end'
        // ,flex:1
        ,padding : 4
    }
    ,details : {
        display:"flex",
        justifyContent:"center",
        alignItems:"center",
        textAlign:"center"
    }
     ,detailsReviews : {
      display : "flex",
      flexDirection : "row"
    //   ,width : 100
    //   ,marginLeft : '2px solid green'
    }
})