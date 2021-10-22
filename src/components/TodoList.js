import TodoContext from "../store/todo-context";
import TodoItem from "./TodoItem";
import classes from './TodoList.module.css';
import {Fragment, useContext,} from "react";




const TodoList =() => {
    const todoContext = useContext(TodoContext)

    if(todoContext.todo.length=== 0) {
        todoContext.show = false
    }
    return (
        <Fragment>
       {todoContext.show && <ul className= {classes.list}>
            {todoContext.todo.map(element =>(
            <TodoItem
            key={element.id} item = {element.todo} id={element.id} />
        ))}
       </ul>}
       {!todoContext.show && <p className= {classes.empty}>Please Add some Todo...</p>}
       </Fragment>
        )
    }


export default TodoList;