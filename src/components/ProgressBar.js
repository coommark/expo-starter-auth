import { StyleService, Text, useStyleSheet } from '@ui-kitten/components';
import { View, ViewProps } from 'react-native';

import React from 'react';

export const ProgressBar = ({ progress, text, ...props }) => {
  const styles = useStyleSheet(themedStyle);

  return (
    <View style={styles.container}>
      <View
        {...props}
        style={[styles.progressContainer, props.style]}>
        <View style={[styles.progress, { width: `${progress}%` }]} />
      </View>
      {text && <Text style={styles.text} category='c2'>{text}</Text>}
    </View>
  );
};

const themedStyle = StyleService.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  progressContainer: {
    height: 6,
    borderRadius: 3,
    backgroundColor: 'background-basic-color-2',
    overflow: 'hidden',
  },
  progress: {
    flex: 1,
    backgroundColor: 'color-primary-default',
  },
  text: {
    marginHorizontal: 16,
  },
});
