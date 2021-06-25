import React from "react";

const Input = ({inputText, setInputText, tasks, setTasks, status, setStatus}) => {
    const inputTextHandler = (e) => {
        console.log(e.target.value );
        setInputText(e.target.value);
    }

    const submitTaskHandler = (e) => {
        e.preventDefault();
        setTasks([...tasks, {text: inputText, completed: false, id: Math.random()}]);
        setInputText("");
    }

    const statusHandler = (e) => {
        setStatus(e.target.value);
    }

    return (
        <form>
            <input
                value = {inputText}
                onChange = {inputTextHandler}
                type = "text"
                className = "todo-input"
            />

            <button onClick = {submitTaskHandler} className = "todo-button" type = "submit">
                <i className = "fas fa-plus-square" />
            </button>

            <div className="select">
                <select onChange = {statusHandler} name = "todos" className = "filter-todo">
                    <option value = "all">All</option>
                    <option value = "completed">Completed</option>
                    <option value = "uncompleted">Uncompleted</option>
                </select>
            </div>
        </form>
    );
}

export default Input;