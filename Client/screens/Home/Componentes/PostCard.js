import React, { useState } from "react";
import {
  Alert,
    Image, ScrollView, StyleSheet, Text, TouchableOpacity, View
} from "react-native";
import ReviewCard from "./ReviewCard";
import { useNavigation } from '@react-navigation/native'


export default function PostCard({
  id = 1,
  image = require("../../../assets/profile.png"),
  title = "Título",
  rating = 4,
  hiringNumber = 12,
  details = "Acá van todos los detalles del prestador del servicio abajo van las reviews??? ",
  reviews = [
    {
        id: 1001,
        titulo: "Excelente",
        rating: "5",
        usuario: "Amy Whinehouse",
        review: "muy buena la atención !!!",
    },
    {
        id: 1002,
        titulo: "Ahhh aaaa iiihh aah",
        rating: "1",
        usuario: "Yoko Ono",
        review: "un uno!! un UNO le pongo. vuelva a leer",
    },
    {
        id: 1003,
        titulo: "Mission Status",
        rating: "4",
        usuario: "James Bond",
        review: "Dr No",
    },
    {
        id: 1004,
        titulo: "Boom",
        rating: "4",
        usuario: "Kurt Cobain",
        review: "Es un tiro al piso",
    },
    {
        id: 1005,
        titulo: "Voodoo",
        rating: "5",
        usuario: "Jimmy Hendrix",
        review: "Rock",
    },
    {
        id: 1006,
        titulo: "Mágico",
        rating: "4",
        usuario: "Harry Potter",
        review: "Excelsior!",
    },
  ],
}) {
  function showDetails() {
    if (detailsView) {
      setDetailsView(false);
    } else {
      setDetailsView(true);
    }
  }

  const [detailsView, setDetailsView] = useState(false);

  const navigation = useNavigation();

  return (
    <View style={styles.container} key={id}>
      <View
        style={{
          display: "flex",
          flexDirection: "row",
          alignItems: "center",
          justifyContent: "center",
          textAlign: "center",
        }}
      >
        <Image
          style={{
            width: 50,
            height: 50,
            borderRadius: 5,
            borderWidth: 1,
            borderColor: "#FFF",
          }}
          source={image}
        />

        <Text style={styles.title}>{title}</Text>
      </View>

      <View
        style={{
          display: "flex",
          flexDirection: "row",
          alignItems: "center",
          justifyContent: "space-around",
        }}
      >
        <Text> Rating: </Text>
        <Image
          style={{ width: 25, height: 25 }}
          source={require("../../../assets/Gold_Star.png")}
        />
        <Text style={styles.rating}>{rating}</Text>
      </View>
      <Image />
      <Text>Cantidad de contrataciones: {hiringNumber}</Text>

      <TouchableOpacity title="goToPay" onPress={() => navigation.navigate("payment")}>  
        <Text style={styles.button}>Contratar!</Text> 
      </TouchableOpacity>  


      <TouchableOpacity title="detalles" onPress={() => showDetails()}>
        <Text style={styles.button}>Detalles</Text>
      </TouchableOpacity>
      {detailsView ? (
        <View style={styles.details}>
          <Text style={{ justifyContent: "center", margin: 50 }}>
            {details}
          </Text>

          <View style={styles.detailsReviews}>
            <ScrollView
              horizontal={true}
              showsHorizontalScrollIndicator={false}
            >
              {reviews
                ? reviews.map((i) => {
                    return (
                      <ReviewCard
                        id={i.id}
                        key={i.id}
                        titulo={i.titulo}
                        rating={i.rating}
                        review={i.review}
                        usuario={i.usuario}
                      />
                    );
                  })
                : null}
            </ScrollView>
          </View>
        </View>
      ) : null}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    display: "flex",
    backgroundColor: "#60D394",
    borderRadius: 10,
    borderWidth: 4,
    borderColor: "#CCC",
    justifyContent: "center",
    alignItems: "center",
    padding: 15,
    minWidth: 97,
    margin: 40,
    // ,zIndex : 4
  },
  title: {
    fontSize: 1.5,
    // fontFamily : "Helvetica",
    fontWeight: "700",
  },
  rating: {
    fontSize: 1.2,
    color: "gold",
    // fontFamily : "Courier New",
    fontWeight: "bold",
    textShadowColor: "#FFF",
    textShadowOffset: { width: 1, height: 1 },
  },
  button: {
    backgroundColor: "#8aF",
    marginTop: 0.5,
    color: "#FFF",
    display: "flex",
    justifyContent: "flex-end",
    alignItems: "flex-end",
    // ,flex:1
    padding: 4,
  },
  details: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    textAlign: "center",
  },
  detailsReviews: {
    display: "flex",
    flexDirection: "row",
    //   ,width : 100
    //   ,marginLeft : '2px solid green'
  },
});
