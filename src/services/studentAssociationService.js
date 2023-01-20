// All user related database operations can be defined here.

import { SYSTEM_ERROR } from "../config/CONSTANTS";
import axios from 'axios'
import { GET_STUDENT_ASSOCIATION_API,GET_STUDENT_CLUB_API,GET_OTHER_CLUB_API } from "./CONSTANTS";




export const getStudentAssociationData = () => {
    return new Promise((resolve, reject) => {
      try {
        axios
        .get(GET_STUDENT_ASSOCIATION_API)
        .then((res) => {
          resolve(res.data);
        })
        .catch((err) => {
          reject("Error in student-association axios!");
        });
      } catch (error) {
        reject(SYSTEM_ERROR);
      }
    });
  };
  

  export const getStudentClubData = () => {
    return new Promise((resolve, reject) => {
      try {
        axios
        .get(GET_STUDENT_CLUB_API)
        .then((res) => {
          resolve(res.data);
        })
        .catch((err) => {
          reject("Error in student-club axios!");
        });
      } catch (error) {
        reject(SYSTEM_ERROR);
      }
    });
  };

  export const getOtherClubData = () => {
    return new Promise((resolve, reject) => {
      try {
        axios
        .get(GET_OTHER_CLUB_API)
        .then((res) => {
          resolve(res.data);
        })
        .catch((err) => {
          reject("Error in other-club axios!");
        });
      } catch (error) {
        reject(SYSTEM_ERROR);
      }
    });
  };