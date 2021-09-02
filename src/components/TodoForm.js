import classes from './TodoForm.module.css'
import {useRef, useContext, useEffect} from 'react'
import TodoContext from '../store/todo-context'

const TodoForm = () => {
     const todoContext = useContext(TodoContext)
    const inputRef = useRef(null)

    useEffect(() => {
        inputRef.current.focus()
    })
   

    const todo = todoContext.edit.state?  "Edit Todo" : "Add Todo" 
    
    const submitHandler = (e) => {
        e.preventDefault()
        const inputValue = inputRef.current.value;
        if(inputValue=== '') {
            return;
        }
        if(todoContext.edit.state) {
            const id = todoContext.edit.id

            todoContext.todo.splice((id-1),1,{id: id , todo: inputValue})
            todoContext.removeUpdateInput()
        } else {
       
        todoContext.newTodo(inputValue)
        todoContext.showTodo()
        }
        inputRef.current.value = ''
    } 


    return (
        <form onSubmit= {submitHandler} className= {classes.form}>
            <input type="text" ref = {inputRef}  />
            <button>{todo}</button>
        </form>
    )
} 

export default TodoForm;