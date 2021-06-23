import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import 'react-native-gesture-handler';
import { Provider as PaperProvider } from 'react-native-paper';
import { Provider as ReduxProvider } from 'react-redux';
import Routers from './Routers';
import store from './store';
import Message from './components/Message';

export default () => {
  return (
    <NavigationContainer>
      <ReduxProvider store={store} key={Math.random()}>
        <PaperProvider>
          <Routers />
          <Message />
        </PaperProvider>
      </ReduxProvider>
    </NavigationContainer>
  );
};
