import styles from './TestFooter.module.css'
import Button from "../../UI/Button";
import {useState} from "react";


function TestFooter(props){



    return(
    <div className = {styles.testFooterMain} >
        <div>Q Number, timer</div>
        <div>

            <Button onSubmit={props.onSubmit} isSubmitLightsUp={props.isSubmitLightsUp}>Submit</Button>
        </div>
    </div>
    )}

export default TestFooter
