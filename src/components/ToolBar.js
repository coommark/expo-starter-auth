import {BackIcon, MenuIcon, MoreVerticalIcon} from '../assets/icons';
import {
  OverflowMenu,
  StyleType,
  TopNavigation,
  TopNavigationAction,
  TopNavigationActionElement,
  TopNavigationProps,
} from '@ui-kitten/components';

import { ImageProps } from 'react-native';
import React from 'react';

export const Toolbar = (props) => {
  const { menu, backIcon, menuIcon, onBackPress, ...topNavigationProps } = props;
  const [menuVisible, setMenuVisible] = React.useState(false);

  const onMenuSelect = (index) => {
    setMenuVisible(false);
  };

  const onMenuActionPress = () => {
    setMenuVisible(!menuVisible);
  };

  const renderMenuAnchorAction = () => (
    <TopNavigationAction
      icon={props.menuIcon || MenuIcon}
      onPress={onMenuActionPress}
    />
  );

  const renderMenuAction = () => (
    <OverflowMenu
      visible={menuVisible}
      anchor={renderMenuAnchorAction}
      placement='bottom end'
      onSelect={onMenuSelect}
      onBackdropPress={onMenuActionPress}>
      {menu()}
    </OverflowMenu>
  );

  const renderBackAction = () => (
    <TopNavigationAction
      icon={props.backIcon || BackIcon}
      onPress={onBackPress}
    />
  );

  return (
    <TopNavigation
      {...topNavigationProps}
      alignment='center'
      accessoryLeft={onBackPress && renderBackAction}
      accessoryRight={menu && renderMenuAction}
    />
  );
};