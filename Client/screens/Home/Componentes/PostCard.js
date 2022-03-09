import React, { useState } from "react";
import {
  Image,
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import ReviewCard from "./ReviewCard";
import { useNavigation } from '@react-navigation/native'


export default function PostCard({
  id = 1,
  date = "ayer",
  title = "Título",
  image = require("../../../assets/profile.png"),
  rating = 4,
  bookings = 1,
  description = "Acá van todos los detalles del prestador del servicio abajo van las reviews??? ",
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
    <View style={styles.container}>
      <View
        style={{
          display: "flex",
          flexDirection: "row",
          alignItems: "flex-start",
          justifyContent: "flex-start",
          textAlign: "center",
          paddingLeft: 20,
        }}
      >
        <Image
          style={{
            width: 80,
            height: 80,
            borderRadius: 5,
            borderWidth: 1,
            borderColor: "#FFF",
          }}
          source={image}
        />
        <View
          style={{
            display: "flex",
            flexDirection: "column",
            alignItems: "flex-start",
            justifyContent: "space-around",
            marginHorizontal: 15,
            width: "65%"
          }}
        >
          <Text style={styles.title}>{title}</Text>

          <View
            style={{
              display: "flex",
              flexDirection: "row",
              alignItems: "center",
              justifyContent: "space-around",
            }}
          >
            <Text>Rating: </Text>
            <Image
              style={{ width: 20, height: 20 }}
              source={require("../../../assets/Gold_Star.png")}
            />
            <Text style={styles.rating}>{rating}</Text>
          </View>
          <Image />
          <Text>Contrataciones: {bookings}</Text>
          <View style={{ alignSelf: "flex-end",}}>
            <TouchableOpacity title="detalles" onPress={() => showDetails()}>
              <Text style={styles.button}>Detalles</Text>
            </TouchableOpacity>
          </View>
        </View>
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
          <Text style={{ justifyContent: "center", margin: 12, overflow: "hidden" , fontStyle: "italic" }}>
            {description}
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
                        rating={i.rate}
                        review={i.message}
                        from={i.from_id}
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
    alignItems: "flex-start",
    minWidth: 300,
    marginVertical: 2,
    marginHorizontal: 15,
    padding: 10,
    // ,zIndex : 4
  },
  title: {
    fontSize: 14,
    fontWeight: "bold",
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
    alignSelf: "flex-end",
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
    alignContent: "center",
    justifyContent:"center"
    //   ,width : 100
    //   ,marginLeft : '2px solid green'
  },
});
