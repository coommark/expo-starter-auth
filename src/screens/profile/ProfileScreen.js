import * as api from "../../services/user";

import {
  Avatar,
  Button,
  Divider,
  Layout,
  StyleService,
  Text,
  useStyleSheet,
} from '@ui-kitten/components';
import { ImageBackground, ListRenderItemInfo, ScrollView, View } from 'react-native';
import { MessageCircleIcon, PersonAddIcon, PinIcon } from '../../assets/icons';
import React, { useContext, useEffect, useState } from "react";
import {
  SafeAreaLayout,
  SafeAreaLayoutElement,
  SaveAreaInset,
} from '../../components/SafeAreaLayout';

import { AuthContext } from "../../contexts/AuthContext";
import { MenuIcon } from '../../assets/icons';
import { ProfileNav } from './ProfileNav';
import { StyleSheet } from 'react-native';
import { Toolbar } from '../../components/ToolBar';
import { useNavigation } from "@react-navigation/native";

export const ProfileScreen = (props) => {
  const [profile, setProfile] = useState({});
  const navigation = useNavigation();
  const { handleSignOut } = useContext(AuthContext);
  const styles = useStyleSheet(themedStyle);
  
  useEffect(() => {
    const fetchData = async () => {
      const response = await api.getProfile();
      console.log(response.fullName)
      setProfile(response);
    };

    fetchData();
  }, []);

  const handleLogout = async (values, actions) => {
    try {
      await handleSignOut();
    } catch (error) {

    }
  };

  

  return (
    <SafeAreaLayout
    style={styles.safeArea}
    insets={SaveAreaInset.TOP}>
    <Toolbar
      title='Profile'
      backIcon={MenuIcon}
      onBackPress={props.navigation.toggleDrawer}
    />
    <ScrollView style={styles.contentContainer}>
      <Layout style={styles.header}
        level='1'>         
          <View style={styles.profileContainer}>
          <View style={styles.profileDetailsContainer}>
            <Text category='h4'>
            {profile.fullName}
            </Text>
            <View style={styles.profileLocationContainer}>
              <PinIcon/>
              <Text
                style={styles.profileLocation}
                appearance='hint'
                category='s1'>                  
                {profile.location} 
              </Text>
            </View>
          </View>
          
        </View>
        <Divider style={styles.profileSocialsDivider}/>
        <View style={styles.profileSocialsContainer}>
          <ProfileNav
            hint='Account'
          />
          <ProfileNav
            hint='Orders'
          />
          <ProfileNav
            hint='Edit'
          />
        </View>
      </Layout>
      
    </ScrollView>
     
  </SafeAreaLayout>
  )
};

const themedStyle = StyleService.create({
  safeArea: {
    flex: 1,
    backgroundColor: 'background-basic-color-2',
  },
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  header: {
    padding: 16,
  },
  profileContainer: {
    flexDirection: 'row',
  },
  profileDetailsContainer: {
    flex: 1,
    marginHorizontal: 8,
    marginBottom: 16,
  },
  profileLocationContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  profileLocation: {
    marginHorizontal: 8,
  },
  profileAvatar: {
    marginHorizontal: 8,
  },
  profileButtonsContainer: {
    flexDirection: 'row',
    marginVertical: 24,
  },
  profileButton: {
    flex: 1,
    marginHorizontal: 4,
  },
  profileSocialsDivider: {
    marginHorizontal: -16,
  },
  profileSocialsContainer: {
    flexDirection: 'row',
    justifyContent: 'space-evenly',
    marginTop: 8,
    marginBottom: 8,
  },
});
 