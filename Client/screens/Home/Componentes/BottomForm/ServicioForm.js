
import React, { useState,useMemo,useEffect } from 'react'
import { Picker,Text, View, StyleSheet,TextInput,  TouchableOpacity,FlatList,ScrollView,Image} from 'react-native'
import { useNavigation } from "@react-navigation/native";
import {useDispatch,useSelector} from 'react-redux'
import postPublic from '../../../../Store/Actions'
import { AntDesign } from "@expo/vector-icons";

export default function FormCard(){
  const navigation = useNavigation();
  const validarLetra = (name) => {
    const regex = new RegExp(/^[A-Z]+$/i);
    return regex.test(name);
};

 const dispatch= useDispatch()

const  idautor = useSelector((state)=> state.login)

    const [form,setForm]= useState({
    title:'',
    description:'',
    price:'',
    image:[],
    type:[],
    size:[],
    address:'',
    phone:'',
    author_Id:idautor.id,
  })
  function validate(form){ 
    let errors = {};
    if(!form.title){
        errors.title = 'Se requiere un titulo'
  
    } 
     if (!form.description  ){
        errors.description = 'Se requiere una descripcion'
    } 
     if (!form.price){
        errors.price = 'Introduzca el precio de su servicio'
    }
     if (form.price <= 0 ){
        errors.price = 'El precio no puede ser 0 o menor'
    } if (form.type.length <= 0 ){
        errors.type = 'Se solicita el tipo de mascota'
    } if (form.type.length > 5 ){
        errors.type = 'No puede seleccionar 2 veces el mismo'
    } if (form.size.length <= 0  ){
      errors.size = 'Se solicita el tamaño de mascota'
  } if (form.size.length > 3 ){
      errors.size = 'No puede seleccionar 2 veces el mismo'
  } if(!form.address){
    errors.address = 'Se requiere su direccion'
  } if(!form.phone){
    errors.phone = 'Se requiere su numero de telefono'
  }
    
    
    return errors;
}


const [errors,setErrors]= useState({})
  
 
  const disableSubmit = useMemo(() =>{
    if(
      form.title.length > 0 &&
      form.title.length < 150 &&
     
      form.description.length > 0 &&
      form.description.length < 2000 &&
      form.price.length  >= 1 &&
      form.price.length <= 5000 &&
      form.phone.length  >= 1 &&
      form.phone.length <= 50 &&
     form.type.length >= 1 &&
     form.type.length < 5 &&
     form.size.length >= 1 &&
     form.size.length < 4 &&
     form.address.length > 0 &&
     form.address.length < 150 
       ){
          return false;
       }else{
           return true;
       }
   },[form]);
         









function titleTxt (txtt){
  console.log(txtt)
  setForm({...form,
  title:txtt
})
setErrors(validate({
  ...form, 
 
  title:txtt
}))
}


function descripTxt (txtt){
 
  setForm({
    ...form,
    
    description:txtt
  })
  setErrors(validate({
    ...form,    
    description:txtt
  }))
}
  

function priceTxt (txtt){
 
  setForm({
    ...form,
    price:txtt
  })
    
  setErrors(validate({
    ...form,    
    price:txtt
  }))
}
   
function ImageSelect (){

  function setHome(e){
   
    setForm({
      ...form,
      image:['Casa']

    })
    console.log(form.image)
  }
  function setDpto(e){
   
    setForm({
      ...form,
      image:['Departamento']

    })
    console.log(form.image)
  }
  

  
  return (
  <View>
      <View style={{flex:1,flexDirection:'row',marginRight:10,height:100,width:'100%',
    backgroundcolor:'#e3e3e3'}}>
    
<TouchableOpacity

onPress={(e)=>setDpto(e)}
>
<Image
style={{width:100,height:'100%',}}
source={{uri:'https://cdn-icons-png.flaticon.com/512/3530/3530068.png'}}
/>
</TouchableOpacity>

<TouchableOpacity
onPress={(e)=>setHome(e)}
>
<Image
style={{width:100,height:'100%'}}
source={{uri:'https://cdn-icons.flaticon.com/png/512/2544/premium/2544087.png?token=exp=1647205419~hmac=4039a4c601e1267f5546f04639848938'}}
/>
</TouchableOpacity>



</View>
<View>
{ 
  form.image.length > 0 ?
  <Text style={{textAlign:'center',alignItems:'center',justifyContent:'center', fontWeight:'bold',backgroundColor:'skyblue',margin:10,height:30}}
  >En mi {form.image}</Text>
:
null
}
  </View>
</View>
  )
}
function addressTxt(e){
 
  setForm({
    ...form,
   
    address:e
  })
  setErrors(validate({
    ...form,    
    address:e
  }))
}
function telTxt(e){

setForm({
  ...form,
  
  phone:e
})
setErrors(validate({
  ...form,    
  phone:e
}))
}
  
 function typeCheck (e){
  if(e ==="tipo"){
    setForm({
      ...form,
    
    })
  }
  else if(!form.type.includes(e)){
    setForm({
      ...form,
      type:[...form.type,e]
    })
    setErrors(validate({
      ...form,    
      type:[...form.type,e]
    }))
  }
  console.log(form.type)
  }
  function handleDelType(el){
    setForm({
      ...form,
      type: form.type.filter(oc => oc !== el)
    })
  }
  function typeSize (a){
    if(a ==="pet"){
      setForm({
        ...form,
      
      })
    }
    else if(!form.size.includes(a)){
      setForm({
        ...form,
        size:[...form.size,a]
      })
       setErrors(validate({
      ...form,    
      size:[...form.size,a]
    }))
  }
    
    console.log(form.size)
    }
    function handleDelSize(el){
      setForm({
        ...form,
        size: form.size.filter(oc => oc !== el)
      })
    }
  
   
  function handleSubmit(){
    setForm({
      ...form
    })
      dispatch(postPublic(form))
  
      
        console.log(form)
        alert('publicacion creada!')
        setForm({
          title:'',
          description:'',
          price:'',
          image:'',
          type:[],
          size:[],
          address:'',
          phone:'',
          author_Id:'',
        })
        navigation.navigate("HomeScreen")
  }

  
    return (
        <View style={styles.container}>
      <View style={{flexDirection:'row'}}>
      <TouchableOpacity 
      style={{marginTop:10}}
      onPress={() => navigation.goBack()}>
              <AntDesign name={"left"} size={30} color="black" />
            </TouchableOpacity>
        <Text
        style={styles.title}>Servicio que solicita</Text>
      </View>
<ScrollView>
        <View>
      <View><Text style={styles.fontInput}>Titulo de la publicacion</Text></View>
      <View>

     <View>
        <TextInput
        style={styles.input}
        placeholder="Titulo..."
        onChangeText={(text)=> {
          titleTxt(text)
        }}
                />
      </View>
                <View>
                {errors.title && (
                        <Text className="errors"  style={styles.msgError} >{errors.title}</Text>
                    )}
                </View>
               
                </View>  
        </View>
        <View>
          <View><Text  style={styles.fontInput}>Descripcion del cuidado que requiere</Text></View>
          <View>

        
     
<View>
<TextInput
style={[styles.input,styles.textArea]}
      placeholder='Descripcion...'
      editable
      multiline
      numberOfLines={4}
      onChangeText={(text)=>{
        descripTxt(text)
      }}
      />
</View>
      
                      <View>
                {errors.description && (
                        <Text className="errors"
                        style={styles.msgError}
                        >{errors.description}</Text>
                    )}
                </View>
                </View>
      </View>

       <View>
<View><Text  style={styles.fontInput}>Precio dispuesto a pagar </Text></View>
   <View>
      <View>
       <TextInput
        style={styles.input}
       placeholder='Precio de su servicio'
       keyboardType = 'numeric'
       maxLength={9}
       onChangeText={(text) =>{
         priceTxt(text)
       }}
       />
            </View>
                       <View>
                {errors.price && (
                        <Text className="errors" 
                        style={styles.msgError}
                        >{errors.price}</Text>
                    )}
                </View>
                </View>
       </View>
       <View>
         <View>
           <Text  style={styles.fontInput}>Tipo de mascota que posee</Text>
         </View>
      <View>
      <Picker
        
        style={{ height: 50, width: 150 }}
        onValueChange={(itemValue) => typeCheck(itemValue)}
      >
          <Picker.Item label="Tipo" value="tipo"   />
          
        <Picker.Item label="Gatos" value="gato" />
        <Picker.Item label="Perro" value="perro" />
        <Picker.Item label="Aves" value="aves" />
        <Picker.Item label="Roedores" value="roedores" />
      </Picker>
      </View>
      <View>
                {errors.type && (
                        <Text className="errors"  style={styles.msgError} >{errors.type}</Text>
                    )}
                </View>
                <View style={styles.list}>
          {
            form.type.map((el,idx) =>
            <View style={styles.listin} >
              <FlatList
              key={idx}
               data={[{type:el},]}
               renderItem={({item})=>
               <View>
                 <Text>{item.type}</Text>
               </View>
                 
                 }


               />
             <View>
               <TouchableOpacity
                   onPress={()=> {handleDelType(el)}}
                   key={idx}
                   > 
                   <Text  style={{color:'red'}}> X </Text> 
                   </TouchableOpacity>
                   </View>
                 </View>  


)

}
        </View>
        
      </View>
        
        
        <View>
<View>
  <Text  style={styles.fontInput}>Tamaño de su mascota</Text>
  </View>
        
        <View>
        <Picker
       
        style={{ height: 50, width: 150}}
        onValueChange={(itemValue) => typeSize(itemValue)}
      >
         
         <Picker.Item label="Mascota" value="pet"  />
        <Picker.Item label="Pequeño" value="pequeño" />
        <Picker.Item label="Mediano" value="mediano" />
        <Picker.Item label="Grande" value="grande" />
      
      </Picker>
      </View>
      <View>
                {errors.size && (
                        <Text className="errors"  style={styles.msgError} >{errors.size}</Text>
                    )}
                </View>

         <View style={styles.list}>
          {
            form.size.map((el,idx) =>
            <View  style={styles.listin}> 
            <FlatList
              key={idx}
               data={[{key:el},]}
               renderItem={({item})=>
               <View>
                 <Text>{item.key}</Text>
               </View>
                 }

               />
          <View>

               <TouchableOpacity
               onPress={()=> {handleDelSize(el)}}
               key={idx}
               >
                  <Text  style={{color:'red'}}> X </Text> 
               </TouchableOpacity>
              </View> 
            </View>
              )
          }
        </View>

       

        </View>
<View>

  <View><Text  style={styles.fontInput}>¿Donde vive  su mascota?</Text></View>

<View>
<ImageSelect/>
</View>


</View>
        <View>
          <View><Text  style={styles.fontInput}>Numero de telefono</Text></View>
          <View>
      <TextInput
       style={styles.input}
placeholder='Numero de telefono...'
 keyboardType = 'numeric'
onChangeText={(text)=>{
  telTxt(text)
}}

/>
</View>
<View>
                {errors.phone && (
                        <Text className="errors" 
                        style={styles.msgError} >{errors.phone}</Text>
                    )}
                </View>
      </View>


      <View>
        <View><Text  style={styles.fontInput}>Direccion donde vive la mascota</Text></View>

       
        <View>
      <TextInput
       style={styles.input}
placeholder='Direccion'
onChangeText={(text)=>{
  addressTxt(text)
}}
/>
</View>
<View>
                {errors.address && (
                        <Text className="errors" 
                        style={styles.msgError}>{errors.address}</Text>
                    )}
                </View>
      </View>
      
      
     
      

     
       
       
      
       

<View>
<TouchableOpacity
style={disableSubmit ?  styles.btnerror: styles.btn}
disabled={disableSubmit}
onPress={(e)=>handleSubmit(e)}
>
<Text
style={styles.btntxt}
>Send</Text>
</TouchableOpacity>
         
      
</View>
      
    
</ScrollView>
      </View>
    )
  }


const styles = StyleSheet.create({
  container:{
    flex:1,
    justifyContent:'space-between',
    margin:5,
    padding:22,
  },
  input:{
height:40,
borderColor:'#ccc',
borderWidth:2,
marginBottom:20,
  },
  textArea:{
height:70,
  },
  title:{
textAlign:'center',
fontSize:18,
marginTop:10,
marginBottom:10,
backgroundColor:'skyblue'
  },
  fontInput:{
 fontWeight:'bold',
  },

btn:{
  backgroundColor:'skyblue',
  paddingTop:15,
  paddingBottom:15,

},
btnerror:{
  backgroundColor:'red',
  paddingTop:15,
  paddingBottom:15,

},
btntxt:{
  textAlign:'center',
  fontWeight:'bold',
  color:'white',
},
msgError:{

  textAlign:'center',
  textAlignVertical:'center',
  height:30,
  fontSize:15,
  color:'red',
},
list:{
  flexDirection:'row',
  flex:1,
  padding:10,
  
},
listin:{
  flexDirection:'row',
  paddingBottom:15,
  padding:15,
  borderWidth:1,
  borderRadius:4,
  borderColor:'skyblue'
  
}

 
    

})