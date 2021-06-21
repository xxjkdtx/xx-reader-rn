import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import 'react-native-gesture-handler';
import { Provider as PaperProvider } from 'react-native-paper';
import Routers from './Routers';

export default () => {
  return (
    <NavigationContainer>
      <PaperProvider>
        <Routers />
      </PaperProvider>
    </NavigationContainer>
  );
};
