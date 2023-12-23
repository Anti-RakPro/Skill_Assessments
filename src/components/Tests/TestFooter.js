import styles from './TestFooter.module.css';
import Button from '../../UI/Button';
import React from 'react';
// import {useState} from 'react';


function TestFooter(props){



    return(
        <div className = {styles.testFooterMain} >
            <div>Q Number, timer</div>
            <div>
                <Button onClick={props.onNext} isLightsUp={props.isNextLightsUp}>Next</Button>
                <Button onClick={props.onSubmit} isLightsUp={props.isSubmitLightsUp}>Submit</Button>
            </div>
        </div>
    );}

export default TestFooter;
