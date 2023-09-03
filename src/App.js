
import { Routes, Route, Link } from 'react-router-dom';

import logo from './logo.svg';
import styles from './App.module.css'

import React from 'react'
import Body from "./components/Body/Body";
import Header from "./components/Header/Header";
import Tests from "./components/Tests/Tests";


function App() {
    return (
        <React.Fragment>
            <Routes>
                <Route path='/about' element={'About'}/>
                <Route path='/' element={'Home'}/>
                <Route path='/list' element={'list of available tests'} />
                {/*<Route path='/elm2' element={'element2'} />*/}
                {/*<Route path='/elm3' element={'element3'} />*/}
                <Route path={'/test'} element={ <div>
                    <Header/>
                    <div className={styles['whole-page']}>
                        <Body>
                            <Tests/>
                        </Body>
                    </div>
                </div>}/>
                <Route path='/result' element={'Result'}/>
                <Route path='*' element='page not found' />
            </Routes>


        </React.Fragment>

    );
}

export default App;
