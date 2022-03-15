import React from "react";
import { Button, Center, NativeBaseProvider } from "native-base";

const Example = () => {
  return <Button shadow={2} ref="http://localhost:3001/Auth/login/federated/google" onPress={() => console.log("hello world")}>
      Click me
    </Button>;
};

    export default LoginGmail = () => {
        return (
          <NativeBaseProvider>
            <Center flex={1} px="3">
                <Example />
            </Center>
          </NativeBaseProvider>
        );
    };