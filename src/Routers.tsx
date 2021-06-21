import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import Home from './pages/Home';
import Bookshelf from './pages/Bookshelf';

const Stack = createStackNavigator();

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
    </Stack.Navigator>
  );
};
