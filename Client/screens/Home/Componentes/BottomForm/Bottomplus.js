import { AntDesign, FontAwesome } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native';
import { Icon, NativeBaseProvider } from 'native-base';
import React from 'react';
import { StyleSheet, TouchableOpacity, View } from 'react-native';


export default function Button() {
  const navigation = useNavigation()
  return (
      <NativeBaseProvider>
    <View style={styles.viewBody}>
      <TouchableOpacity
      
      onPress={()=> 
        //navigation.navigate("Form")
        console.log('boton crear')
      }
      >
        <Icon 
         style={styles.btnContainer2}
        size="60px"
        color="black" 
        as={<FontAwesome name="circle" />} />
      <Icon 
       style={styles.btnContainer}
      size="50px"
      color="#00D2C6" 
      as={<AntDesign name="pluscircle"  />} />
   </TouchableOpacity>
    </View>

    </NativeBaseProvider>
  )
}

const styles = StyleSheet.create({
    viewBody:{
        flex:1,
},
btnContainer:{
position:"absolute",
bottom:50,
right:8,
},
btnContainer2:{
position:"absolute",
bottom:45,
right:-1.2,
}
})


