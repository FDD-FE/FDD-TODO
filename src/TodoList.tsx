import React, {useState} from "react";
import TodoItem from "./TodoItem";
import Item from "./Item";
const TodoList=()=>{
    const [tasks, setTasks] = useState([
        {
            id: 1,
            text: '할일 1',
            completed: false,
        },
        {
            id: 2,
            text: '할일 2',
            completed: false,
        },
        {
            id: 3,
            text: '완료한일 1',
            completed: true,
        }
    ])
    return(
        <>
            {tasks.map(task=><Item text={task.text} completed={task.completed}/>)}
        </>
    )
}

export default TodoList;