import { KEYS, TOKEN, USER } from "../settings/constants";
import React, { createContext, useState } from "react";

import { AsyncStorage } from "react-native";
import axios from "axios";

export const AuthContext = createContext();

const AuthContextProvider = (props) => {
  const [isSignedIn, setIsSignedIn] = useState(false);
  const [user, setUser] = useState(null);

  const initializeAuthState = async () => {
    try {
      let token = await AsyncStorage.getItem(TOKEN);
      let user = await AsyncStorage.getItem(USER);
      user = JSON.parse(user);
      if (token !== null && user !== null) {
        await handleSignIn({ token, user });
      } else {
        await handleSignOut();
      }
    } catch (error) {
      await handleSignOut();
    }
  };

  const handleSignIn = async (data) => {
    console.log(data);
    try {
      let { token, user } = data;
      setIsSignedIn(true);
      setUser(user);
      let toStore = [
        [USER, JSON.stringify(user)],
        [TOKEN, token],
      ];
      await AsyncStorage.multiSet(toStore);
      axios.defaults.headers.common["Authorization"] = `Bearer ${data.token}`;
    } catch (error) {
      throw new Error(error);
    }
  };

  const handleSignOut = async () => {
    try {
      await AsyncStorage.multiRemove(KEYS);
      delete axios.defaults.headers.common["Authorization"];
      setIsSignedIn(false);
      setUser(null);
    } catch (error) {
      throw new Error(error);
    }
  };

  return (
    <AuthContext.Provider
      value={{
        isSignedIn,
        user,
        handleSignIn,
        handleSignOut,
        initializeAuthState,
      }}
    >
      {props.children}
    </AuthContext.Provider>
  );
};

export default AuthContextProvider;
