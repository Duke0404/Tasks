import React, {useState} from 'react';
import './App.css';

//Components
import Input from "./components/Input";
import Tasks from "./components/Tasks";

function App() {
  const [inputText, setInputText] = useState("");
  const [todos, setTodos] = useState([]);

  return (
    <div className="App">
        <header className="App-header">
            <h1>ToDo</h1>
        </header>

        <Input todos={todos} setTodos={setTodos} inputText={inputText} setInputText={setInputText} />
        <Tasks />
    </div>
  );
}

export default App;
