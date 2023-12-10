import styles from './Button.module.css';
import classes from './Button.module.css';

function Button(props){

    const clas = `${classes.customBtn} 
    ${props.isLightsUp && classes.LightsUp }`;
    // props.isSubmitLightsUp &&

    return(
        <button className={clas} onClick={props.onClick}>{props.children}</button>
    );
}

export default Button;

