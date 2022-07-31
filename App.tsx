
import React from 'react';
import { NativeBaseProvider } from 'native-base'
import { Roboto_400Regular, Roboto_700Bold, useFonts } from '@expo-google-fonts/roboto';
import { THEME } from './src/styles/theme';

import Routes from './src/routes';

export default function App() {
  let [fontsLoaded] = useFonts({
    Roboto_700Bold,
    Roboto_400Regular,
  });

  return (
    <NativeBaseProvider theme={THEME}>
      {
        fontsLoaded ? (
          <Routes />
        ) : null
      }
    </NativeBaseProvider>

  )
}
