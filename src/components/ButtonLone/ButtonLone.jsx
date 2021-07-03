import React from "react";
import "./ButtonLone.scss"

const ButtonLone = (props) => {
    return (
        <button
            onClick = {props.submitTaskHandler}
            className = {`buttonLone + ${props.classInject}`}
            type = "submit"
        >
            {props.icon}
        </button>
    );
}

export default ButtonLone;