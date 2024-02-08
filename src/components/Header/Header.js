import styles from "./Header.module.css";
import jsLogo from "../../img/logo/images.png";
import React from "react";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";

function Header() {
  const authStatus = useSelector((state) => state.userData.authStatus);

  console.log(authStatus);
  return (
    <div className={styles["header"]}>
      <div className={styles["header-container"]}>
        <div className={styles["header-logo"]}>
          <div className={styles["logo"]} src={jsLogo} alt="">
            SA
          </div>
          <p>Skill Assessment</p>
        </div>
        <div className={styles["nav-bar"]}>
          <Link to={"tests"}>Tests </Link>
          <Link to={"test"}>Test </Link>
          <Link to={"about"}>About</Link>
          {authStatus === "SignUp" && (
            <Link to={"registration"}>Registration</Link>
          )}
          {authStatus === "SignIn" && (
            <Link to={"registration"}>Registration</Link>
          )}
          {authStatus === "Profile" && <Link to={"profile"}>Profile</Link>}
        </div>
      </div>
    </div>
  );
}

export default Header;
