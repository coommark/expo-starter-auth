import { Input, InputElement, InputProps } from '@ui-kitten/components';

import { AlertTriangleIcon } from '../assets/icons';
import React from 'react';
import { useFormikContext } from 'formik';

export const FormInput = ({ id, ...inputProps }) => {

  const formContext = useFormikContext();
  const { [id]: error } = formContext.errors;

  const fieldProps = {
    status: error && 'danger',
    captionIcon: error && AlertTriangleIcon,
  };

  return (
    <Input
      {...inputProps}
      {...fieldProps}
      caption={error}
      onChangeText={formContext.handleChange(id)}
    />
  );
};
