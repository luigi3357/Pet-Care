
import React, { useState } from 'react'
import { Picker,Text, View, StyleSheet,TextInput,  TouchableOpacity,FlatList} from 'react-native'
import {useDispatch,useSelector} from 'react-redux'
import postPublic from '../../../../Store/Actions'
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
    address:'',
    phone:'',
    author_Id:'5345674',
  })

  const [errors, setErrors] = useState({});//estado para setear errores en caso que los haya
  const [disabled, setDisabled] = useState(true);

  function validate(input) {//valida y setea errores
    let errors = {};    

    if (!form.title) errors.title="Campo Requerido";
    if (!form.description) errors.description="Campo Requerido";
    if (!form.price) errors.price="Campo Requerido";
    //if (!form.image) errors.image="Campo Requerido";
    if (!form.type) errors.type="Campo Requerido";
    if (!form.size) errors.size="Campo Requerido";
    if (!form.address) errors.address="Campo Requerido";
    if (!form.phone) errors.phone="Campo Requerido";
   
        return errors;
}

useEffect(() => {
  if (
     !errors.title.hasOwnProperty("title") &&
     !errors.description.hasOwnProperty("description") &&
     !errors.price.hasOwnProperty("price") &&
    //!errors.image.hasOwnProperty("image") &&
     !errors.type.hasOwnProperty("type") &&
     !errors.size.hasOwnProperty("size") &&
     !errors.addres.hasOwnProperty("addres") &&
     !errors.phone.hasOwnProperty("phone")     
  ) {
      setDisabled(false);
  } else {
      setDisabled(true);
  }
}, [errors, setDisabled]);
  
const [titleC,setTitle]= useState('')
const [descriptionC,setDescription]= useState('')
const [priceC,setPrice]= useState('')
const [imgC,setImg]= useState('')
const [address,setAddress]=useState('')
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
function addressTxt(e){
  setAddress(e)
  console.log(address)
  setForm({
    ...form,
    address:address
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
        // setForm({
        //   title:'',
        //   description:'',
        //   price:'',
        //   image:'',
        //   type:[],
        //   size:[],
        //   address:'',
        //   phone:'',
        //   author_Id:'',
        // })

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
                <View>
                {errors.title && (
                        <Text className="errors" >{errors.title}</Text>
                    )}
                </View>
               
                
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
                      <View>
                {errors.description && (
                        <Text className="errors" >{errors.description}</Text>
                    )}
                </View>
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
                       <View>
                {errors.price && (
                        <Text className="errors" >{errors.price}</Text>
                    )}
                </View>
       
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
                {errors.type && (
                        <Text className="errors" >{errors.type}</Text>
                    )}
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
                {errors.size && (
                        <Text className="errors" >{errors.size}</Text>
                    )}
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
<View>
                {errors.phone && (
                        <Text className="errors" >{errors.phone}</Text>
                    )}
                </View>
      </View>


      <View>
      <TextInput
placeholder='Direccion'
onChangeText={(text)=>{
  addressTxt(text)
}}

/>
<View>
                {errors.address && (
                        <Text className="errors" >{errors.address}</Text>
                    )}
                </View>
      </View>
      
      
      {/* <View>

<TextInput
placeholder='Imagenes donde mantendra la mascota...'
onChangeText={(text)=>{
  imgTxt(text)
}}

/>
                       <View>
                {errors.image && (
                        <Text className="errors" >{errors.image}</Text>
                    )}
                </View>

</View> */}
      

     
       
       
      
       

<View>
<TouchableOpacity
disabled={disabled}
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
