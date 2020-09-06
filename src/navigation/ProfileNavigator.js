import { ProfileScreen } from '../screens/profile';
import React from 'react';
import { Routes } from './AppRoutes';
import { createStackNavigator } from '@react-navigation/stack';

const Stack = createStackNavigator();

export const ProfileNavigator = () => (
  <Stack.Navigator headerMode='none'>
    <Stack.Screen name={Routes.PROFILE} component={ProfileScreen}/>
  </Stack.Navigator>
);