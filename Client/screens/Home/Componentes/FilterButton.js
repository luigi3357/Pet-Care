import { Text, View , StyleSheet, TouchableOpacity} from 'react-native'
import React, { useState } from 'react'
import { Entypo } from '@expo/vector-icons';
import { getFiltered } from '../../../Store/Actions';
import { useDispatch } from 'react-redux';

export default function FilterSelect(){
  const dispatch = useDispatch();

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
    setCategory('');
    setSize('');
    handleShow();
    dispatch(getFiltered(e));

  }

  function handleCategoryChange(e){
    setCategory(e);
    handleShow();
    setFilter('');
    setSize('');
    dispatch(getFiltered(e.toLowerCase()))
  }

  function handleSizeChange(e){
    setSize(e);
    handleShow();
    setFilter('');
    setCategory('');
    dispatch(getFiltered(e));
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
          <Text>Limpiar filtros y ordenamientos</Text>
        </TouchableOpacity>
        
        <TouchableOpacity style={styles.filters} backgroundColor={"white"}>
          <TouchableOpacity onPress={()=> handleShowFilter()}>
             <Text>Ordenar por: {/*<Text style={{color:'#55F'}}>{filter}</Text>*/}</Text> 
          </TouchableOpacity>
        </TouchableOpacity>
        {
          showFilter ? 
          <View>
          <TouchableOpacity style={styles.options} onPress={()=> handleFilterChange('descRating')}>
            <Text>Mayor rating</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.options} onPress={()=> handleFilterChange('ascRating')}>
            <Text>Menor rating</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.options} onPress={()=> handleFilterChange('descPrice')}>
            <Text>Mayor precio</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.options} onPress={()=> handleFilterChange('ascPrice')}>
            <Text>Menor precio</Text>
          </TouchableOpacity>
          </View>
          : null
        }
        <TouchableOpacity style={styles.filters}  onPress={()=> handleShowCategories()}>
          <Text>Elegir categoría:{/* <Text style={{color:'#55F'}}>{category}</Text>*/}</Text>
        </TouchableOpacity>
        {
          showCategories ?
          <View>
            <TouchableOpacity style={styles.options} onPress={()=> handleCategoryChange('Perro')}>
              <Text>Perro</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.options} onPress={()=> handleCategoryChange('Gato')}>
              <Text>Gato</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.options} onPress={()=> handleCategoryChange('Aves')}>
              <Text>Aves</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.options} onPress={()=> handleCategoryChange('Roedores')}>
              <Text>Roedores</Text>
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
            <TouchableOpacity style={styles.options}  onPress={()=> handleSizeChange('pequeño')}>
              <Text>Pequeño</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.options} onPress={()=> handleSizeChange('mediano')}>
              <Text>Mediano</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.options}  onPress={()=> handleSizeChange('grande')}>
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
      right:-100,
      marginTop:15
    },
    dropdown : {
      width: '100%',
      backgroundColor : '#EEE',
      borderColor : "slategray",
      borderBottomWidth : 1,
      borderLeftWidth : 1,
      borderRightWidth : 1,
      // position : 'absolute',
      top : -30,
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
  