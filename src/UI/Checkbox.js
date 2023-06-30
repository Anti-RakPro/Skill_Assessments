import React from "react";
import classes from './Checkbox.module.css'


function Checkbox ({obj, onChange}){
console.log(obj)

    const clas = `${classes.checkbox} 
    ${obj.showGray === true && classes.showGray} 
    ${obj.showGreen === true && classes.showGreen} 
    ${obj.showRed === true && classes.showRed}`

    debugger
    return (
        <React.Fragment>
            <div className={clas} onClick={onChange} />

        </React.Fragment>

    )

}


export default Checkbox