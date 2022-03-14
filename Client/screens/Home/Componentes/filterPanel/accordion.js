import { Divider, View } from "native-base";
import React, { useEffect, useState } from "react";
import { StyleSheet, ScrollView, Text } from "react-native";
import { List } from "react-native-paper";
import { useDispatch, useSelector } from "react-redux";
import { fetchAllPosts, searchKeyword, storeFilter, cleanUpFilters, applyFilters } from "../../../../Store/Actions";

const AccordionList = () => {
  const [filter, setFilter] = useState(null);
  const activeFilters = useSelector(state=>state.activeFilters)
  const dispatch = useDispatch();
  const [isExpanded, setisExpanded] = useState({
    type: false,
    order: false,
    size: false,
  });

  async function addFilters(newFilter){
    if(!activeFilters.includes(newFilter)){
      await dispatch(storeFilter(newFilter));
    }
  }


  useEffect(async () => {
    if (activeFilters.length>0) {
      await dispatch(applyFilters());
      console.log(activeFilters);
    }
  }, [activeFilters]);

  function cleanUp() {
    dispatch(cleanUpFilters())
    dispatch(fetchAllPosts());
  }

  return (
    <>
      <ScrollView showsVerticalScrollIndicator={false} style={styles.Scroll}>
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
            style={styles.item}
            onPress={() => addFilters("perro")}
          />
          <Divider />
          <List.Item
            title="Gato"
            style={styles.item}
            onPress={() => addFilters("gato")}
          />
          <Divider />
          <List.Item
            title="Aves"
            style={styles.item}
            onPress={() => addFilters("aves")}
          />
          <Divider />
          <List.Item
            title="Roedores"
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
            style={styles.item}
            onPress={() => addFilters("pequeño")}
          />
          <Divider />
          <List.Item
            title="Mediano"
            style={styles.item}
            onPress={() => addFilters("mediano")}
          />
          <Divider />
          <List.Item
            title="Grande"
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
            style={styles.item}
            disabled={true}
          />
          <Divider />
          <List.Item
            title="Rating DESC"
            style={styles.item}
            disabled={true}
          />
          <Divider />
          <List.Item
            title="Precio ASC"
            style={styles.item}
            disabled={true}
          />
          <Divider />
          <List.Item
            title="Precio DESC"
            style={styles.item}
            disabled={true}
          />
        </List.Accordion>
        <Divider />
        <List.Item
          title="Limpiar filtros"
          style={styles.item}
          onPress={() => cleanUp()}
        />
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
});

export default AccordionList;
