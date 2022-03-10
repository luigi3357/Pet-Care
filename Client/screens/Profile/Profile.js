import React from "react";
import {
  StyleSheet,
  Text,
  View,
  SafeAreaView,
  Image,
  ScrollView,
} from "react-native";
import { Ionicons, MaterialIcons } from "@expo/vector-icons";
import { AntDesign } from "@expo/vector-icons";

export default function App() {
  return (
    <SafeAreaView style={styles.container}>
      <ScrollView showsVerticalScrollIndicator={false}>
        <View style={styles.titleBar}>
          <AntDesign name={"left"} size={24} color="#52575D" />

          <AntDesign name={"edit"} size={24} color="#52575D" />
        </View>

        <View style={{ alignSelf: "center" }}>
          <View style={styles.profileImage}>
            <Image
              source={require("./img/media1.jpg")}
              style={styles.image}
              resizeMode="center"
            ></Image>
          </View>
          <View style={styles.dm}>
            <AntDesign name={"message1"} size={24} color="#fff" />
          </View>

          <View style={styles.add}>
            <AntDesign name={"plus"} size={24} color="#fff" />
          </View>
        </View>

        <View style={styles.infoContainer}>
          <Text style={[styles.text, { fontWeight: "200", fontSize: 36 }]}>
            Carla
          </Text>
          <Text style={[styles.text, { color: "#AEB5BC", fontSize: 14 }]}>
            "Descripcion corta o frase"
          </Text>
        </View>

        <View style={styles.statsContainer}>
          <View style={styles.statsBox}>
            <Text style={[styles.text, { fontSize: 24 }]}>4</Text>
            <Text style={[styles.text, styles.subText]}>RATING</Text>
          </View>
          <View
            style={[
              styles.statsBox,
              {
                borderColor: "#DFD8C8",
                borderLeftWidth: 1,
                borderRightWidth: 1,
              },
            ]}
          >
            <Text style={[styles.text, { fontSize: 24 }]}>12</Text>
            <Text style={[styles.text, styles.subText]}>CONTRATACIONES</Text>
          </View>
        </View>

        <View style={{ marginTop: 32 }}>
          <ScrollView horizontal={true} showsHorizontalScrollIndicator={false}>
            <View style={styles.mediaImageContainer}>
              <Image
                source={require("./img/media1.jpg")}
                style={styles.image}
                resizeMode="cover"
              ></Image>
            </View>
            <View style={styles.mediaImageContainer}>
              <Image
                source={require("./img/media2.jpg")}
                style={styles.image}
                resizeMode="cover"
              ></Image>
            </View>
            <View style={styles.mediaImageContainer}>
              <Image
                source={require("./img/media3.jpg")}
                style={styles.image}
                resizeMode="cover"
              ></Image>
            </View>
            <View style={styles.mediaImageContainer}>
              <Image
                source={require("./img/media3.jpg")}
                style={styles.image}
                resizeMode="cover"
              ></Image>
            </View>
            <View style={styles.mediaImageContainer}>
              <Image
                source={require("./img/media3.jpg")}
                style={styles.image}
                resizeMode="cover"
              ></Image>
            </View>
            <View style={styles.mediaImageContainer}>
              <Image
                source={require("./img/media3.jpg")}
                style={styles.image}
                resizeMode="cover"
              ></Image>
            </View>
          </ScrollView>
        </View>
        <Text style={[styles.title, { textAlign: "center" }]}>PUBLICACION</Text>
        <View style={{ alignItems: "center" }}>
          <View style={styles.recentItem}>
            <View style={{ width: 250 }}>
              <Text
                style={[
                  styles.publicartionCard,
                  { color: "#41444B", fontWeight: "300" },
                ]}
              >
                CARD PUBLICACION{" "}
              </Text>
            </View>
          </View>
          <Text style={styles.title}>REVIEWS</Text>
          <View style={styles.recentItem}>
            <View style={{ width: 250 }}>
              <Text
                style={[styles.review, { color: "#41444B", fontWeight: "300" }]}
              >
                {" "}
                REVIEW 1{" "}
              </Text>
              <Text
                style={[styles.review, { color: "#41444B", fontWeight: "300" }]}
              >
                {" "}
                REVIEW 3{" "}
              </Text>
              <Text
                style={[styles.review, { color: "#41444B", fontWeight: "300" }]}
              >
                {" "}
                REVIEW 4{" "}
              </Text>
              <Text
                style={[styles.review, { color: "#41444B", fontWeight: "300" }]}
              >
                {" "}
                REVIEW 5{" "}
              </Text>
            </View>
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#FFF",
  },

  image: {
    flex: 1,
    width: 200,
    height: 200,
  },
  titleBar: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginTop: 12,
    marginHorizontal: 16,
  },
  title: {
    color: "#AEB5BC",
    textTransform: "uppercase",
    fontWeight: "500",
    marginTop: 24,
    marginHorizontal: 16,
  },
  subText: {
    fontSize: 12,
    color: "#AEB5BC",
    textTransform: "uppercase",
    fontWeight: "500",
  },
  profileImage: {
    width: 200,
    height: 200,
    borderRadius: 200,
    overflow: "hidden",
  },
  dm: {
    backgroundColor: "#00d2c6",
    position: "absolute",
    bottom: 0,
    width: 40,
    height: 40,
    borderRadius: 20,
    alignItems: "center",
    justifyContent: "center",
  },

  add: {
    backgroundColor: "#00d2c6",
    position: "absolute",
    bottom: 0,
    right: 0,
    width: 40,
    height: 40,
    borderRadius: 30,
    alignItems: "center",
    justifyContent: "center",
  },
  infoContainer: {
    alignSelf: "center",
    alignItems: "center",
    marginTop: 16,
  },
  statsContainer: {
    flexDirection: "row",
    alignSelf: "center",
    marginTop: 32,
  },
  statsBox: {
    alignItems: "center",
    flex: 1,
  },
  mediaImageContainer: {
    width: 180,
    height: 200,
    borderRadius: 12,
    overflow: "hidden",
    marginHorizontal: 10,
  },

  recent: {
    marginLeft: 78,
    marginTop: 32,
    marginBottom: 6,
    fontSize: 10,
  },
  recentItem: {
    flexDirection: "row",
    alignItems: "flex-start",
    marginBottom: 16,
  },

  review: {
    backgroundColor: "#CABFAB",
    height: 100,
    marginTop: 24,
  },

  publicartionCard: {
    backgroundColor: "#CABFAB",
    height: 100,
  },
});
