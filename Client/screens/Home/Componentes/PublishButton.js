import { AntDesign, FontAwesome } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native';
import { Icon, NativeBaseProvider } from 'native-base';
import React from 'react';
import { StyleSheet, TouchableOpacity, View } from 'react-native';


export default function PublishButton() {
  const navigation = useNavigation()
  return (
      <TouchableOpacity style={styles.btn} onPress={()=> navigation.navigate("Form")}>
          <AntDesign name="pluscircle" size={60} color="black" />
      </TouchableOpacity>
      
  )
}

const styles = StyleSheet.create({
   btn: {
       alignSelf: "flex-end",
       position: "absolute",
       bottom: 80,
       right: 10,
       zIndex:5
   }
})


