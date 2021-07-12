import { useState } from "react";

const ToDoList = () => {

    const [toDo, setTodo] = useState([{body: "Buy milk", id: 1}, {body: "Wash cloths", id: 2}]);
    const [currentToDo, setCurrentToDo] = useState("");

    const handleClick = (curr) => {
        if (curr != ""){
            let tempTodo = toDo.slice();
            let newItem = {body: curr, id: toDo.length + 1}
            tempTodo.push(newItem);
            setTodo(tempTodo);
            setCurrentToDo("");
        }
    }

    return (
        <div id="to-do-wrapper">
            <div id="to-do-array">
                {toDo.map((x) => <li key={x.id}>{x.body}</li>)}
            </div>

            <textarea id="todo-textarea" type="text" value={currentToDo} onChange={(e => setCurrentToDo(e.target.value))}></textarea>
            <button onClick={() => handleClick(currentToDo)} id="add-button">Add</button>
        </div>
    ); 
}

export default ToDoList;