import { Text, View, ScrollView, Image, StyleSheet, Dimensions } from 'react-native';
import React, { useState } from 'react';
import { useNavigation } from '@react-navigation/native';
import ReviewCard from './ReviewCard';

const profileImg =  require('../../assets/profile.png');

export default function DetailsPage({profileImgs = [profileImg,profileImg,profileImg,profileImg], name='Lorem Ipsum', description ='dolor sit amet', rating= '5'}) {

    var reviews  = [{
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
    ]

    const navigation = useNavigation();

    return (
      <View style={styles.container}>

          <Text style={styles.name} onPress={()=>{
              navigation.navigate("Profile")
          }}>{name}</Text>
          <View style={{top:110, display:'flex', flexDirection:'row-reverse', alignItems:'center'}}>
            <Image style={{width:20,height:20, margin:5}} source={require('../../assets/Gold_Star.png')}/>
            <Text>{rating}</Text>
          </View>
        <ScrollView
        horizontal={true}
        showsHorizontalScrollIndicator={false}
        style={styles.scroll}>

            {
                profileImgs.map((i, idx) => <Image
                    key = {idx}
                    source={i}
                    style = {styles.profileImage}
                    />)
            }
        </ScrollView>

        <Text style={styles.description}>{description}</Text>

        <ScrollView
            style={styles.reviews}
            horizontal = {false}
            showsVerticalScrollIndicator= {false}>
           { reviews?

               reviews.map((i,idx)=>{
                   return(
                        <ReviewCard  id={idx} titulo={i.titulo} rating = {i.rating} review = {i.review} usuario = {i.usuario}/>
                   )
               }) 
               
            : null}

            </ScrollView>

      </View>
    )
}

const styles = StyleSheet.create({
    container:{
        display: 'flex'
        ,justifyContent : 'center'
        ,alignItems : 'center'
    },
    profileImage : {
        width : 130,
        height : 130
        ,marginTop : 50
        ,margin : 20
        ,borderWidth : 3
        ,borderColor : '#444'
        ,borderRadius : 5
    },
    scroll: {
        marginTop : 80
        // ,maxWidth : 380
    },
    name :{
        top :100
        ,fontSize :35
    },
    description : {
        fontSize : 15
        ,maxWidth : 320
        ,margin : Dimensions.get("window").height * 0.05

    },
    reviews : {
        // marginTop: Dimensions.get("window").height*0.02,
        maxWidth : Dimensions.get("window").width*0.9
    }
})