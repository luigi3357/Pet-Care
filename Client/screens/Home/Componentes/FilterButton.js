import { Text, View , StyleSheet, TouchableOpacity} from 'react-native'
import React, { useState } from 'react'
import { Entypo } from '@expo/vector-icons';

export default function FilterSelect(){
  const [show, setShow] = useState(false);
  const [filter, setFilter] = useState('');
  const [showFilter, setShowFilter] = useState(false);
  const [category, setCategory] = useState('');
  const [showCategories, setShowCategories] = useState(false);
  const [size, setSize] = useState('');
  const [showSizes, setShowSizes] = useState(false);

  function handleShow(){
    setShow(!show);
    if(show) {
      setShowFilter(false);
      setShowCategories(false);
      setShowSizes(false);
    }
  }

  function handleShowFilter(){
    setShowFilter(!showFilter);
    setShowCategories(false);
    setShowSizes(false);
  }

  function handleShowCategories(){
    setShowCategories(!showCategories);
    setShowFilter(false);
    setShowSizes(false);
  }

  function cleanFilters(){
    handleShow();
    setFilter('');
    setCategory('');
    setSize('');
  }

  function handleFilterChange(e){
    setFilter(e);
    handleShow();
  }

  function handleCategoryChange(e){
    setCategory(e);
    handleShow();
  }

  function handleSizeChange(e){
    setSize(e);
    handleShow();
  }

  function handleShowSizes(){
    setShowSizes(!showSizes);
    setShowFilter(false);
    setShowCategories(false);
  }


  return (
    
    <View style={styles.container}>
      {
        show? null :
      <TouchableOpacity  onPress={()=> handleShow()}><Entypo name="menu" size={35} color="black" /></TouchableOpacity>
      }
      { show ?
      <View style={styles.dropdown}>
        <TouchableOpacity style={styles.filters} onPress={()=>cleanFilters()}>
          <Text>Limpiar filtros</Text>
        </TouchableOpacity>
        
        <TouchableOpacity style={styles.filters} backgroundColor={"white"} onPress={()=> console.log("botón ordenamiento")}>
          <TouchableOpacity onPress={()=> handleShowFilter()}>
            <Text>Ordenar por: <Text style={{color:'#55F'}}>{filter}</Text></Text>
          </TouchableOpacity>
        </TouchableOpacity>
        {
          showFilter ? 
          <View>
          <TouchableOpacity style={styles.options} onPress={()=> handleFilterChange('Zona')}>
            <Text>Zona</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.options} onPress={()=> handleFilterChange('Precio')}>
            <Text>Precio</Text>
          </TouchableOpacity>
          </View>
          : null
        }
        <TouchableOpacity style={styles.filters}  onPress={()=> handleShowCategories()}>
          <Text>Elegir categoría: <Text style={{color:'#55F'}}>{category}</Text></Text>
        </TouchableOpacity>
        {
          showCategories ?
          <View>
            <TouchableOpacity style={styles.options} onPress={()=> handleCategoryChange('Categoría 1')}>
              <Text>Categoría 1</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.options} onPress={()=> handleCategoryChange('Categoría 2')}>
              <Text>Categoría 2</Text>
            </TouchableOpacity>
          </View>
          : null
        }
        
        <TouchableOpacity style={styles.filters}  onPress={()=> handleShowSizes()}>
          <Text>Filtrar por tamaño: <Text style={{color:'#55F'}}>{size}</Text></Text>
        </TouchableOpacity>
        {
          showSizes ?
          <View>
            <TouchableOpacity style={styles.options}  onPress={()=> handleSizeChange('Pequeño')}>
              <Text>Pequeño</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.options} onPress={()=> handleSizeChange('Mediano')}>
              <Text>Mediano</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.options}  onPress={()=> handleSizeChange('Grande')}>
              <Text>Grande</Text>
            </TouchableOpacity>
          </View>
          : null
        }
      </View>
      : null
      }
    </View>
    
  );
    
  }


  const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#00D2C6', //FILTER __ yellow
      alignItems: 'center',
      justifyContent:'center',
      height : '90%',
      width : '60%',
      right:-80,
    },
    dropdown : {
      width: '100%',
      backgroundColor : '#EEE',
      borderColor : "slategray",
      borderBottomWidth : 1,
      borderLeftWidth : 1,
      borderRightWidth : 1,
      // position : 'absolute',
      top : 30,
      right : 1   // cambiar esto por { right : '0px' } si se va a colocar del lado derecho 
      ,borderRadius : 4
    },
    filters : {
      width:'100%',
      padding : 2,
      borderTopColor : 'slategray',
      borderTopWidth : 1,
      textAlign : 'center',
      alignItems : "flex-end",
      fontWeight : '900'
    },
    options : {
      alignItems:'center',
      paddingRight:0.2
    }
  });
  