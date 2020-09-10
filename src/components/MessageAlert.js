import AwesomeAlert from "react-native-awesome-alerts";
import React from "react";

const MessageAlert = ({
  showAlert,
  alertTitle,
  alertMessage,
  closeFunction,
}) => (
  <AwesomeAlert
    show={showAlert}
    showProgress={false}
    title={alertTitle}
    message={alertMessage}
    closeOnTouchOutside={true}
    closeOnHardwareBackPress={true}
    showCancelButton={false}
    showConfirmButton={true}
    useNativeDriver={true}
    showConfirmButton={true}
    confirmText="Close"
    confirmButtonColor="#E20612"
    onConfirmPressed={closeFunction}
  />
);

export default MessageAlert;
