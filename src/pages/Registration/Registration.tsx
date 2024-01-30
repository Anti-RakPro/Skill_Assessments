import React, { useContext, useReducer, useState } from "react";
import styles from "./Registration.module.css";
import googleLogo from "../../assets/googleLogo.svg";
import FirebaseAuth from "./FirebaseAuth";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";

// const authStatus = useSelector((state) => state.userData.authStatus);
// Import the functions you need from the SDKs you need

// import Registration.module.css as styles from
// interface SignInProps {
//   name: string;
//   email: string;
// }

const x = "str";

const Registration: React.FC = () => {
  const [authStatus, setAuthStatus] = useState("SignUp");

  const initialState: { [key: string]: string } = {
    email: "",
    password: "",
    repeatPassword: "",
  };

  type FormAction =
    | { type: "SET_EMAIL"; email: string }
    | { type: "SET_PASSWORD"; password: string }
    | { type: "SET_REPEAT_PASSWORD"; repeatPassword: string };

  const formReducer = (state: typeof initialState, action: FormAction) => {
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

  // console.log(formData);
  return (
    <div className={styles["auth-body"]}>
      <div className={styles["auth-left"]}>
        {authStatus === "SignIn" && (
          <div className={styles["auth-singUp"]}>
            <h2 className={styles["auth-title"]}>Sign In to continue</h2>
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
            <button
              className={styles["auth-sign-button"]}
              onClick={() => {
                FirebaseAuth(formData);
              }}
            >
              Sign In
            </button>
            <span className={styles["logIn-text"]}>
              {"Don't have account yet ?"}
              <p
                className={styles["logIn-text"]}
                onClick={() => {
                  setAuthStatus("SignUp");
                }}
              >
                Sign Up
              </p>
            </span>
          </div>
        )}
        {authStatus === "SignUp" && (
          <div className={styles["auth-singIn"]}>
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
            <button
              className={styles["auth-sign-button"]}
              onClick={() => {
                FirebaseAuth(formData);
              }}
            >
              Sign Up
            </button>
            <span className={styles["logIn-text"]}>
              Already have an account?
              <p
                className={styles["logIn-text"]}
                onClick={() => {
                  setAuthStatus("SignIn");
                }}
              >
                Log In
              </p>
            </span>
          </div>
        )}
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
