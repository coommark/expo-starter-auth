import { StyleSheet, View, ViewProps } from 'react-native';

import React from 'react';
import { Text } from '@ui-kitten/components';

export const ProfileNav = (props) => {

  const { style, hint, ...viewProps } = props;

  return (
    <View
      {...viewProps}
      style={[styles.container, style]}>
      <Text
        category='s2'>       
      </Text>
      <Text
        appearance='hint'
        category='c2'>
        {props.hint}
      </Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
  },
});
