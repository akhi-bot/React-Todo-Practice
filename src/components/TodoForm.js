import classes from './TodoForm.module.css'
import ReactDom from 'react-dom'
import {useRef, useContext, useState,} from 'react'
import TodoContext from '../store/todo-context'
import { GrAdd } from "react-icons/gr";

const TodoForm = () => {
    const [showForm, setShowForm] = useState(false)
     const todoContext = useContext(TodoContext)
    const inputRef = useRef(null)
 
    const formHandler = () => {
        setShowForm(true)
    }

    
    const submitHandler = (e) => {
        e.preventDefault()
        const inputValue = inputRef.current.value;
        if(inputValue=== '') {
            return;
        }
      
       
        todoContext.newTodo(inputValue)
        todoContext.showTodo()
        inputRef.current.value= ''
        setShowForm(false)
    } 


    return (
        <div className = {classes['new-todo']}>
        {showForm && <form onSubmit= {submitHandler} className= {classes.form}>
            <textarea row = '5' ref = {inputRef}></textarea>
            <button>Add Todo</button>
        </form>}
    
        {ReactDom.createPortal(
        <p className = {classes.add}><GrAdd className= {classes.icon} onClick = {formHandler}/>New Todo</p>
        , document.getElementById('add-icon'))}
        </div>
    )
} 

export default TodoForm;