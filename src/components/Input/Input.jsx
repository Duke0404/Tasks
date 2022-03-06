//Style
import "./Input.scss"

//Components
import ButtonLone from "../ButtonLone/ButtonLone.jsx"

//Icons
import ArrowForwardIcon from "../../assets/icons/ArrowForwardIcon.jsx"

const Input = props => {
    const inputTextHandler = e => {
        props.setInputText(e.target.value)
    }

    const submitTaskHandler = e => {
        e.preventDefault()
        if(props.inputText.length > 0) {
            props.setTasks([...props.tasks, {text: props.inputText, completed: false, id: Math.random()}])
            props.setInputText("")
        }
    }

    // const statusHandler = (e) => {
    //     props.setStatus(e.target.value);
    // }

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

            <ButtonLone
                classInject = "inputButton"
                icon = {<ArrowForwardIcon />}
                click = {submitTaskHandler}
            />

            {/* <div className="select">
                <select onChange = {statusHandler} name = "todos" className = "filter-todo">
                    <option value = "all">All</option>
                    <option value = "completed">Completed</option>
                    <option value = "uncompleted">Uncompleted</option>
                </select>
            </div> */}
        </form>
        
    )
}

export default Input