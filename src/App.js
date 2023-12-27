
// eslint-disable-next-line no-unused-vars

import { Routes, Route, Link } from 'react-router-dom';

// import logo from './logo.svg';
// import styles from './App.module.css';

import React from 'react';
import Body from './components/Body/Body';
import Header from './components/Header/Header';
import Tests from './components/Tests/Tests';
import SignIn from './pages/SignIn SignUp/SignIn';
import SignUp from './pages/SignIn SignUp/SignUp';
import Counter from "./components/Counter/ Counter";

function App() {
    return (
        <React.Fragment>
            <Header/>
            <Body>
                <Routes>
                    <Route id='about' path='/about' element={'About'}/>
                    <Route id='home' path='/' element={'Home'}/>
                    <Route id='tests' path='/tests' element={'list of available tests'} />
                    <Route id='test' path='/test' element={<Tests/>}/>
                    <Route path='test/result' element={'Result'}/>
                    <Route path='/sign-in' element={<SignIn/>}/>
                    <Route path='/sign-up' element={<SignUp/>}/>
                    <Route path='/profile' element={<Counter/>}/>
                    <Route path='*' element='page not found' />
                </Routes>
            </Body>



        </React.Fragment>

    );
}

export default App;
