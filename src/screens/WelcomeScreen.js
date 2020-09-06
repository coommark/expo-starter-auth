import { Layout, LayoutElement, Text } from '@ui-kitten/components';

import React from 'react';
import { StyleSheet } from 'react-native';

export const WelcomeScreen = (props) => (
  <Layout style={styles.container}>
    <Text style={styles.text} category='h1'>
      Welcome
    </Text>
  </Layout>
);

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  text: {
    textAlign: 'center',
  },
});
