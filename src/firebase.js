 
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

// TODO: Replace the following with your app's Firebase project configuration
// See: https://support.google.com/firebase/answer/7015592
const firebaseConfig = {
  apiKey: "AIzaSyAf8Y1Uk_jpwUBmsVuDaHWuLceQ-deWkTw",
  authDomain: "evaluate-data.firebaseapp.com",
  projectId: "evaluate-data",
  storageBucket: "evaluate-data.appspot.com",
  messagingSenderId: "985565569293",
  appId: "1:985565569293:web:4a9f601715f02ff7955044",
  measurementId: "G-HD2EEFS1CR"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);


// Initialize Cloud Firestore and get a reference to the service
const firestore = getFirestore(app);
export { firestore };
