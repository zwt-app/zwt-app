
import React from 'react';

import { VStack, Text, NativeBaseProvider, StatusBar } from 'native-base'
import { Roboto_400Regular, Roboto_700Bold, useFonts } from '@expo-google-fonts/roboto';
import { THEME } from './src/styles/theme';
import Input from './src/components/Input';

export default function App() {
  let [fontsLoaded] = useFonts({
    Roboto_700Bold,
    Roboto_400Regular,
  });


  return (
    <NativeBaseProvider theme={THEME}>
      {
        fontsLoaded ? (
          <>
            <StatusBar barStyle="light-content"
              backgroundColor="transparent"
              translucent={true}
            />
            <VStack
              flex={1}
              p={10}
            >
              <Input
                variant="outline"
                mx="3"
                placeholder="Vessel ID"
                w="full"
                maxWidth="300px"
                bg="white"
                borderWidth={1}

              />
            </VStack>
          </>

        ) : null
      }
    </NativeBaseProvider>

  )
}
