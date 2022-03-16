import { Text, View, ScrollView, Image, StyleSheet, Dimensions } from 'react-native';
import React, { useState } from 'react';
import { useNavigation } from '@react-navigation/native';
import ReviewCard from './ReviewCard';
import { TouchableOpacity } from 'react-native-gesture-handler';

// const profileImg =  require('../../assets/profile.png');

export default function DetailsPage({
    id,
    authorId,
    date,
    title,
    image = require("../../assets/profile.jpg"),
    name,
    description,
    rating,
    bookings,
    reviews}) {


    const navigation = useNavigation();

    return (
      <View style={styles.container}>

        {/* Título */}
        <View>
            <Text>{title}</Text>
        </View>

          <Text style={styles.name} onPress={()=>{
              navigation.navigate("Profile")
          }}>{name}</Text>
          <View style={{top:110, display:'flex', flexDirection:'row-reverse', alignItems:'center'}}>
            <Image style={{width:20,height:20, margin:5}} source={require('../../assets/Gold_Star.png')}/>
            <Text>{rating}</Text>
          </View>

          {/* Imagen de perfil y link al perfil*/}
          <TouchableOpacity
          onPress={() => navigation.navigate("Profile", authorId)}
        >
          <Image
            style={{
              width: 80,
              height: 80,
              borderRadius: 100,
              borderWidth: 1,
              borderColor: "#FFF",
            }}
            source={image}
          />
        </TouchableOpacity>


        

        {bookings ?
        <Text>Reservaciones: {bookings}</Text>
        :null}

        <Text style={styles.description}>{description}</Text>

        <TouchableOpacity onPress={()=> navigation.navigate()}>
            <Text>Contratar</Text>
        </TouchableOpacity>

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
        width : 130
        ,height : 130
        ,marginTop : 45
        ,margin : 20
        ,borderWidth : 3
        ,borderColor : '#444'
        ,borderRadius : 5
        // ,marginBottom : 80
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
        ,margin : Dimensions.get("window").height * 0.02

    },
    reviews : {
        // marginTop: Dimensions.get("window").height*0.02,
        width : Dimensions.get("window").width*0.7
        ,height : Dimensions.get("window").height*0.5
    }
})