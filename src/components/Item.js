import React from "react";

const Item = ({item, text, tasks, setTasks}) => {
    const deleteHandler = () => {
        setTasks(tasks.filter(el => el.id !== item.id));
    }

    const completeHandler = () => {
        setTasks(tasks.map((el) => {
            if(el.id === item.id)
                return {...el, completed: !item.completed};

            return el;
        }));
    }

    return (
        <div className = "todo">
            <li
                className = {`todo-item ${item.completed ? "completed" : ""}`}
            >{text}</li>

            <button
                onClick = {completeHandler}
                className = "complete-btn"
            >
                <i className = "fas fa-check" />
            </button>

            <button
                onClick = {deleteHandler}
                className = "trash-btn"
            >
                <i className = "fas fa-trash" />
            </button>
        </div>
    );
}

export default Item;