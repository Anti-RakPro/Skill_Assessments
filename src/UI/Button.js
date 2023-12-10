// import styles from './Button.module.css';
import React from 'react';
import classes from './Button.module.css';
// import PropTypes from 'prop-types';

function Button(props){

    const clas = `${classes.customBtn} 
    ${props.isLightsUp && classes.LightsUp }`;
    // props.isSubmitLightsUp &&

    return(
        <button className={clas} onClick={props.onClick}>{props.children}</button>
    );
}



//todo 
// Button.propTypes = {
//     onClick: PropTypes.func,
//     children: PropTypes.func,
//     isLightsUp: PropTypes.bool.isRequired, // Assuming it should be a boolean
//     // otherProp: PropTypes.any, // Adjust the type according to your needs
// };

export default Button;

