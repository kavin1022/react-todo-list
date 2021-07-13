import { useState } from "react";
import DeleteRoundedIcon from '@material-ui/icons/DeleteRounded';
import IconButton from '@material-ui/core/IconButton';

const ToDoList = () => {

    const [toDo, setTodo] = useState([{body: "Buy milk", id: 0}, {body: "Wash cloths", id: 1}]);
    const [currentToDo, setCurrentToDo] = useState("");

    const handleClick = (curr) => {
        if (curr !== ""){
            let tempTodo = toDo.slice();
            let newItem = {body: curr, id: toDo.length + 1}
            tempTodo.push(newItem);
            setTodo(tempTodo);
            setCurrentToDo("");
        }
    }

    const handleDelete = (x) => {
        let tempTodo = toDo.slice();
        tempTodo.splice(x.id, 1);
        setTodo(tempTodo);
    }

    return (
        <div id="to-do-wrapper">
            {toDo.map((x) => <li id= "todo-listitem" key={x.id}>
                <div id="todo-listitems-wrapper">
                    {x.body}
                    <IconButton id="delete-icon" onClick={() => handleDelete({x})}>
                        <DeleteRoundedIcon />
                    </IconButton>
                </div>
            </li>)}

            <textarea id="todo-textarea" type="text" value={currentToDo} onChange={(e => setCurrentToDo(e.target.value))}></textarea>
            <button onClick={() => handleClick(currentToDo)} id="add-button">Add</button>
        </div>
    ); 
}

export default ToDoList;