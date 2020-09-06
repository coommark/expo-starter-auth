import { AuthNavigator } from './AuthNavigator';
import { HomeNavigator } from './HomeNavigator';
import React from 'react';
import { Routes } from './AppRoutes';
import { createStackNavigator } from '@react-navigation/stack';

const Stack = createStackNavigator();

export const AppNavigator = (props) => (
  <Stack.Navigator {...props} headerMode='none'>
    <Stack.Screen name={Routes.HOME} component={HomeNavigator}/>
    <Stack.Screen name={Routes.AUTH} component={AuthNavigator}/>
  </Stack.Navigator>
);
