import React from "react";

//Components
import Item from "./Item";

const Tasks = ({tasks, setTasks}) => {
    return (
        <div className="todo-container">
            <ul className="todo-list">
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