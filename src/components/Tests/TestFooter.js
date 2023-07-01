import styles from './TestFooter.module.css'
import Button from "../../UI/Button";

function TestFooter(){

    return(
    <div className = {styles.testFooterMain} >
        <div>Q Number, timer</div>
        <div>

            <Button>Submit</Button>
        </div>
    </div>
    )}

export default TestFooter
