import React, {useState} from 'react';
import './App.css';

//Components
import Input from "./components/Input";
import Tasks from "./components/Tasks";

function App() {
  const [inputText, setInputText] = useState("");
  const [tasks, setTasks] = useState([]);

  return (
    <div className="App">
        <header className="App-header">
            <h1>ToDo</h1>
        </header>

        <Input tasks={tasks} setTasks={setTasks} inputText={inputText} setInputText={setInputText} />
        <Tasks tasks={tasks} setTasks={setTasks} />
    </div>
  );
}

export default App;
