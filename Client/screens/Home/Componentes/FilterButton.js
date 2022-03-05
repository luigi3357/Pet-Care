import { Text, View , StyleSheet, TouchableOpacity} from 'react-native'
import React, { useState } from 'react'
import { Entypo } from '@expo/vector-icons';
export default function SearchBar(){
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
      <TouchableOpacity  onPress={()=> handleShow()}><Entypo name="menu" size={24} color="black" /></TouchableOpacity>
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
      // flex: 1,
      backgroundColor: '#EEE',
      alignItems: 'center',
      justifyContent: 'center',
      maxHeight : '2rem',
      width : '20vw',
    },
    dropdown : {
      width: '50vw',
      backgroundColor : '#EEE',
      borderColor : "slategray",
      borderBottomWidth : '1px',
      borderLeftWidth : "1px",
      borderRightWidth : "1px",
      position : 'absolute',
      top : "2rem",
      right : '1px'   // cambiar esto por { right : '0px' } si se va a colocar del lado derecho 
      ,borderRadius : '4px'
    },
    filters : {
      padding : '2px',
      borderTopColor : 'slategray',
      borderTopWidth : '1px',
      textAlign : 'center',
      alignItems : "flex-end",
      fontWeight : '900'
    },
    options : {
      alignItems:'flex-end',
      paddingRight:'0.2rem'
    }
  });
  