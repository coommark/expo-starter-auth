import * as ENDPOINTS from "../settings/constants";

import axios from "axios";

export const getHomeData = async () => {
    try {
      let res = await axios.get(ENDPOINTS.HOME);
      return res.data;
    } catch (e) {
      throw handler(e);
    }
  };
  

export const handler = (err) => {
  return err.response.data;
};
