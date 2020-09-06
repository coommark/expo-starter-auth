import { LandingScreen } from '../screens/landing';
import React from 'react';
import { Routes } from './AppRoutes';
import { createStackNavigator } from '@react-navigation/stack';

const Stack = createStackNavigator();

export const LandingNavigator = () => (
  <Stack.Navigator headerMode='none'>
    <Stack.Screen name={Routes.LANDING} component={LandingScreen}/>
  </Stack.Navigator>
);