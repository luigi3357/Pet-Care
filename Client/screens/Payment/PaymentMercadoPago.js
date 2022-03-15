import React, { useEffect } from "react";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
//import {postPayment} from "../../Store/Actions/index.js";
import * as Linking from "expo-linking";

import {
  View,
  Text,
  TouchableOpacity,
  StyleSheet,
  TextInput,
  Button,
} from "react-native";
import { WebView } from "react-native-webview";

export default function Payment(props) {
  const [url, setUrl] = useState("");
  const [go, setGo] = useState(false);
  const [visible, setVisible] = useState(null);

  useEffect(() => {
    if (url) {
      Linking.openURL(url);
    }
  }, [url]);





  function stateChange(state) {
      console.log(visible);
      console.log(state);
      
      let urlf = state.url;
      if (state.canGoBack == true && urlf.includes("success")) {
        setVisible(state.canGoBack)
      setTimeout(() => {
        //   props.navigation.navigate("HomeScreen");
      }, 1000);
    } else {
      console.log(state);
    }
  }

  return (
    <>
      {!go ? (
        <View style={styles.container}>
          <TextInput
            style={styles.text}
            onChangeText={(text) => setUrl(text)}
            value={url}
          />
          <View style={{ margin: 5 }}>
            <Button onPress={() => setUrl('exp://ms-yc8.negurito.client.exp.direct:80')} title="Go" />
          </View>
        </View>
      ) : (
          !visible?
        <WebView
        
          source={{ uri: url }}
          style={{ marginTop: 20 }}
          startLoadingState={true}
          onNavigationStateChange={(state) => stateChange(state)}
        />:null
      )}
    </>
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
  text: {
    borderWidth: 1,
    margin: 5,
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

    alignItems: "center",
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
  input: {
    borderWidth: 1,
    borderColor: "#777",
    padding: 8,
    margin: 10,
    width: 200,
  },
});
