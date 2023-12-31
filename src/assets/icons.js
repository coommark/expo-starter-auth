import { Icon, IconElement, useTheme } from '@ui-kitten/components';

import { ImageStyle } from 'react-native';
import React from 'react';

export const MenuIcon = (style) => (
  <Icon {...style} name="menu" tintColor="#E20612" />
);

export const BackIcon = (style) => (
  <Icon {...style} name='arrow-back'/>
);

export const LayoutIcon = (style) => (
  <Icon {...style} name='layout-outline'/>
);

export const PersonIcon = (style) => (
  <Icon {...style} name='person-outline'/>
);

export const MoreVerticalIcon = (style) => (
  <Icon {...style} name='more-vertical'/>
);

export const LogoutIcon = (style) => (
  <Icon {...style} name='log-out-outline'/>
);

export const InfoIcon = (style) => (
  <Icon {...style} name='info-outline'/>
);

export const AlertTriangleIcon = (style) => (
  <Icon {...style} name='alert-triangle-outline'/>
);

export const EyeIcon = (style) => (
  <Icon {...style} name='eye-outline'/>
);

export const EyeOffIcon = (style) => (
  <Icon {...style} name='eye-off-outline'/>
);


export const HomeIcon = (style) => (
  <Icon {...style} name='home-outline'/>
);


export const DoneIcon = (style) => (
  <Icon {...style} name='checkmark-outline'/>
);

export const DoneAllIcon = (style) => (
  <Icon {...style} name='done-all-outline'/>
);

export const GridIcon = (style) => (
  <Icon {...style} name='grid-outline'/>
);

export const SearchIcon = (style) => (
  <Icon {...style} name='search-outline'/>
);

export const PlusIcon = (style) => (
  <Icon {...style} name='plus-outline'/>
);

export const LoginIcon = (style) => <Icon {...style} name="log-in" />;

export const PinIcon = () => {
  const theme = useTheme();
  return (
    <Icon width={16} height={16} fill={theme['text-hint-color']} name='pin'/>
  );
};





