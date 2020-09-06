import { ResetPasswordScreen, SignInScreen, SignUpScreen } from '../screens/auth';

import React from 'react';
import { Routes } from './AppRoutes';
import { createStackNavigator } from '@react-navigation/stack';

const Stack = createStackNavigator();

export const AuthNavigator = () => (
  <Stack.Navigator headerMode='none'>
    <Stack.Screen name={Routes.SIGN_IN} component={SignInScreen}/>
    <Stack.Screen name={Routes.SIGN_UP} component={SignUpScreen}/>
    <Stack.Screen name={Routes.RESET_PASSWORD} component={ResetPasswordScreen}/>
  </Stack.Navigator>
);