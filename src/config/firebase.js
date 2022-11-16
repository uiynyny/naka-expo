// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import 'firebase/auth';
import '@react-native-async-storage/async-storage'
import { initializeAuth, getReactNativePersistence } from "firebase/auth/react-native";
import AsyncStorage from "@react-native-async-storage/async-storage";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCvb9zUgPF4Liui2Gibgr-xvWvvCPgPGgY",
  authDomain: "naka-b1941.firebaseapp.com",
  databaseURL: "https://naka-b1941-default-rtdb.firebaseio.com",
  projectId: "naka-b1941",
  storageBucket: "naka-b1941.appspot.com",
  messagingSenderId: "354573186785",
  appId: "1:354573186785:web:f0444d3d76126ad3afa9a0",
  measurementId: "G-ZTFCBPWV5E"
};

// Initialize Firebase

const app = initializeApp(firebaseConfig);
initializeAuth(app, { persistence: getReactNativePersistence(AsyncStorage) })
export default app;