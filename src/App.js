import React, {useState, useEffect} from 'react';
import './App.scss';

//Components
import Input from "./components/Input";
import Tasks from "./components/Tasks";

function App() {
    //States
    const [inputText, setInputText] = useState("");
    const [tasks, setTasks] = useState([]);
    const [status, setStatus] = useState("all");
    const [filteredTasks, setFilteredTasks] = useState([]);

    //Effects
    useEffect(() => {
        getLocalTasks();
    }, []);

    useEffect(() => {
        filterHandler();
        setLocalTasks();
    }, [tasks, status]);

    //Methods
    const filterHandler = () => {
        switch(status) {
            case "completed":
                setFilteredTasks(tasks.filter(item => item.completed === true))
                break;

            case "uncompleted":
                setFilteredTasks(tasks.filter(item => item.completed === false))
                break;

            default:
                setFilteredTasks(tasks);
                break;
        }
    }

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
            <header className="App-header">
                <h1>ToDo</h1>
            </header>

            <Input
                tasks = {tasks}
                setTasks = {setTasks}
                inputText = {inputText}
                setInputText = {setInputText}
                status = {status}
                setStatus = {setStatus}
            />
            <Tasks
                tasks = {tasks}
                setTasks = {setTasks}
                filteredTasks = {filteredTasks}
            />
        </div>
    );
}

export default App;
