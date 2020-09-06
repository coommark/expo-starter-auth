import { AboutScreen, HomeDrawer, HomeTabBar } from '../screens/home';
import { GridIcon, HomeIcon, InfoIcon, PersonIcon } from '../assets/icons';

import { LandingNavigator } from './LandingNavigator';
import { ProfileNavigator } from './ProfileNavigator';
import React from 'react';
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

export const HomeNavigator = () => (
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
  </Drawer.Navigator>
);