import * as api from "../../services/home";

import { Button, Card, Divider, List, StyleService, Text, useStyleSheet } from '@ui-kitten/components';
import { CartIcon, MenuIcon } from '../../assets/icons';
import { Dimensions, ImageBackground, ListRenderItemInfo, View } from 'react-native';
import React, { useContext, useEffect, useState } from "react";
import {
  SafeAreaLayout,
  SafeAreaLayoutElement,
  SaveAreaInset,
} from '../../components/SafeAreaLayout';

import { Toolbar } from '../../components/ToolBar';
import { useNavigation } from "@react-navigation/native";

export const LandingScreen = (props) => { 
  const [homeData, setHomeData] = useState([]);
  const navigation = useNavigation();
  const styles = useStyleSheet(themedStyles);

  useEffect(() => {
    const fetchData = async () => {
      const response = await api.getHomeData();      
      setHomeData(response.products);      
    };

    fetchData();
  }, []);


  const renderItemFooter = (info) => (
    <View style={styles.itemFooter}>
      <Text category='s1'>
        {info.item.defaultPrice.price}
      </Text>
      <Button
        style={styles.iconButton}        
        icon={CartIcon}
        // onPress={() => onItemCartPress(info.index)}
      />
    </View>
  );

  const renderItemHeader = (info) => {
    console.log("LOgging from info")
    console.log(info)
   return (
   <ImageBackground
      style={styles.itemHeader}
      source={{
        uri: `http://192.168.43.228:3000/uploads/products/${info.item.defaultImage.image}`,
      }}
    />
  )};

  const renderProductItem = (info) => (
    <Card
      style={styles.productItem}
      header={() => renderItemHeader(info)}
      footer={() => renderItemFooter(info)}
      >
      <Text category='s1'>
        {info.item.name}
      </Text>
      <Text
        appearance='hint'
        category='c1'>
         {info.item.category.name}
      </Text>
    </Card>
  );

  return (
    <SafeAreaLayout
      style={styles.container}
      insets={SaveAreaInset.TOP}>
      <Toolbar
        title='Home'
        backIcon={MenuIcon}
        onBackPress={props.navigation.toggleDrawer}
      />
      <Divider/>
      <List
        contentContainerStyle={styles.productList}
        data={homeData}
        numColumns={2}
        renderItem={renderProductItem}
      />
    </SafeAreaLayout>
  );
}

const themedStyles = StyleService.create({
  container: {
    flex: 1,
  },
  productList: {
    paddingHorizontal: 8,
    paddingVertical: 16,
  },
  productItem: {
    flex: 1,
    margin: 8,
    maxWidth: Dimensions.get('window').width / 2 - 24,
    backgroundColor: 'background-basic-color-1',
  },
  itemHeader: {
    height: 140,
  },
  itemFooter: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  iconButton: {
    paddingHorizontal: 0,
  },
});
