import * as ENDPOINTS from "../settings/constants";

import axios from "axios";

export const getProfile = async () => {
    try {
      let res = await axios.get(ENDPOINTS.PROFILE);
      return res.data;
    } catch (e) {
      throw handler(e);
    }
  };
  

export const handler = (err) => {
  return err.response.data;
};
