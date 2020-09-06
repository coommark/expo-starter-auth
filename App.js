import "react-native-gesture-handler";

import { ApplicationProvider, IconRegistry } from '@ui-kitten/components';
import { light, mapping } from '@eva-design/eva';

import { AppNavigator } from './src/navigation/AppNavigator';
import { EvaIconsPack } from '@ui-kitten/eva-icons';
import { NavigationContainer } from '@react-navigation/native';
import React from 'react';
import { Routes } from './src/navigation/AppRoutes';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import { default as theme } from "./src/assets/theme.json";

export default () => {

  const isAuthorized = true;

  return (
    <>
      <IconRegistry icons={EvaIconsPack}/>
      <ApplicationProvider mapping={mapping} theme={{ ...light, ...theme }}>
        <SafeAreaProvider>
          <NavigationContainer>
            <AppNavigator initialRouteName={isAuthorized ? Routes.HOME : Routes.AUTH}/>
          </NavigationContainer>
        </SafeAreaProvider>
      </ApplicationProvider>
    </>
  );
};
