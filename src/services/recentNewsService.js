// All user related database operations can be defined here.

import { SYSTEM_ERROR } from "../config/CONSTANTS";
import axios from 'axios'
import { GET_RECENT_NEWS_API } from "./CONSTANTS";


export const getRecentNewsData = () => {
  return new Promise((resolve, reject) => {
    try {
      axios
      .get(GET_RECENT_NEWS_API)
      .then((res) => {
        console.log("recent-news > axios res=", res);
        resolve(res.data);
      })
      .catch((err) => {
        console.log("recent-news > axios err=", err);
        reject("Error in recent-news axios!");
      });
    } catch (error) {
      reject(SYSTEM_ERROR);
    }
  });
};
