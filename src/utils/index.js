import React from "react";
import {Auth} from "aws-amplify";

export const handleSignIn = async (username, password) => {
  try {
    const user = await Auth.signIn(username, password);
  } catch (error) {
    console.log('error signing in', error);
  }
};

export const handleSignOut = async () => {
  try {
    await Auth.signOut(); // FOR GLOBAL SIGN-OUT: Auth.signOut({ global: true });
  } catch (error) {
    console.log('error signing out: ', error);
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