import React, {useState, useEffect, useRef} from "react";
import {View, Text, StyleSheet, Dimensions, Image} from "react-native";
import MapView, { Callout, Circle } from "react-native-maps";
import {Marker} from "react-native-maps";
import {GooglePlacesAutocomplete} from "react-native-google-places-autocomplete";
import * as Location from "expo-location";
import * as Permissions from "expo-permissions";

// initialRegion={{
//     latitude: -34.61315,
//     longitude: -58.3772,
//     latitudeDelta: 0.0922,
//     longitudeDelta: 0.0421
// }}


export default function Maps(){

    const [origin, setOrigin] = useState(null);
    const [destination, setDestination] = useState(null);

    useEffect(() => {
        (async function(){
            const {status, permissions} = await Permissions.askAsync(Permissions.LOCATION);
            if (status === "granted") {
                let location = await Location.getCurrentPositionAsync({ enableHighAccuracy: true});
                console.log(location)
                setOrigin({
                    latitude: location.coords.latitude,
                    longitude: location.coords.longitude,
                    latitudeDelta: 0.0922,
                    longitudeDelta: 0.0421
                })
            } else {
                throw new Error("location permission not granted");
            }
        })();
    },[])
    
    return (
        <View style={{marginTop: 50, flex: 1}}>
            <GooglePlacesAutocomplete
                placeholder="Search"
                onPress={(data, details = null) => {
                    // 'details' is provided when fetchDetails = true
                    console.log(data, details);
                }}
                query={{
                    key: "AIzaSyD6SradftlsddgWM5cpjurtO-i-Ie0b5as",
                    language: "en",
                }}
                styles={{
                    container: {flex: 0, position: "absolute", width: "100%", zIndex: 1},
                    listView: {backgroundColor: "White"}
                }}
            />
            <Text >MAPA</Text>
            <MapView style={styles.map}
                initialRegion={
                    origin
                }
                showsUserLocation={true}
                loadingEnabled={true}
                provider="google" 
            >   
                <Marker 
                    coordinate={{
                        latitude: -34.720407,
                        longitude:-58.262576
                    }}
                    pinColor="blue"
                    >
                    <Callout>
                        <Text>Cuidador: Julio H</Text>
                    </Callout>
                </Marker>
                <Marker 
                    coordinate={{
                        latitude: -34.750769,
                        longitude:-58.294777
                    }}
                    pinColor="blue"
                    >
                    <Image
                        source={require("./photography-icon-png-15.png")}
                        style={{height: 33, width: 40}}
                    />
                    <Callout>
                        <Text>Cuidador: Franco M</Text>
                    </Callout>
                </Marker>
                <Marker 
                    coordinate={{
                        latitude: -34.721371,
                        longitude:-58.367015
                    }}
                    pinColor="blue"
                    >
                    <Callout>
                        <Text>Cuidador: Luis L</Text>
                    </Callout>
                </Marker>
                <Marker 
                    coordinate={{
                        latitude: -34.655811,
                        longitude:-58.617867
                    }}
                    pinColor="blue"
                    >
                    <Callout>
                        <Text>Cuidador: Darian E</Text>
                    </Callout>
                </Marker> 
                <Marker 
                    coordinate={{
                        latitude: -34.659387,
                        longitude:-58.627250
                    }}
                    pinColor="blue"
                    image={require("./photography-icon-png-15.png")}
                    >
                    <Callout>
                        <Text>Cuidador: Pablo M</Text>
                    </Callout>
                </Marker>
                <Marker 
                    coordinate={{
                        latitude: -34.762713,
                        longitude:-58.425439
                    }}
                    pinColor="blue"
                    >
                    <Callout>
                        <Text>Cuidador: Sebastian G</Text>
                    </Callout>
                </Marker> 
                <Marker 
                    coordinate={{
                        latitude: -34.763166,
                        longitude:-58.440480
                    }}
                    pinColor="blue"
                    >
                    <Callout>
                        <Text>Cuidador: Lucas D</Text>
                    </Callout>
                </Marker>
                <Marker 
                    coordinate={{
                        latitude: -34.581399,
                        longitude:-58.450359
                    }}
                    pinColor="blue"
                    >
                    <Callout>
                        <Text>Cuidador: Juan P</Text>
                    </Callout>
                </Marker> 
                <Marker 
                    coordinate={{
                        latitude: -34.61315,
                        longitude: -58.3772
                    }}
                    pinColor="red"
                >
                        <Callout>
                            <Text>Carpinchos!!!</Text>
                            <Text>Estoy Aquí!!!</Text>
                        </Callout>
                </Marker> 
                <Circle 
                    center={{
                        latitude: -34.61315,
                        longitude: -58.3772
                    }}  
                    radius={1500} 
                />              
            </MapView>
        </View>
    )
}

const styles = StyleSheet.create({
    container:{
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center'
    }, map: {
        width: Dimensions.get('window').width,
        height: Dimensions.get('window').height,
      },
});
