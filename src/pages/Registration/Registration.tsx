import React from "react";
import styles from "./Registration.module.css";

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
