import { Text, View, ScrollView, Image, StyleSheet, Dimensions } from 'react-native';
import React, { useState } from 'react';
import { useNavigation } from '@react-navigation/native';
import ReviewCard from './ReviewCard';

const profileImg =  require('../../assets/profile.png');

export default function DetailsPage({profileImgs = [profileImg,profileImg,profileImg,profileImg,profileImg,profileImg,profileImg,profileImg,profileImg,profileImg], name='Lorem Ipsum', description ='dolor sit amet', rating= '5'}) {

    var reviews  = [{
        titulo : "Review 1",
        rating : "5",
        usuario : "Usuario 1",
        review : "muy buena la atención !!!"
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
    },
    {
        rating: 4,
review: "sit ut velit eu dolor consectetur ut nostrud reprehenderit eu sed enim ullamco aute do tempor cillum adipiscing pariatur. in proident, Ut incididunt",
titulo: "in exercitation",
usuario: "culpa eiusmod ut"
    },
    {titulo: 'quis do', rating: 1, usuario: 'dolor deserunt deserunt', review: 'sunt sint Excepteur ad voluptate et nulla consecte… sunt incididunt consequat. ipsum ut ut cupidatat'},
    {titulo: 'cupidatat nulla', rating: 5, usuario: 'qui esse et', review: 'minim qui tempor laborum. fugiat anim dolor repreh…mmodo officia nostrud sit do dolor non quis irure'},
    {titulo: 'in eiusmod', rating: 5, usuario: 'officia aliquip ut', review: 'mollit ut laborum. culpa ipsum in et labore tempor… ut ipsum consequat. amet, esse nostrud Excepteur'},
    {titulo: 'nulla dolor', rating: 2, usuario: 'dolore quis proident,', review: 'cillum minim ipsum cupidatat ipsum reprehenderit c…ute est deserunt esse adipiscing minim sed labore'},
    {titulo: 'anim in', rating: 1, usuario: 'exercitation Lorem irure', review: 'sit Lorem in ut laboris dolore sit sed dolore comm…piscing sunt Duis irure pariatur. aliquip in nisi'},
    {titulo: 'sed deserunt', rating: 4, usuario: 'eu est Ut', review: 'mollit sed Excepteur ad ut fugiat voluptate Except… enim id ipsum est ex velit tempor sed mollit qui'},
    {titulo: 'ex consectetur', rating: 4, usuario: 'ad cupidatat ut', review: 'sunt amet, Excepteur quis culpa voluptate voluptat…ulpa esse ullamco culpa mollit laborum. non nulla'},
    {titulo: 'dolor et', rating: 3, usuario: 'voluptate esse dolor', review: 'do proident, quis anim enim dolore laboris ullamco…rum. consectetur voluptate officia tempor aliqua.'},
    {
        rating: 2,
review: "aliqua. laborum. ullamco eiusmod consectetur dolore in deserunt incididunt sit Lorem voluptate elit, aliqua. eiusmod mollit ea labore sint deserunt fugiat in et",
titulo: "qui est",
usuario: "ex consequat. enim"
    },
    {
        rating: 3,
review: "sunt elit, et cillum commodo consequat. do dolor magna dolor ipsum occaecat dolore enim id id ea ullamco ex dolore laborum. occaecat laboris",
titulo: "sunt quis",
usuario: "eiusmod Ut aliquip"
    },
    {
        rating: 4,
review: "est dolore eiusmod nisi tempor fugiat sunt in ut proident, ut ut pariatur. ipsum proident, minim mollit eiusmod in consectetur Lorem tempor ex",
titulo: "in dolor",
usuario: "Duis in incididunt"
    },
    {
        rating: 2,
review: "in consequat. non ad ut veniam, eu in labore commodo et Excepteur eu est proident, tempor exercitation enim cupidatat magna est nulla veniam,",
titulo: "minim reprehenderit",
usuario: "est sed est"
    },
    {
        rating: 3,
review: "do aute consectetur fugiat pariatur. pariatur. dolor occaecat in culpa Lorem incididunt in fugiat veniam, nisi nulla laboris ex in dolor laborum. dolor",
titulo: "Excepteur non",
usuario: "Ut irure ea"
    },
    {
        rating: 3,
review: "consequat. nisi labore aliquip ex non anim nostrud id est veniam, mollit sint velit occaecat dolor in amet, mollit elit, in non quis",
titulo: "exercitation incididunt",
usuario: "Excepteur reprehenderit consectetur"
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