import React from "react";
import styles from "./Registration.module.css";
// import Registration.module.css as styles from
interface SignInProps {
  name: string;
  email: string;
}
const x = "str";
const Registration: React.FC<SignInProps> = ({ name, email }) => {
  return <div className={styles["red-border"]}>hello</div>;
};

// function Registration(){
//     return 'Registration';
// }
export default Registration;
