import styles from "./Button.module.css";
import classes from "./Button.module.css";

function Button(props){

    const clas = `${classes.customBtn} 
    ${props.isSubmitLightsUp && classes.LightsUp }`
    // props.isSubmitLightsUp &&

    return(
        <button className={clas} onClick={props.onSubmit}>{props.children}</button>
    )
}

export default Button

