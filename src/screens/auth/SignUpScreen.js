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
import { SignUpData, SignUpSchema } from '../../data/SignUpModel';

import { FormInput } from '../../components/FormInput';
import { KeyboardAvoidingView } from '../../components/KeyboardAvoidingView';
import MessageAlert from "../../components/MessageAlert";
import ProgressAlert from "../../components/ProgressAlert";
import React from 'react';
import { Routes } from '../../navigation/AppRoutes';
import { Toolbar } from '../../components/ToolBar';

export const SignUpScreen = (props) => {
  const insets = useSafeArea();
  const [passwordVisible, setPasswordVisible] = React.useState(false);
  const [isLoading, setIsLoading] = React.useState(false);
  const [showMessageAlert, setShowMessageAlert] = React.useState(false);
  const [alertMessage, setAlertMessage] = React.useState("");
  const styles = useStyleSheet(themedStyles);
  
  const onPasswordIconPress = () => {
    setPasswordVisible(!passwordVisible);
  };
  const onFormSubmit = (values) => {
    navigateHome();
  };
  const hideAlertMessage = () => {
    setShowMessageAlert(false);
  };
  const navigateHome = () => {
    props.navigation.navigate(AppRoute.HOME);
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
        icon={EmailIcon}
      />
      <FormInput
        id='password'
        style={styles.formControl}
        placeholder='Password'
        secureTextEntry={!passwordVisible}
          icon={passwordVisible ? EyeIcon : EyeOffIcon}
          onIconPress={onPasswordIconPress}
      />
      <FormInput
        id='username'
        style={styles.formControl}
        placeholder='Username'
      />
      
      </Layout>
      <Button
        style={styles.signInButton}
        onPress={props.handleSubmit}
        status="danger">
        Sign Up
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
          initialValues={SignUpData.empty()}
          validationSchema={SignUpSchema}
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
