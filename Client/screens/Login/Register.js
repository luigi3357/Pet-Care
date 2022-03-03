import * as React from "react";
import { Box, Heading, VStack, FormControl, Input, Button, Center, NativeBaseProvider } from "native-base";
import {useNavigation} from '@react-navigation/native'
import axios from "axios";
const Example = () => {
  const [email,onChangeEmail] = React.useState("")
  const [password,onChangePassword] = React.useState("")
    

    
  const data = { email: email, password :password}

    
    const handleSubmit = async (e)=> {
      console.log(data)
      if(!email){
        console.log("nop")
      }else{
        try{
          const log = await  axios.post("http://localhost:3001/register",{data})
      }catch(error){
     
      console.log(error);
    }
  }
      }

      
      
    
      const navigation = useNavigation()
  return <Center w="100%">
      <Box safeArea p="2" w="90%" maxW="290" py="8">
        <Heading size="lg" color="coolGray.800" _dark={{
        color: "warmGray.50"
      }} fontWeight="semibold">
          Welcome
        </Heading>
        <Heading mt="1" color="coolGray.600" _dark={{
        color: "warmGray.200"
      }} fontWeight="medium" size="xs">
          Sign up to continue!
        </Heading>
        <VStack space={3} mt="5">
          <FormControl>
            <FormControl.Label>Email</FormControl.Label>
            <Input
               type="text"
               
               onChangeText={onChangeEmail} />
          </FormControl>
          <FormControl>
            <FormControl.Label>Password</FormControl.Label>
            <Input type="password" />
          </FormControl>
          <FormControl>
            <FormControl.Label>Confirm Password</FormControl.Label>
            <Input type="password" 
            onChangeText={onChangePassword} />
          </FormControl>
          <Button mt="2" colorScheme="indigo"
              onPress={handleSubmit}>
            Sign up
          </Button>
        </VStack>
      </Box>
    </Center>;
};

    export default () => {
        return (
          <NativeBaseProvider>
            <Center flex={1} px="3">
                <Example />
            </Center>
          </NativeBaseProvider>
        );
    };