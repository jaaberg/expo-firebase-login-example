import firebase from 'firebase/app';
import 'firebase/auth';
import 'firebase/firestore';

firebase.initializeApp({
  apiKey: 'AIzaSyBAMxccjzUx_m68B_0JQUvmFg9BSt5Dk3g',
  authDomain: 'expo-firebase-example-87798.firebaseapp.com',
  databaseURL: 'https://expo-firebase-example-87798.firebaseio.com',
  projectId: 'expo-firebase-example-87798',
  storageBucket: 'expo-firebase-example-87798.appspot.com',
  messagingSenderId: '943129509579',
  appId: '1:943129509579:web:6be6e394502aea0d56654e',
});

export const auth = firebase.auth();
export const firestore = firebase.firestore();
export const currentUser = () => firebase.auth().currentUser.uid;

window.firebase = firebase;
