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