import {
  Button,
  Layout,
  StyleService,
  useStyleSheet,
} from "@ui-kitten/components";
import { EdgeInsets, useSafeArea } from 'react-native-safe-area-context';
import { EmailIcon, EyeIcon, EyeOffIcon } from '../../assets/icons';
import { Formik, FormikProps } from 'formik';
import { ImageBackground, StyleSheet } from 'react-native';
import { ResetPasswordData, ResetPasswordSchema } from '../../data/ResetPasswordModel';

import { FormInput } from '../../components/FormInput';
import { KeyboardAvoidingView } from '../../components/KeyboardAvoidingView';
import MessageAlert from "../../components/MessageAlert";
import ProgressAlert from "../../components/ProgressAlert";
import React from 'react';
import { Routes } from '../../navigation/AppRoutes';
import { Toolbar } from '../../components/ToolBar';

export const ResetPasswordScreen = (props) => {
  const [isLoading, setIsLoading] = React.useState(false);
  const [showMessageAlert, setShowMessageAlert] = React.useState(false);
  const [alertMessage, setAlertMessage] = React.useState("");
  const styles = useStyleSheet(themedStyles);
  const insets = useSafeArea();

  const onFormSubmit = (values) => {
    navigateSignIn();
  };
  const hideAlertMessage = () => {
    setShowMessageAlert(false);
  };

  const navigateSignIn = () => {
    props.navigation.navigate(Routes.SIGN_IN);
  };

  const renderForm = (props) => (
    <>
    <Layout style={styles.formContainer} level="1">
    <FormInput
        id='email'
        style={styles.formControl}
        placeholder='Email'
        keyboardType='email-address'
      />
     
    </Layout>
    <Button
        style={styles.signInButton}
        onPress={props.handleSubmit}
        status="danger"
        >
        Submit
      </Button>
      <Button
          style={styles.signUpButton}
          appearance='ghost'
          status='basic'
          onPress={navigateSignIn}>
          Already have an account?
        </Button>
    </>
  );

  return (
    <KeyboardAvoidingView style={styles.container, { paddingTop: insets.top }}>  
      <ImageBackground
        style={[styles.headerContainer]}
        source={require('../../assets/image-background.jpg')}
      >
      <Toolbar
          appearance='control'
          onBackPress={props.navigation.goBack}
        />
 </ImageBackground>
     
        <Formik
          initialValues={ResetPasswordData.empty()}
          validationSchema={ResetPasswordSchema}
          onSubmit={onFormSubmit}>
          {renderForm}
        </Formik>
        <ProgressAlert showAlert={isLoading} alertTitle="Authenticating..." />
      <MessageAlert
        showAlert={showMessageAlert}
        alertTitle="Oops"
        alertMessage={alertMessage}
        closeFunction={hideAlertMessage}
      />
    </KeyboardAvoidingView>
  );
};

const themedStyles = StyleService.create({
  container: {
    backgroundColor: "background-basic-color-1",
  },
  
  headerContainer: {
    minHeight: 234,
  },
  formContainer: {
    flex: 1,
    paddingHorizontal: 16,
    paddingTop: 32,
  },
  signInLabel: {
    marginTop: 16,
    color: "#000",
  },
  signInButton: {
    marginHorizontal: 16,
  },
  signUpButton: {
    marginVertical: 12,
    marginHorizontal: 16,
  },
  forgotPasswordContainer: {
    flexDirection: "row",
    justifyContent: "flex-end",
  },
  forgotPasswordButton: {
    paddingHorizontal: 0,
  },
  formControl: {
    marginVertical: 4,
    marginTop: 8,
  },
});
