import firebase from "firebase/app";
import "firebase/firestore";
import "firebase/auth";

const config = {
  apiKey: "AIzaSyAhRwIVxAN4iAplRhdJSNUaDliICr2l1gQ",
  authDomain: "crwn-db-66784.firebaseapp.com",
  databaseURL: "https://crwn-db-66784-default-rtdb.firebaseio.com",
  projectId: "crwn-db-66784",
  storageBucket: "crwn-db-66784.appspot.com",
  messagingSenderId: "1023922373536",
  appId: "1:1023922373536:web:3045356ab9fe3b69cb9ac5",
};

firebase.initializeApp(config);

export const createUserProfileDocument = async (userAuth, additionalData) => {
  if (!userAuth) return;

  const userRef = firestore.doc(`users/${userAuth.uid}`);

  const snapShot = await userRef.get();

  if (!snapShot.exists) {
    const { displayName, email } = userAuth;
    const createdAt = new Date();

    try {
      await userRef.set({
        displayName,
        email,
        createdAt,
        ...additionalData,
      });
    } catch (error) {
      console.log("error creating user", error.message);
    }
  }
  return userRef;
  //console.log(firestore.doc("users/122431"));
};

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: "select_account" });
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;
