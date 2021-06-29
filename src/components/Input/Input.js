import React from "react";

//Style
import "./Input.scss"

//Icons
import arrow_forward from "../../assets/icons/arrow_forward.svg"

const Input = (props) => {
    const inputTextHandler = (e) => {
        console.log(e.target.value );
        props.setInputText(e.target.value);
    }

    const submitTaskHandler = (e) => {
        e.preventDefault();
        props.setTasks([...props.tasks, {text: props.inputText, completed: false, id: Math.random()}]);
        props.setInputText("");
    }

    const statusHandler = (e) => {
        props.setStatus(e.target.value);
    }

    return (
        <form className = "task-form">
            <input
                placeholder = {props.placeholder}
                value = {props.inputText}
                onChange = {inputTextHandler}
                type = "text"
                className="button-input"
            />

            <div className = "input-focus-border" />

            <button onClick = {submitTaskHandler} className = "task-button" type = "submit">
                <img
                    src = {arrow_forward}
                    alt = "Submit Task"
                />
            </button>

            {/* <div className="select">
                <select onChange = {statusHandler} name = "todos" className = "filter-todo">
                    <option value = "all">All</option>
                    <option value = "completed">Completed</option>
                    <option value = "uncompleted">Uncompleted</option>
                </select>
            </div> */}
        </form>
    );
}

export default Input;