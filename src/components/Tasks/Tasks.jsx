import React from "react";

//Style
import "./Tasks.scss"

//Components
import Item from "../Item/Item";

const Tasks = ({tasks, setTasks, filteredTasks}) => {
    return (
        <div className="todo-container">
            <ul className="task-list">
                {tasks.map(item => (
                    <Item
                        setTasks={setTasks}
                        tasks={tasks}
                        item={item}
                        text={item.text}
                        key={item.id}
                    />
                ))}
            </ul>
        </div>
    );
}

export default Tasks;