import React from 'react'
import {Text,Image, TouchableOpacity, View,StyleSheet,ImageBackground} from 'react-native'
import { useNavigation } from "@react-navigation/native";
import { AntDesign } from "@expo/vector-icons";

export function SelectPublic () {
    const navigation = useNavigation();
return (
    <View style={styles.container}>
   <View style={{zIndex:1, position:'absolute',flex:1,height:100,width:100,opacity:0.5,left:0,marginTop:340,

}}>

   
   <TouchableOpacity 
      style={{marginTop:10}}
      onPress={() => navigation.goBack()}>
              <AntDesign name={"left"} size={100} color="black" />
            </TouchableOpacity>
            </View>

<View style={styles.containerbtn}>
    <TouchableOpacity
    onPress={()=> 
        navigation.navigate("Form")}
    >
<Text
style={styles.text}
>Brindar servicio!</Text>
<Image
style={{height:'100%',width:'100%'}}
source={{uri:'https://www.tqel.es/img/cms/cuidadores_perros.jpg'}}
/>
</TouchableOpacity>
</View>

<View  style={styles.containerbtn}>
<TouchableOpacity
onPress={()=> 
    navigation.navigate("ServicioForm")}
>
<Text
style={styles.text}
>Requiero un servicio!</Text>
<Image
style={{height:'100%',width:'100%'}}
source={{uri:'https://www.tqel.es/modules//smartblog/images/64-single-default.jpg'}}
/>
</TouchableOpacity>
</View>

    </View>
    
)

}
const styles = StyleSheet.create({
    container:{
        marginTop:30,
        flex:1,
        flexDirection:'column',
        justifyContent:'space-between',
        alignItems:'stretch',
        backgroundColor: "#000000c0"
    },
    containerbtn:{
        flex:1,
    },
    text: {
        marginTop:70,
        zIndex:1,
        position:'absolute',
        width:'100%',
        color: "white",
        fontSize: 42,
        lineHeight: 84,
        fontWeight: "bold",
        textAlign: "center",
        justifyContent:'center',
        backgroundColor: "#000000c0",
        opacity:0.7,
        
      }
     
        
})