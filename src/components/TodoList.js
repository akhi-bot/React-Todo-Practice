import TodoContext from "../store/todo-context";
import TodoItem from "./TodoItem";
import classes from './TodoList.module.css';
import {Fragment, useContext,} from "react";




const TodoList =() => {
    const todoContext = useContext(TodoContext)
    console.log(todoContext.todo)

    if(todoContext.todo.length=== 0) {
        todoContext.show = false
    }

    const editTodo= (id, text) => {
          todoContext.updateInput(id, text);
    }


    return (
        <Fragment>
       {todoContext.show && <ul className= {classes.list}>
            {todoContext.todo.map(element =>(
            <TodoItem
            key={element.id} item = {element.todo} id={element.id} editTodo= {editTodo} />
        ))}
       </ul>}
       {!todoContext.show && <p className= {classes.empty}>Please Add some Todo...</p>}
       </Fragment>
        )
    }


export default TodoList;