import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import Home from './pages/Home';
import Bookshelf from './pages/Bookshelf';
import BookReader from './pages/BookReader';
import { RootStackParamList } from './models/BookModel';

const Stack = createStackNavigator<RootStackParamList>();

export default () => {
  const getDefaultTitleOption = (title: string, options?: any) => {
    if (options) {
      return options;
    } else {
      return {
        title: title,
        headerStyle: {
          backgroundColor: '#f4511e',
        },
        headerTintColor: '#fff',
        headerTitleStyle: {
          fontWeight: 'bold',
          textAlign: 'center',
        },
      };
    }
  };
  return (
    <Stack.Navigator initialRouteName="Home">
      <Stack.Screen
        name="Home"
        component={Home}
        options={getDefaultTitleOption('首页')}
      />
      <Stack.Screen
        name="Bookshelf"
        component={Bookshelf}
        options={getDefaultTitleOption('书架')}
      />
      <Stack.Screen
        name="BookReader"
        component={BookReader}
        options={{ headerShown: false }}
      />
    </Stack.Navigator>
  );
};
