import React, {useState, useEffect} from 'react';
import './App.scss';

//Components
import Input from "./components/Input/Input.jsx";
import Tasks from "./components/Tasks/Tasks.jsx";

function App() {
    //States
    const [inputText, setInputText] = useState("");
    const [tasks, setTasks] = useState([]);
    //const [status, setStatus] = useState("all");
    //const [filteredTasks, setFilteredTasks] = useState([]);

    //Effects
    useEffect(() => {
        getLocalTasks();
    }, []);

    useEffect(() => {
        setLocalTasks();
    }, [tasks]);

    //Methods
    // const filterHandler = () => {
    //     switch(status) {
    //         case "completed":
    //             setFilteredTasks(tasks.filter(item => item.completed === true))
    //             break;

    //         case "uncompleted":
    //             setFilteredTasks(tasks.filter(item => item.completed === false))
    //             break;

    //         default:
    //             setFilteredTasks(tasks);
    //             break;
    //     }
    // }

    const setLocalTasks = () => {
        localStorage.setItem("tasks", JSON.stringify(tasks));
    }

    const getLocalTasks = () => {
        if(localStorage.getItem("tasks") === null)
            localStorage.setItem("tasks", JSON.stringify([]));

        else {
            let localTasks = JSON.parse(localStorage.getItem("tasks", JSON.stringify(tasks)));
            setTasks(localTasks);
        }
    }

    return (
        <div className="App">
            <header>
                <h1>Your Tasks</h1>
            </header>

            <Input
                placeholder = "Enter a New Task"
                tasks = {tasks}
                setTasks = {setTasks}
                inputText = {inputText}
                setInputText = {setInputText}
            />
            <Tasks
                tasks = {tasks}
                setTasks = {setTasks}
            />
        </div>
    );
}

export default App;
