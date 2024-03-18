// eslint-disable-next-line no-unused-vars

import { Routes, Route, Link } from "react-router-dom";

// import logo from './logo.svg';
// import styles from './App.module.css';

import React from "react";
import Body from "./components/Body/Body";
import Header from "./components/Header/Header";
import Tests from "./components/Tests/Tests";
import Registration from "./pages/Registration/Registration";
import Profile from "./pages/Profile/Profile";

// import Counter from "./components/Counter/ Counter";

function App() {
  return (
    <React.Fragment>
      <Header />
      <Body>
        <Routes>
          {/*<Route id="about" path="/about" element={<Counter />} />*/}
          <Route id="home" path="/" element={"Home"} />
          <Route id="tests" path="/tests" element={"list of available tests"} />
          <Route id="test" path="/test" element={<Tests />} />
          <Route path="test/result" element={"Result"} />
          {/*<Route path="/sign-in" element={<Registration />} />*/}
          <Route
            id="registration"
            path="/registration"
            element={<Registration />}
          />
          <Route id="profile" path="/profile" element={<Profile />} />
          <Route path="*" element="page not found" />
        </Routes>
      </Body>
    </React.Fragment>
  );
}

export default App;
