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
import { MaterialCommunityIcons, MaterialIcons } from "@expo/vector-icons";
import { TouchableOpacity } from "react-native-gesture-handler";
import { useNavigation } from "@react-navigation/native";
function Footer() {
  const navigation = useNavigation();
  const [selected, setSelected] = React.useState(1);
  return (
    <NativeBaseProvider style={{ backgroundColor: "#f9f9f9" }}>
      <Box bg="#f9f9f9" safeAreaTop width="100%" alignSelf="center">
        <Center flex={1}></Center>
        <HStack bg="#f9f9f9" alignItems="center" safeAreaBottom shadow={6}>
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
                  color="#00D2C6"
                  size="sm"
                />
              </TouchableOpacity>
              <Text color="#00D2C6" fontSize="12">
                Inicio
              </Text>
            </Center>
          </Pressable>
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
                  color="#00D2C6"
                  size="sm"
                />
              </TouchableOpacity>
              <Text color="#00D2C6" fontSize="12">
                Perfil
              </Text>
            </Center>
          </Pressable>
        </HStack>
      </Box>
    </NativeBaseProvider>
  );
}

export default Footer;
