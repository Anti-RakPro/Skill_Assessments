import styles from './Body.module.css';
import React from 'react';



function Body(props){

    return (
        <div className={styles.body}>{props.children}</div> );
}

export default Body;
