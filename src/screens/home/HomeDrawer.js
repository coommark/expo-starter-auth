import { Drawer, DrawerElement, DrawerItem, DrawerItemElement, IndexPath, Layout, Text } from '@ui-kitten/components';
import { ImageBackground, ImageBackgroundProps, StyleSheet } from 'react-native';

import React from 'react';

const DrawerHeader = () => (
  <ImageBackground
    style={styles.header}
    source={require('../../assets/image-background.jpg')}
  />
);

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

const styles = StyleSheet.create({
  header: {
    height: 160,
  },
});
