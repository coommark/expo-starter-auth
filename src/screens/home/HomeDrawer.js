import {
  Avatar,
  Drawer,
  DrawerElement,
  DrawerItem,
  DrawerItemElement,
  Icon,
  IndexPath,
  Layout,
  StyleService,
  Text,
  useStyleSheet,
} from '@ui-kitten/components';

import React from 'react';
import { View } from 'react-native';
import { useSafeArea } from "react-native-safe-area-context";

const DrawerHeader = () =>  {
  const insets = useSafeArea();
  const styles = useStyleSheet(themedStyles);
  return (
    <Layout style={styles.header} level="2">
        <View style={styles.profileContainer}>
          <Avatar
            size="giant"
            source={require("../../assets/images/icon.png")}
          />
          <Text style={styles.profileName} category="h6">
            Food Yours
          </Text>
        </View>
      </Layout>
  )
} ;

const Footer = (evaProps) => (
  <Layout {...evaProps}>
    <Text category='c2'></Text>
  </Layout>
);

export const HomeDrawer = (props) => {
  
  const onItemSelect = (index) => {
    const selectedTabRoute = props.state.routeNames[index.row];
    props.navigation.navigate(selectedTabRoute);
    props.navigation.closeDrawer();
  };

  const createDrawerItemForRoute = (route, index) => {
    const { options } = props.descriptors[route.key];
    return (
      <DrawerItem
        key={index}
        title={route.name}
        accessoryLeft={options.drawerIcon}
      />
    );
  };

  return (
    <Drawer
      header={DrawerHeader}
      footer={Footer}
      onSelect={onItemSelect}>
      {props.state.routes.map(createDrawerItemForRoute)}
    </Drawer>
  );
};

const themedStyles = StyleService.create({
  safeArea: {
    flex: 1,
  },
  header: {
    height: 128,
    paddingHorizontal: 16,
    justifyContent: "center",
  },
  profileContainer: {
    marginTop: 36,
    flexDirection: "row",
    alignItems: "center",
  },
  profileName: {
    marginHorizontal: 16,
  },
  logoutText: {
    color: "color-primary-default",
  },
  icon: {
    width: 22,
    height: 22,
    marginRight: 8,
  },

  logouContainer: {
    marginHorizontal: 16,
    flexDirection: "row",
    alignItems: "center",
    marginBottom: 16,
    color: "color-primary-default",
  },
});
