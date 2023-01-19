// All user related database operations can be defined here.

import { SYSTEM_ERROR } from "../config/CONSTANTS";
import axios from 'axios'
import { GET_HOME_PAGE_API } from "./CONSTANTS";


export const getHomeData = (id) => {
  console.log("homeServices > getHomeData called...");
  console.log('api url=', GET_HOME_PAGE_API)
  return new Promise((resolve, reject) => {
    try {
      // do an SDK, DB call or API endpoint axios call here and return the promise.
      axios
      .get(GET_HOME_PAGE_API)
      .then((res) => {
        console.log("getHomeData > axios res=", res);
        resolve(res.data);
      })
      .catch((err) => {
        console.log("getHomeData > axios err=", err);
        reject("Error in getHomeData axios!");
      });
    } catch (error) {
      console.error("in userServices > getUserDetails, Err===", error);
      reject(SYSTEM_ERROR);
    }
  });
};
