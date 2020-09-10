import * as ENDPOINTS from "../settings/constants";

import axios from "axios";

export const signIn = async (data) => {
  try {
    let res = await axios.post(ENDPOINTS.SIGN_IN, data);

    return res.data;
  } catch (e) {
    throw handler(e);
  }
};

export const signUp = async (data) => {
  try {
    let res = await axios.post(ENDPOINTS.SIGN_UP, data);

    return res.data;
  } catch (e) {
    throw handler(e);
  }
};

export const handler = (err) => {
  return err.response.data;
};
