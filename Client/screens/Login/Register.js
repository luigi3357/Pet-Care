import { View, Text, StyleSheet, TouchableOpacity  } from 'react-native'
import React from 'react'
import {Input, NativeBaseProvider,Button, Box,Icon, Image,AspectRatio } from 'native-base'
import {FontAwesome5, MaterialCommunityIcons} from '@expo/vector-icons'
import {useNavigation} from '@react-navigation/native'
import InputsLogin from './Componentes/InpuntsLogin'



const Register = () => {
  const navigation = useNavigation()
  return (
    <View style={styles.container}>

       <View style={styles.logoPos}>
       <TouchableOpacity onPress={()=>navigation.navigate("Login")}>
            <Icon
             as={<FontAwesome5  name="angle-left"/>}
             size="sm"
             m={2}

               />
      </TouchableOpacity>
            </View>
            <View style={styles.middle}>
                <Text style={styles.loginText}>Registrate</Text>
            </View>
                    <InputsLogin
                        InputLeftElement={
                            <Icon
                               as={<FontAwesome5  name="user"/>}
                               size="sm"
                               m={2}
                               _ligth={{
                                   color:'black'
                               }}
                               _dark={{
                                color:'white'
                               }}
                            />
                        }
                        placeholder = "Nombre y Apellido"
                    />
                    <InputsLogin
                        InputLeftElement={
                            <Icon
                               as={<FontAwesome5  name="user"/>}
                               size="sm"
                               m={2}
                               _ligth={{
                                   color:'black'
                               }}
                               _dark={{
                                color:'white'
                               }}
                            />
                        }
                        placeholder = "Username"
                    />
                    <InputsLogin
                        InputLeftElement={
                            <Icon
                               as={<FontAwesome5  name="user"/>}
                               size="sm"
                               m={2}
                               _ligth={{
                                   color:'black'
                               }}
                               _dark={{
                                color:'white'
                               }}
                            />
                        }
                        placeholder = "Email"
                    />
                    <InputsLogin
                         InputLeftElement={
                         <Icon
                            as={<FontAwesome5  name="key"/>}
                            size="sm"
                            m={2}
                            _ligth={{
                             color:'black'
                            }}
                            _dark={{
                            color:'white'
                          }}
                        />
                        }
                       secureTextEntry={true}
                       placeholder = "Contraseña"
                    />
                    <InputsLogin
                        InputLeftElement={
                            <Icon
                             as={<FontAwesome5  name="key"/>}
                              size="sm"
                             m={2}
                             _ligth={{
                            color:'black'
                             }}
                             _dark={{
                            color:'white'
                             }}
                            />
                      }                   
                      secureTextEntry={true}
                     placeholder = "Ingrese de nuevo la contraseña"
                    />
            <View style={styles.buttonStyle}>
                <Button 
                style={styles.buttonDesing}>
                    REGISTRATE
                </Button>
            </View>
            
            <View style={styles.text2}>
                <Text >Ya tienes cuenta?</Text>
                <TouchableOpacity onPress={()=>navigation.navigate("Login")}>
                <Text style={styles.singupText}>INICIA SESION</Text>
                </TouchableOpacity>
            </View>
            
            <View style={styles.lineStyle}>
                <View style={{flex:1, height:1, backgroundColor:'black'}}/>
                <View>
                    <Text style={{width:50, textAlign:'center'}}>Or</Text>
                </View>
                <View style={{flex:1, height:1, backgroundColor:'black'}}/>
            </View>

            <View style={styles.boxStyle}>
                <Box 
                
                style={{width:60, height:60, marginLeft:80}}
                shadow={3}
                _ligth={{
                    color:'black'
                }}
                _dark={{
                 color:'white'
                }}
                >
                    <AspectRatio ratio={1/1}>
                        <Image
                        roundedTop='lg'
                        source={{
                            uri:"https://cdn-icons-png.flaticon.com/512/2965/2965278.png",
                        }}
                        alt="image"
                        />
                    </AspectRatio>
                </Box>
                <Box 
                onPress={()=>navigation.navigate('#')}
                style={{width:60, height:60, marginLeft:100}}
                shadow={3}
                _ligth={{
                    color:'black'
                }}
                _dark={{
                 color:'white'
                }}
                >
                    <AspectRatio ratio={1/1}>
                        <Image
                        roundedTop='lg'
                        source={{
                            uri:"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAOEAAADhCAMAAAAJbSJIAAAAaVBMVEU7WZj///9thLQsT5Oyu9E4V5dhea0+XJonTJJwh7ZUbKIvUZTT2OXDydtsg7R9kLuhrMifqscdRo+5wdbs7vT3+PpLZZ9GYZ3g4+zJz9/Z3eiqtM2GlbpccqZsf61Yb6SSn8CNm76DkrjYxQybAAAES0lEQVR4nO3d21riMBSGYWqJBAvapjtAcdD7v8gRZG+zGoKErOX/HczZdPo+0MIkaRgk0hvc+wRu3p8T1pNyyLtyUtmFdd4YnXJPmyavu4WFydRAQiozRYewatN7n9kvlrbVuXCmZbx+u5SenQorYcA1sToRttKAX8T2WFhIugZ3pcVBWJt7n81NMvVemGf3PpmblOV7YSPvKlynmp2wkvkm3b5N18KJvvep3Cg92QpLiXfSdWm5FQ7FCocQcg9C/kHIPx5ClW2yDstQXzgjF6os1dqMluO3VVHktl4HBDFiocq0efoYng8MdjUiDhOr8Is3Ws3rPhpbodLpatbHYixUuikv4PETpoPpZT5mQnU8VC1RmLWXXH8Mhfrdw8dJqD+8gHyEeuUHZCNM3zyBXITq0RfIRugNZCI0E+HC7MUfyEKotOv/I7gKU4/vaqyESl8D5CDMfD/r2QiNw1AFa6FaXgVkINychWjhlW/S+IXfc+2ShVfeSRkI9Vy68NrLMH5hdiUweqHyG35iJLz6RhO98LLP+2oxn541H0U+u+Z+K61fl0brnwvtY58h1a7D3IUhLd1FIXT8sBh7Lb2LQWjcBjCGfmsLoxC6vYSe619jELqNYCw8l4dGIFRuX2l8TzACoeNg98pzHXoMQreHA18YX4cjJ+G7eOGjeOESQksQhghCCOkgDBGE3/2D0BKEIYLwrwifILQUXrh9wudQ6jaK0aTnf/FQVGPe6i0v1uX7P4rcSfhqfSgoz6nXN7hQX7EE0Rr1fUeGMKp36U2E1G4JIoQVNRwuQkgO+IsQzsULyXMXISyoKQ0Rwk/xQnJKQ4SQ3KRMhJCcHZYgpHcpkyCciX8N6S2uJAjpLa4kCHPxwg9ylYYE4Vi8kB6FkyCkdz6WIKR3fBQgJMcwRAh7Fi0KEE7FC3vOXICQHMMQIfykJ6UECHsWLQoQUg/M3EOY5efP9EzdNr768SzQ7pGgnhMPP0P6Y/dD7baSvbH96kbPv4dZ7hBBCCEdhCGCEEI6CEMEIYR0EIYIQgjpIAwRhBDSQRgiCCGkgzBEEEJIB2GIIISQDsIQQQghHYQhghBCOghDBCGEdBCGCEII6SAMEYQQ0kEYIgghpDsXqjvktq/+k8eBO4RqHL6HsZPw5fniI6tO4UPwnl2Flx4YwmBBCKE1CIMFIYTWIAwWhBBagzBYEEJoDcJgQQihNQiDBSGE1iAMFoQQWotG6Dz3dPFxu4SDx3u0mPS3eLj8uIMu4e/PfzqkXfI4bqdQXnshvTk949JyK6R/YIBxm+1E18KK3hWbb6beCpPGczVH5Kkm2QlzesNhrmX5Xkj/WgvbNm/Sb2FSSLybpkVyENI/m8Qz1SbHwkpLIypdnQiTmTCi0rPkVJhUraRrMW2r5Fz4dbsx9C9+sEllpjiwjpc/1nljbDtn80mbJq+TbuEaOSmHvCsn1SnJbQkr5yDk33/MhazV+vSxGQAAAABJRU5ErkJggg==",
                        }}
                        alt="image"
                        />
                    </AspectRatio>
                </Box>
            </View>
    </View>
  )
}

