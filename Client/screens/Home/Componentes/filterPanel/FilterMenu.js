import React, { useState } from 'react';
import { Button, Overlay, Icon } from 'react-native-elements';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import AccordionList from './accordion';
import { SafeAreaView } from 'react-native-safe-area-context';
import { Entypo } from '@expo/vector-icons';
import BadgeF from './badge';
import FilterSelect from '../FilterButton';
import { useSelector } from 'react-redux';


function OverlayComponent(){
  const [visible, setVisible] = useState(false);
  const filters = useSelector(state=>state.activeFilters)

  const toggleOverlay = () => {
    setVisible(!visible);
  };

  return (
    <View style={styles.container}>
      {filters.length>0 && <View style={{position: "absolute", right: -5, zIndex: 2}}>
      <BadgeF size={20} value={filters.length}/>
      </View>}
    {<TouchableOpacity  onPress={toggleOverlay}><Entypo name="menu" size={40} color={!visible ? "black": "white" } /></TouchableOpacity>}
    <Overlay isVisible={visible} onBackdropPress={toggleOverlay} overlayStyle={styles.over} >
      <AccordionList/>
    </Overlay>
        </View>
   
  );
};

const styles = StyleSheet.create({
  container:{
    alignSelf: "center",
    
  },
  over: {
      backgroundColor: '#BEBEBE',
      position: "absolute",
      top: 50,
      right: 25,
      width: "50%",
      height: "50%",
      borderRadius:5,
      
      padding:0
  }
});

export default OverlayComponent;