import {
  Button,
  Layout,
  StyleService,
  useStyleSheet,
} from "@ui-kitten/components";
import { EdgeInsets, useSafeArea } from 'react-native-safe-area-context';
import { EmailIcon, EyeIcon, EyeOffIcon } from '../../assets/icons';
import { Formik, FormikProps } from 'formik';
import { ImageBackground, View } from 'react-native';
import { SignInData, SignInSchema } from '../../data/SignInModel';

import { AuthContext } from "../../contexts/AuthContext";
import { FormInput } from '../../components/FormInput';
import { KeyboardAvoidingView } from '../../components/KeyboardAvoidingView';
import MessageAlert from "../../components/MessageAlert";
import ProgressAlert from "../../components/ProgressAlert";
import React from 'react';
import { Routes } from '../../navigation/AppRoutes';

export const SignInScreen = (props) => {
  const [passwordVisible, setPasswordVisible] = React.useState(false);
  const [isLoading, setIsLoading] = React.useState(false);
  const [showMessageAlert, setShowMessageAlert] = React.useState(false);
  const [alertMessage, setAlertMessage] = React.useState("");
  const styles = useStyleSheet(themedStyles);
  const { handleSignIn } = React.useContext(AuthContext);
  const insets = useSafeArea();
  
  const onFormSubmit = async (values) => {
    console.log(values)
    try {
      setIsLoading(true);
      let response = await api.signIn(values);
      await handleSignIn(response);
    } catch (error) {
      setIsLoading(false);
      actions.setErrors(error);
      setAlertMessage(error.message);
      setShowMessageAlert(true);
    }
  };

  const navigateHome = () => {
    props.navigation.navigate(Routes.HOME);
  };

  const hideAlertMessage = () => {
    setShowMessageAlert(false);
  };

  const navigateSignUp = () => {
    props.navigation.navigate(Routes.SIGN_UP);
  };

  const navigateResetPassword = () => {
    props.navigation.navigate(Routes.RESET_PASSWORD);
  };

  const onPasswordIconPress = () => {
    setPasswordVisible(!passwordVisible);
  };

  const renderForm = (props) => (
    <>
      <Layout style={styles.formContainer} level="1">
        <FormInput
          id="email"
          style={styles.formControl}
          placeholder="Email"
          keyboardType="email-address"
          icon={EmailIcon}
        />
        <FormInput
          id="password"
          style={styles.formControl}
          placeholder="Password"
          secureTextEntry={!passwordVisible}
          icon={passwordVisible ? EyeIcon : EyeOffIcon}
          onIconPress={onPasswordIconPress}
        />
        <View style={styles.forgotPasswordContainer}>
          <Button
            style={styles.forgotPasswordButton}
            appearance="ghost"
            status="basic"
            onPress={navigateResetPassword}
          >
            Forgot your password?
          </Button>
        </View>
      </Layout>
      <Button
        style={styles.signInButton}
        onPress={props.handleSubmit}
        status="danger"
      >
        Sign In
      </Button>

      <Button
        style={styles.signUpButton}
        appearance="ghost"
        status="basic"
        onPress={navigateSignUp}
      >
        Don't have an account? Create
      </Button>
    </>
  );

  return (
    <KeyboardAvoidingView style={styles.container, { paddingTop: insets.top }}>      
      <ImageBackground
        style={styles.headerContainer}
        source={require('../../assets/image-background.jpg')}
      />
     
      <Formik
        initialValues={SignInData.empty()}
        validationSchema={SignInSchema}
        onSubmit={(values, actions) => {
          handleFormSubmit(values, actions);
        }}
      >
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
    justifyContent: "center",
    alignItems: "center",
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
