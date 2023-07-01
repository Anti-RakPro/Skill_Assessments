import styles from "./Button.module.css";

function Button(props){


    return(
        <button className={styles.customBtn}>{props.children}</button>
    )
}

export default Button

