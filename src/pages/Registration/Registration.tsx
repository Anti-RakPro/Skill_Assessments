import React, { useReducer } from "react";
// import {useReducer} from "react";
import styles from "./Registration.module.css";

import googleLogo from "../../assets/googleLogo.svg";

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
  // storageBucket: "skill-assessments-a758d.appspot.com",
  // messagingSenderId: "392264449678",
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
  const initialState = {
    email: "",
    password: "",
    repeatPassword: "",
  };

  const formReducer = (state, action) => {
    switch (action.type) {
      case "SET_EMAIL":
        return { ...state, email: action.email };
      case "SET_PASSWORD":
        return { ...state, password: action.password };
      case "SET_REPEAT_PASSWORD":
        return { ...state, repeatPassword: action.repeatPassword };
      default:
        return state;
    }
  };

  const [formData, dispatch] = useReducer(formReducer, initialState);

  console.log(formData);
  return (
    <div className={styles["auth-body"]}>
      <div className={styles["auth-left"]}>
        <h2 className={styles["auth-title"]}>Sign Up to continue</h2>
        <input
          type="text"
          className={styles["auth-input"]}
          placeholder="Email address"
          onChange={(data) => {
            dispatch({ type: "SET_EMAIL", email: data.target.value });
          }}
        />
        <input
          type="password"
          className={styles["auth-input"]}
          placeholder="Password"
          onChange={(data) => {
            dispatch({ type: "SET_PASSWORD", password: data.target.value });
          }}
        />
        <input
          type="password"
          className={styles["auth-input"]}
          placeholder="Repeat Password"
          onChange={(data) => {
            dispatch({
              type: "SET_REPEAT_PASSWORD",
              repeatPassword: data.target.value,
            });
          }}
        />
        <button className={styles["auth-sign-button"]}>Sign Up</button>
      </div>
      <div className={styles["auth-right"]}>
        <button type="button" className={styles["mediaBtn"]}>
          <img className={styles["google-img"]} src={googleLogo} alt="" />
          Continue with Google
        </button>
      </div>
    </div>
  );
};
export default Registration;
