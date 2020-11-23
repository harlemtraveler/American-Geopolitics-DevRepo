import React from "react";
import { Auth, API, graphqlOperation } from "aws-amplify";
import format from 'date-fns/format';
import parseISO from "date-fns/parseISO";

export const convertDollarsToCents = price => (price * 100).toFixed(0);

export const convertCentsToDollars = price => (price / 100).toFixed(2);

export const formatDateToISO = date => parseISO(date);

export const formatProductDate = date => format(date, "MMM do, yyyy");

export const formatOrderDate = date => format(date, "EEEE h:mm aaaa MMM do yyyy");

/********************
 * Handle Sign In   *
 ********************/
export const handleSignIn = async (username, password) => {
  try {
    const user = await Auth.signIn(username, password);
  } catch (error) {
    console.log('error signing in', error);
  }
};

/*********************
 * Handle Sign Out   *
 *********************/
export const handleSignOut = async () => {
  try {
    await Auth.signOut(); // FOR GLOBAL SIGN-OUT: Auth.signOut({ global: true });
  } catch (error) {
    console.log('error signing out: ', error);
  }
};

/*************************************************
 * Convert Array of Objects to a single Object   *
 *************************************************/
export const arrayToObject = async (arr, nameKey, valueKey) => {
  function reducer(acc, cur) {
    return {...acc, [cur.nameKey]: cur.valueKey};
  };
  const result = await arr.reduce(reducer, {});
  console.log(result);
  return result;
};

/*******************************
 * Convert String to Boolean   *
 *******************************/
export const stringToBoolean = stringy => {
  switch (stringy.toLowerCase().trim()) {
    case "true": case "yes": case "1":
      return true;
    case "false": case "no": case "0": case null:
      return false;
    default:
      return Boolean(stringy);
  }
};

// export function uploadImageCallBack(file) {
//   return new Promise(
//     (resolve, reject) => {
//       const xhr = new XMLHttpRequest();
//       xhr.open('POST', 'https://api.imgur.com/3/image');
//       xhr.setRequestHeader('Authorization', 'Client-ID ##clientid##');
//       const data = new FormData();
//       data.append('image', file);
//       xhr.send(data);
//       xhr.addEventListener('load', () => {
//         const response = JSON.parse(xhr.responseText);
//         console.log(response)
//         resolve(response);
//       });
//       xhr.addEventListener('error', () => {
//         const error = JSON.parse(xhr.responseText);
//         console.log(error)
//         reject(error);
//       });
//     }
//   );
// }