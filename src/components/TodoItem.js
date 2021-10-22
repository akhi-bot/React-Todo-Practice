import classes from "./TodoItem.module.css";
import Card from "../UI/Card";
import TodoContext from "../store/todo-context";
import { useContext, useState} from "react";
import { FiEdit2, FiDelete } from "react-icons/fi";
import ReactDom from 'react-dom'

const TodoItem = (props) => {
  const [confirmation, setConfirmation] = useState(false)
  const [edit, setEdit] = useState(false)
  const [showEditInput, setShowEditInput] = useState(false)
  const [editInput, setEditInput] = useState(props.item)

  const todoContext = useContext(TodoContext);
  const removeItemHandler = () => {
      setConfirmation(true)
  };

  const updateItemHandler  = () => {
    setConfirmation(true)
    setEdit(true)
  }

  const acceptConfirmation = () => {
   if(edit) {
     setShowEditInput(true)
      
   } else{
    todoContext.remove(props.id);
   }
     setConfirmation(false)
     setEdit(false)
  }

  const rejectConfirmation = () => {
    setConfirmation(false)
    setEdit(false)
    setShowEditInput(false)
  } 

  const editHandler = (e) => {
    const editValue = todoContext.updateInput(props.id, e.target.value)
    if(editValue === '') {
      return ;
    }
    setEditInput(editValue)
  }

  return (
    <Card>
      <li className={classes.item}>
        {showEditInput && ReactDom.createPortal(<form className= {classes.edit} >
          <div className={classes.card} >           
            <input type="text" value={editInput} autoFocus onChange={editHandler}/>
            <button onClick={rejectConfirmation}>Stop Editing</button>
          </div>
        </form>, document.getElementById('edit-form'))}
        <p>{confirmation ? `Are you sure want to ${edit? "Edit": "Delete"}` : editInput}</p>
        {confirmation ? (<div >
          <button onClick= {acceptConfirmation}>Yes</button>
          <button onClick= {rejectConfirmation}>NO</button>
        </div>):
        <div >
          <button onClick={updateItemHandler}><FiEdit2/> Edit</button>
          <button onClick={removeItemHandler}> <FiDelete/> Delete</button>
        </div>}
      </li>
    </Card>
  );
};

export default TodoItem;
