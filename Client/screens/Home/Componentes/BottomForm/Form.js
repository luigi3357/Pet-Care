
import React, { useState,useMemo,useEffect } from 'react'
import { Picker,Text, View, StyleSheet,TextInput,  TouchableOpacity,FlatList} from 'react-native'
import {useDispatch,useSelector} from 'react-redux'
import postPublic from '../../../../Store/Actions'
//cuidador
//titulo|| descripcion  ||precio|| tipo de mascota|| tamaño de mascota pequeño,mediano,grande|| imagenes del lugar donde va cuidar

export default function FormCard(){
 
  const validarLetra = (name) => {
    const regex = new RegExp(/^[A-Z]+$/i);
    return regex.test(name);
};

 const dispatch= useDispatch()

    const [form,setForm]= useState({
    title:'',
    description:'',
    price:'',
    image:[],
    type:[],
    size:[],
    address:'',
    phone:'',
    author_Id:'5345674',
  })
  function validate(form){ 
    let errors = {};
    if(!form.title){
        errors.title = 'Se requiere un titulo'
  
    } if (form.title && !validarLetra(form.title))
    {errors.title = "Solo Letras en el titulo"
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
    } if (form.type.length > 3 ){
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
        form.title.length < 30 &&
        validarLetra(form.title)&&
        form.description.length > 0 &&
        form.description.length < 2000 &&
        form.price  >= 1 &&
        form.price <= 5000 &&
        form.phone.length  >= 1 &&
        form.phone.length <= 30 &&
       form.type.length >= 1 &&
       form.type.length < 4 &&
       form.size.length >= 1 &&
       form.size.length < 4 &&
       form.address.length > 0 &&
       form.address.length < 30 
       ){
          return false;
       }else{
           return true;
       }
   },[form]);
         

const [imgC,setImg]= useState('')


useEffect(()=> {

},[form])




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
   
function imgTxt (txtt){
  setImg(txtt)
  console.log(imgC)
  setForm({
    ...form,
    image:imgC
  })
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
      <View style={styles.container}>
      <View>
        <Text>FORMULARIO DE CUIDADOR</Text>
      </View>

        <View>
      <View><Text>Titulo publicacion</Text></View>
      <View>

     <View>
        <TextInput
        placeholder="Title"
        onChangeText={(text)=> {
          titleTxt(text)
        }}
                />
      </View>
                <View>
                {errors.title && (
                        <Text className="errors" >{errors.title}</Text>
                    )}
                </View>
               
                </View>  
        </View>
        <View>
          <View><Text>Descripcion de la publicacion</Text></View>
          <View>

        
     
<View>
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
                {errors.description && (
                        <Text className="errors" >{errors.description}</Text>
                    )}
                </View>
                </View>
      </View>

       <View>
<View><Text>Precio del servicio</Text></View>
   <View>
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
                {errors.price && (
                        <Text className="errors" >{errors.price}</Text>
                    )}
                </View>
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
          <View><Text>Numero de telefono</Text></View>
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
                {errors.phone && (
                        <Text className="errors" >{errors.phone}</Text>
                    )}
                </View>
      </View>


      <View>
        <View><Text>Direccion</Text></View>

       
        <View>
      <TextInput
placeholder='Direccion'
onChangeText={(text)=>{
  addressTxt(text)
}}
/>
</View>
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
disabled={disableSubmit}
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
