import React from "react";

//Style
import "./Item.scss"

//Components
import ButtonLone from "../ButtonLone/ButtonLone.jsx"

//Icons
import RadioButtonUncheckedIcon from "../../assets/icons/RadioButtonUncheckedIcon"
import TaskAltIcon from "../../assets/icons/TaskAltIcon"
import DeleteForeverIcon from "../../assets/icons/DeleteForeverIcon"

const Item = ({item, text, tasks, setTasks}) => {
    const deleteHandler = () => {
        setTasks(tasks.filter(i => i.id !== item.id));
    }

    const completeHandler = () => {
        setTasks(tasks.map((i) => {
            if(i.id === item.id)
                return {...i, completed: !item.completed};

            return i;
        }));
    }

    return (
        <li className = {`task-item ${item.completed ? "completed-item" : ""}`}>
            <ButtonLone
                className = "complete-btn"
                icon = {item.completed ? <TaskAltIcon /> : <RadioButtonUncheckedIcon/>}
                click = {completeHandler}
            />

            {text}

            <ButtonLone
                className = "trash-btn"
                icon = {<DeleteForeverIcon />}
                click = {deleteHandler}
            />
        </li>
    );
}

export default Item;