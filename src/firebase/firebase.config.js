// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyB8ebNRROfADOMA4aEqFmbBRp2uZ7habyM",
  authDomain: "building-management-39823.firebaseapp.com",
  projectId: "building-management-39823",
  storageBucket: "building-management-39823.appspot.com",
  messagingSenderId: "697450701394",
  appId: "1:697450701394:web:9c6ed0569b8d3cd5a1758b"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

export default auth;