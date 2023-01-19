// All user related database operations can be defined here.

import { SYSTEM_ERROR } from "../config/CONSTANTS";
import axios from 'axios'
import { GET_RECENT_NEWS_API,GET_RECENT_CAMPAIGN_API } from "./CONSTANTS";


export const getRecentNewsData = () => {
  return new Promise((resolve, reject) => {
    try {
      axios
      .get(GET_RECENT_NEWS_API)
      .then((res) => {
        resolve(res.data);
      })
      .catch((err) => {
        reject("Error in recent-news axios!");
      });
    } catch (error) {
      reject(SYSTEM_ERROR);
    }
  });
};

export const getRecentCampaignData = () => {
  return new Promise((resolve, reject) => {
    try {
      axios
      .get(GET_RECENT_CAMPAIGN_API)
      .then((res) => {
        console.log("recent-Campaign > axios res=", res);
        resolve(res.data);
      })
      .catch((err) => {
        console.log("recent-Campaign > axios err=", err);
        reject("Error in recent-Campaign axios!");
      });
    } catch (error) {
      reject(SYSTEM_ERROR);
    }
  });
};
