import React, { useEffect, useState } from 'react';
import { SearchBar } from 'react-native-elements';
import { View, Text, StyleSheet, Alert } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { useDispatch, useSelector } from 'react-redux';
import { fetchAllPosts, searchKeyword } from "../../../../Store/Actions";


const SearchBar2 = () => {
    const navigation = useNavigation();
    const dispatch = useDispatch();
    const [value, setValue] = useState("");
    const [error, setError] = useState("");
    const filtered_posts = useSelector(state=>state.filtered_posts)
  
    function errorAlert(message) {
      Alert.alert("Error", message, [
        { text: "OK", onPress: () => navigation.navigate("HomeScreen") },
      ]);
    }
  
    function validateSearch(value) {
      if (!/[A-Za-z ]/.test(value)) {
        setError("Solo letras o espacios");
        //console.log(error)
      } else if (value.length > 30) {
        setError("Máximo 30 caracteres");
        //console.log(error)
      } else {
        setError("");
      }
      setValue(value);
    }
  
    useEffect(() => {
      validateSearch(value);
    }, [value]);
    useEffect(() => {
      //console.log(filtered_posts);
    }, [filtered_posts]);
  
  
    function submitSearch() {
      validateSearch(value);
      if(value.length==0){
      dispatch(fetchAllPosts())
      }else if (error) {
        errorAlert(error);
        setValue("");
      } else{
        dispatch(searchKeyword(value))
      }
      console.log(value);
    }

  const updateSearch = (search) => {
    setValue(search);
  };

  return (
    <View style={styles.view}>
      <SearchBar
        placeholder="Buscar..."
        onChangeText={updateSearch}
        value={value}
        inputStyle={{color: 'black'}}
        containerStyle={{height:100, margin: 0, paddingTop:12, backgroundColor: 'transparent', borderBottomColor: 'transparent',
        borderTopColor: 'transparent'}}
        inputContainerStyle={{height:30, margin: 0, padding:0,backgroundColor: '#f9f9f9'}}
        onSubmitEditing={submitSearch}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  view: {
      height: 50,
      padding:0,
      marginTop:16,
      borderWidth: 0,
      borderBottomColor: 'transparent',
 borderTopColor: 'transparent'
  },
});

export default SearchBar2;