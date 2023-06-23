import logo from './logo.svg';
import styles from './App.module.css'

import React from 'react'
import Body from "./components/Body/Body";
import Header from "./components/Header/Header";
import Tests from "./components/Tests/Tests";


function App() {
    return (<React.Fragment>
            <div>
                <Header/>
                <div className={styles['whole-page']}>
                    <Body>
                        <Tests/>

                    </Body>
                </div>
            </div>

    </React.Fragment>

    );
}

export default App;
