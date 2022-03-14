import { Divider, View } from "native-base";
import React, { useEffect, useState } from "react";
import { StyleSheet, ScrollView, Text } from "react-native";
import { List } from "react-native-paper";
import { useDispatch, useSelector } from "react-redux";
import {
  fetchAllPosts,
  searchKeyword,
  storeFilter,
  cleanUpFilters,
  applyFilters,
  getFiltered,
  deleteSingleFilter
} from "../../../../Store/Actions";

const AccordionList = () => {
  const [order, setOrder] = useState(null);
  const activeFilters = useSelector((state) => state.activeFilters);
  const dispatch = useDispatch();
  const [isExpanded, setisExpanded] = useState({
    type: false,
    order: false,
    size: false,
  });

  function addFilters(newFilter) {
    if (!activeFilters.includes(newFilter)) {
      dispatch(storeFilter(newFilter));
    }else{
      const new_active_filter = activeFilters.filter((v)=>{
        if(v == newFilter) return false
        return true
      })
      dispatch(deleteSingleFilter(new_active_filter))
    }
  }
  function giveOrder(order){
    dispatch(getFiltered(order));
    setOrder(order)
  }

  useEffect(() => {
    if (activeFilters.length > 0) {
      dispatch(applyFilters());
      console.log(activeFilters);
    }
  }, [activeFilters]);

  function cleanUp() {
    dispatch(cleanUpFilters());
    dispatch(fetchAllPosts());
  }

  return (
    <>
      <ScrollView showsVerticalScrollIndicator={false} style={styles.Scroll}>
        <List.Item
          title="Limpiar filtros"
          titleStyle={activeFilters.length>0? styles.clean1 : styles.clean2}
          style={styles.item}
          onPress={() => cleanUp()}
        />
        <List.Accordion
          style={styles.tile}
          id="1"
          title="Tipo"
          description="¿Qué mascota tenés?"
          descriptionStyle={{ fontSize: 9, paddingLeft: 2 }}
          expanded={isExpanded.type}
          onPress={() =>
            setisExpanded({ ...isExpanded, type: !isExpanded.type })
          }
        >
          <Divider />
          <List.Item
            title="Perro"
            titleStyle={activeFilters.includes('perro') ? styles.clean1 : null}
            
            style={styles.item}
            onPress={() => addFilters("perro")}
            />
          <Divider />
          <List.Item
            title="Gato"
            titleStyle={activeFilters.includes('gato') ? styles.clean1 : null}
            style={styles.item}
            onPress={() => addFilters("gato")}
            />
          <Divider />
          <List.Item
            title="Aves"
            titleStyle={activeFilters.includes('aves') ? styles.clean1 : null}
            style={styles.item}
            onPress={() => addFilters("aves")}
            />
          <Divider />
          <List.Item
            title="Roedores"
            titleStyle={activeFilters.includes('roedores') ? styles.clean1 : null}
            style={styles.item}
            onPress={() => addFilters("roedores")}
            />
        </List.Accordion>
        <List.Accordion
          title="Tamaño"
          style={styles.tile}
          description="Tamaño de tu mascota"
          descriptionStyle={{ fontSize: 9, paddingLeft: 2 }}
          expanded={isExpanded.size}
          onPress={() =>
            setisExpanded({ ...isExpanded, size: !isExpanded.size })
          }
          >
          <Divider />
          <List.Item
            title="Pequeño"
            titleStyle={activeFilters.includes('pequeño') ? styles.clean1 : null}
            style={styles.item}
            onPress={() => addFilters("pequeño")}
            />
          <Divider />
          <List.Item
            title="Mediano"
            titleStyle={activeFilters.includes('mediano') ? styles.clean1 : null}
            style={styles.item}
            onPress={() => addFilters("mediano")}
            />
          <Divider />
          <List.Item
            title="Grande"
            titleStyle={activeFilters.includes('grande') ? styles.clean1 : null}
            style={styles.item}
            onPress={() => addFilters("grande")}
            />
        </List.Accordion>
        <List.Accordion
          title="Ordenar"
          style={styles.tile}
          descriptionStyle={{ fontSize: 9 }}
          expanded={isExpanded.order}
          onPress={() =>
            setisExpanded({ ...isExpanded, order: !isExpanded.order })
          }
          >
          <Divider />
          <List.Item 
          title="Rating ASC" 
          titleStyle={order == "ascRating" ? styles.clean1 : null}
          style={styles.item} 
          onPress={() => giveOrder("ascRating")}
          />
          <Divider />
          <List.Item 
          title="Rating DESC" 
          titleStyle={order == "descRating"  ? styles.clean1 : null}
          style={styles.item} 
          onPress={() => giveOrder("descRating")}
           />
          <Divider />
          <List.Item 
          title="Precio ASC" 
          titleStyle={order == "ascPrice"  ? styles.clean1 : null}
          style={styles.item} 
          onPress={() => giveOrder("ascPrice")}
          />
          <Divider />
          <List.Item 
          title="Precio DESC" 
          titleStyle={order == "descPrice"  ? styles.clean1 : null}
          style={styles.item} 
          onPress={() => giveOrder("descPrice")}
          />
        </List.Accordion>
        <Divider />
      </ScrollView>
    </>
  );
};

const styles = StyleSheet.create({
  tile: {
    padding: 0,
    fontSize: 8,
    width: "100%",
    borderRadius: 5,
  },
  item: {
    fontSize: 14,
    paddingVertical: 3,
    borderRadius: 5,
  },
  Scroll: {
    backgroundColor: "#F6F6F6",
    borderRadius: 5,
  },
  clean1: {
    color: 'red',
    fontWeight: "bold",
    marginLeft:25
    
  },
  clean2: {
    color: 'gray',
    fontWeight: "bold",
    marginLeft:25
  },
  active:{
    fontWeight: "bold",
  }
});

export default AccordionList;
