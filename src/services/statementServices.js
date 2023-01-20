// All user related database operations can be defined here.

import { SYSTEM_ERROR } from "../config/CONSTANTS";
import axios from 'axios'
import { GET_STATEMENT_API } from "./CONSTANTS";


export const getStatementData = () => {
  return new Promise((resolve, reject) => {
    try {
      axios
      .get(GET_STATEMENT_API)
      .then((res) => {
        resolve(res.data);
      })
      .catch((err) => {
        reject("Error in statement axios!");
      });
    } catch (error) {
      reject(SYSTEM_ERROR);
    }
  });
};

