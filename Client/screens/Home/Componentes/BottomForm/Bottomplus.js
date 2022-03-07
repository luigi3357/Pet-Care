import React from 'react'
import {View,StyleSheet} from 'react-native'
import {Icon,NativeBaseProvider} from 'native-base'
import { AntDesign  } from '@expo/vector-icons';
import { TouchableOpacity } from 'react-native';
import {useNavigation} from '@react-navigation/native'


export default function Button() {
  const navigation = useNavigation()
  return (
      <NativeBaseProvider>
    <View style={styles.viewBody}>
      <TouchableOpacity
      
      onPress={()=> navigation.navigate("Form")}
      >
      <Icon 
       style={styles.btnContainer}
      ml="2" 
      size="12" 
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


}
})


