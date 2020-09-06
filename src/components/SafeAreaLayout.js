import { EdgeInsets, useSafeArea } from 'react-native-safe-area-context';
import { Layout, LayoutElement, LayoutProps } from '@ui-kitten/components';
import { StyleProp, ViewStyle } from 'react-native';

import React from 'react';

export const SaveAreaInset = {
  TOP: 'top',
  BOTTOM:'bottom',
}

export const SafeAreaLayout = (props) => {
  const safeAreaInsets = useSafeArea();

  const { insets, style, ...layoutProps } = props;

  const toStyleProp = (inset) => {
    switch (inset) {
      case SaveAreaInset.BOTTOM:
        return { paddingBottom: safeAreaInsets.bottom };
      case SaveAreaInset.TOP:
        return { paddingTop: safeAreaInsets.top };
    }
  };

  const createInsets = () => {
    return React.Children.map(insets, toStyleProp);
  };

  return (
    <Layout
      {...layoutProps}
      style={[style, createInsets()]}
    />
  );
};
