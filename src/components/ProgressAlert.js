import AwesomeAlert from "react-native-awesome-alerts";
import React from "react";

const ProgressAlert = ({ showAlert, alertTitle }) => (
  <AwesomeAlert
    show={showAlert}
    showProgress={true}
    title={alertTitle}
    closeOnTouchOutside={true}
    closeOnHardwareBackPress={true}
    showCancelButton={false}
    showConfirmButton={false}
    useNativeDriver={true}
  />
);

export default ProgressAlert;
