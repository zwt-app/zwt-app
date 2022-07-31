
import React from 'react';
import { VStack, Text, NativeBaseProvider, StatusBar, Heading, Checkbox, HStack } from 'native-base'
import { Roboto_400Regular, Roboto_700Bold, useFonts } from '@expo-google-fonts/roboto';
import { THEME } from './src/styles/theme';
import Input from './src/components/Input';
import Button from './src/components/Button';
import Routes from './src/routes';

export default function App() {
  let [fontsLoaded] = useFonts({
    Roboto_700Bold,
    Roboto_400Regular,
  });

  const problems = [
    {
      id: 1,
      title: 'Problema Mecanico',
      type: 'mecanic',
    },
    {
      id: 2,
      title: 'Tempestade',
      type: 'weather'
    },
    {
      id: 3,
      title: 'Ataque de Tubarao',
      type: 'shark'
    },

  ]


  return (
    <NativeBaseProvider theme={THEME}>
      {
        fontsLoaded ? (
          // <>
          //   <StatusBar barStyle="light-content"
          //     backgroundColor="transparent"
          //     translucent={true}
          //   />
          //   <VStack
          //     p={5}
          //     height="80%"
          //   >
          //     <Heading
          //       mt={10}
          //       fontSize="xl"
          //       mb={10}
          //     >
          //       Bem vindo Operador Martitimo, informe o numero da sua embarcação
          //     </Heading>

          //     {/* <Input
          //       variant="outline"
          //       mx="3"
          //       placeholder="Vessel ID"
          //       w="full"
          //       maxWidth="300px"
          //       bg="white"
          //       borderWidth={1}
          //       mb={5}
          //     /> */}

          //     {
          //       problems.map(data => (
          //         <VStack key={data.id}
          //           mt={5}
          //         >
          //           <HStack
          //             pl={5}
          //           >
          //             <Checkbox
          //               shadow={2}
          //               value={data.type}
          //               accessibilityLabel="This is a dummy checkbox"
          //             />
          //             <Text
          //               ml={15}
          //             >
          //               {data.title}
          //             </Text>
          //           </HStack>
          //         </VStack>
          //       ))
          //     }
          //   </VStack>


          //   <VStack
          //     flex={1}
          //     p={10}
          //   >
          //     <Button
          //       title="Informar Problema"
          //     />
          //   </VStack>
          // </>
          <Routes />
        ) : null
      }
    </NativeBaseProvider>

  )
}
