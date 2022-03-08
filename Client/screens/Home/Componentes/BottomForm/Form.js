
import React, { useState } from 'react'
import { Picker,Text, View, StyleSheet,TextInput,  TouchableOpacity,FlatList} from 'react-native'
import {useDispatch,useSelector} from 'react-redux'
import postPublic from '../../../../Store/Actions/ApiActionCreator'
//cuidador
//titulo|| descripcion  ||precio|| tipo de mascota|| tamaño de mascota pequeño,mediano,grande|| imagenes del lugar donde va cuidar

export default function FormCard(){
 const dispatch= useDispatch()
    const [form,setForm]= useState({
    title:'',
    description:'',
    price:'',
    image:'',
    type:[],
    size:[],
    adress:'',
    phone:'',
    author_Id:'',
  })
  
  
  
const [titleC,setTitle]= useState('')
const [descriptionC,setDescription]= useState('')
const [priceC,setPrice]= useState('')
const [imgC,setImg]= useState('')
const [adress,setAdress]=useState('')
const [tel, setTel] = useState('')
function titleTxt (txtt){
  setTitle(txtt)
  
  console.log(titleC)
  setForm({
    ...form,
    
    title:titleC
  })
}
function descripTxt (txtt){
  setDescription(txtt)
  console.log(descriptionC)
  setForm({
    ...form,
    description:descriptionC
  })
}
function priceTxt (txtt){
  setPrice(txtt)
  console.log(priceC)
  setForm({
    ...form,
    price:priceC
  })
}
function imgTxt (txtt){
  setImg(txtt)
  console.log(imgC)
  setForm({
    ...form,
    image:imgC
  })
}
function adressTxt(e){
  setAdress(e)
  console.log(adress)
  setForm({
    ...form,
    adress:adress
  })
}
function telTxt(e){
setTel(e)
console.log(tel)
setForm({
  ...form,
  phone:tel
})
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
          adress:'',
          phone:'',
          author_Id:'',
        })

  }

  
    return (
      <View>
      <View>
        <Text>FORMULARIO DE CUIDADOR</Text>
      </View>

        <View>

        <TextInput
        placeholder="Title"
        onChangeText={(text)=> {
          titleTxt(text)
        }}
                />
        </View>
        <View   style={{
        
        backgroundColor: '#eee',
        borderBottomColor: '#000000',
        borderBottomWidth: 1,
      }}>

        <TextInput
      placeholder='description'
      editable
      maxLength={40}
      onChangeText={(text)=>{
        descripTxt(text)
      }}
      />
      </View>

       <View>

       <TextInput
       placeholder='Precio de su servicio'
       keyboardType = 'numeric'
       maxLength={5}
       onChangeText={(text) =>{
         priceTxt(text)
       }}
       />
       
       </View>
       <View>
         <View>
           <Text>Tipo de mascota</Text>
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
          {
            form.type.map((el,idx) =>
            <View>
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
                   <Text> X </Text> 
                   </TouchableOpacity>
                   </View>
                 </View>  


)

}
        
        </View>
      </View>
        
        
        <View>
<View>
  <Text>Tamaño de mascota</Text>
  </View>
        
        <View>
        <Picker
       
        style={{ height: 50, width: 150 }}
        onValueChange={(itemValue) => typeSize(itemValue)}
      >
         
         <Picker.Item label="Mascota" value="pet"  />
        <Picker.Item label="Pequeño" value="pequeño" />
        <Picker.Item label="Mediano" value="mediano" />
        <Picker.Item label="Grande" value="grande" />
      
      </Picker>
      </View>

         <View>
          {
            form.size.map((el,idx) =>
            <View>
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
                  <Text> X </Text> 
               </TouchableOpacity>
              </View> 
            </View>
              )
          }
        </View>

       

        </View>

        <View>
      <TextInput
placeholder='Numero de telefono...'
 keyboardType = 'numeric'
onChangeText={(text)=>{
  telTxt(text)
}}

/>
      </View>


      <View>
      <TextInput
placeholder='Direccion'
onChangeText={(text)=>{
  adressTxt(text)
}}

/>
      </View>
      
      
      <View>

<TextInput
placeholder='Imagenes donde mantendra la mascota...'
onChangeText={(text)=>{
  imgTxt(text)
}}

/>

</View>
      

     
       
       
      
       

<View>
<TouchableOpacity
onPress={(e)=>handleSubmit(e)}
>
<Text>Send</Text>
</TouchableOpacity>
         
      
</View>
      
    
      
      </View>
    )
  }

const styles = StyleSheet.create({
  container:{}
})
