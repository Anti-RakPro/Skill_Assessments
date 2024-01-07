import React from "react";
import styles from "./Registration.module.css";

// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyA6eyqAMimEp1ZekdYLv039cOXpam1-A68",
  authDomain: "skill-assessments-a758d.firebaseapp.com",
  projectId: "skill-assessments-a758d",
  storageBucket: "skill-assessments-a758d.appspot.com",
  messagingSenderId: "392264449678",
  appId: "1:392264449678:web:48baab4c1d716870df53df",
  measurementId: "G-ZDYM5XPTLV",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

// import Registration.module.css as styles from
interface SignInProps {
  name: string;
  email: string;
}

const x = "str";
const Registration: React.FC<SignInProps> = ({ name, email }) => {
  return (
    <div className={styles["reg-body"]}>
      <div className={styles["inputs-body"]}></div>
      <div className={styles["auth-vars"]}></div>
    </div>
  );
};
export default Registration;