export default () => {
  return(
  <NativeBaseProvider>
  <Register/>
</NativeBaseProvider>
  )
}



const styles = StyleSheet.create({
  container:{
      flex:1,
      backgroundColor:"#fff",
  },


loginText:{
  fontSize:30,
  fontWeight: "bold"
},
middle:{
  alignItems:'center',
},
text2:{
  paddingTop: 10,
  alignItems:'center',
},
singupText:{
fontWeight: "bold",
paddingTop:5,
},
emailInput:{
  marginTop:10,
  marginRight:5,
},
buttonStyle:{
  marginRight:15,
  marginLeft:15,
  marginTop:30,
},
buttonStyleX:{
  marginTop:12,
  marginRight:15,
  marginLeft:15,
},
buttonDesing:{
  backgroundColor:"#026efd"
},
lineStyle:{
  flexDirection:'row',
  marginTop:30,
  marginLeft:15,
  marginRight:15,
  alignItems:'center'
},
lineStyle:{
  flexDirection:'row',
  marginTop:30,
  marginLeft:15,
  marginRight:15,
  justifyContent:"space-around"
},
logo: {
  width: 100,
  height: 100,
  resizeMode:'contain',
  marginLeft:100,
},
tinylogo: {
  width: 70,
  height: 70,
},
boxStyle:{
  flexDirection:'row'   
},
logoPos:{
  flexDirection:'row',
  marginTop:50,
},
back:{
  marginTop:50,
}
})