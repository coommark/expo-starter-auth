import { AboutScreen, HomeDrawer, HomeTabBar } from '../screens/home';
import { GridIcon, HomeIcon, InfoIcon, LoginIcon, PersonIcon } from '../assets/icons';
import React, { useContext, useEffect } from "react";

import { AuthContext } from "../contexts/AuthContext";
import { AuthNavigator } from './AuthNavigator';
import { LandingNavigator } from './LandingNavigator';
import { ProfileNavigator } from './ProfileNavigator';
import { Routes } from './AppRoutes';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createDrawerNavigator } from '@react-navigation/drawer';

const Drawer = createDrawerNavigator();
const BottomTab = createBottomTabNavigator();

const HomeBottomNavigator = () => (
  <BottomTab.Navigator tabBar={props => <HomeTabBar {...props} />}>
    <BottomTab.Screen
      name={Routes.LANDING}
      component={LandingNavigator}
      options={{ title: 'Explore', tabBarIcon: GridIcon }}
    />
    <BottomTab.Screen
      name={Routes.PROFILE}
      component={ProfileNavigator}
      options={{ title: 'Profile', tabBarIcon: PersonIcon }}
    />
  </BottomTab.Navigator>
);

export const HomeNavigator = () => {
  const { isSignedIn, initializeAuthState } = useContext(AuthContext);
  useEffect(() => {
    initContext();
  }, []);

  const initContext = async () => {
    try {
      await initializeAuthState();
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <Drawer.Navigator drawerContent={props => <HomeDrawer {...props} />}>
      <Drawer.Screen
        name={Routes.HOME}
        component={HomeBottomNavigator}
        options={{ title: 'Home', drawerIcon: HomeIcon }}
      />
      <Drawer.Screen
        name={Routes.ABOUT}
        component={AboutScreen}
        options={{ title: 'About', drawerIcon: InfoIcon }}
      />
      {!isSignedIn && (
          <Drawer.Screen
            name={Routes.SIGN_IN}
            component={AuthNavigator}
            options={{ title: `${Routes.SIGN_IN}`, drawerIcon: LoginIcon }}
          />
        )}
        
    </Drawer.Navigator>
  )}
  