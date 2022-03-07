import React from 'react'
import { View, StyleSheet, TextInput} from 'react-native'
import {Input} from 'native-base'



const InputsLogin =({ setValue,placeholder,secureTextEntry,InputLeftElement}) => {

    return(
        <View>
        <View style={styles.buttonStyleX}>
        <View style={styles.emailInput}>
            <TextInput
                
                InputLeftElement={InputLeftElement}
                secureTextEntry={secureTextEntry}
                placeholder = {placeholder}
                _ligth={{
                    placeholderTextColor: "blue"
                }}
                _dark={{
                    placeholderTextColor: "blue"
                   }}
            />
        </View>
    </View>
    </View>
    )

}


const styles = StyleSheet.create({

  buttonStyleX:{
    marginTop:12,
    marginRight:15,
    marginLeft:15,
},
emailInput:{
    marginTop:10,
    marginRight:5,
},

})

export default InputsLogin;