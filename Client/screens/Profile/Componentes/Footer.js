import React from "react";
import {
  NativeBaseProvider,
  Box,
  Text,
  Heading,
  VStack,
  FormControl,
  Input,
  Link,
  Button,
  Icon,
  HStack,
  Center,
  Pressable,
} from "native-base";
import {
  MaterialCommunityIcons,
  MaterialIcons,
  AntDesign,
} from "@expo/vector-icons";
import { TouchableOpacity } from "react-native-gesture-handler";
import { useNavigation } from "@react-navigation/native";

function Footer() {
  const navigation = useNavigation();
  const [selected, setSelected] = React.useState(1);
  return (
    <NativeBaseProvider>
      <Box flex={1} bg="red" width="100%" alignSelf="center">
        <HStack bg="#f9f9f9" alignItems="center" shadow={1}>
          <Pressable
            opacity={selected === 0 ? 1 : 1}
            py="3"
            flex={1}
            onPress={() => setSelected(0)}
          >
            <Center>
              <TouchableOpacity
                onPress={() => navigation.navigate("HomeScreen")}
              >
                <Icon
                  mb="1"
                  as={
                    <MaterialCommunityIcons
                      name={selected === 0 ? "home" : "home-outline"}
                    />
                  }
                  color="#000"
                  size="sm"
                />
              </TouchableOpacity>
              <Text color="#000" fontSize="12">
                Inicio
              </Text>
            </Center>
          </Pressable>
          <Center>
            <TouchableOpacity
              onPress={() => navigation.navigate("SelectPublic")}
            >
              <AntDesign name="pluscircle" size={35} color="black" />
            </TouchableOpacity>
          </Center>
          <Pressable
            opacity={selected === 3 ? 1 : 1}
            py="2"
            flex={1}
            onPress={() => setSelected(3)}
          >
            <Center>
              <TouchableOpacity onPress={() => navigation.navigate("Profile")}>
                <Icon
                  mb="1"
                  as={<MaterialCommunityIcons name="human-greeting" />}
                  color="#000"
                  size="sm"
                />
              </TouchableOpacity>
              <Text color="#000" fontSize="12">
                Perfil
              </Text>
            </Center>
          </Pressable>
          <Pressable  opacity={selected === 0 ? 1 : 1} py="3" flex={1} onPress={() => setSelected(0)}>
            <Center>
                <TouchableOpacity onPress={()=> navigation.navigate("Maps")}>
              <Icon mb="1" as={<MaterialCommunityIcons name={"google-maps"} />} color="#00D2C6"size="sm" />
              </TouchableOpacity>
              <Text color="#00D2C6"fontSize="12">
                Location
              </Text>
            </Center>
          </Pressable>
        </HStack>
      </Box>
    </NativeBaseProvider>
  )
}

export default Footer;
