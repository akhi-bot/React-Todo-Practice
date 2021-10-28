import classes from "./TodoItem.module.css";
import Card from "../UI/Card";
import TodoContext from "../store/todo-context";
import { useContext, useState } from "react";
import { FiEdit2} from "react-icons/fi";
import { MdDeleteForever} from "react-icons/md";
import Backdrop from "../UI/Backdrop";
import {AiOutlineCheck,} from 'react-icons/ai'
import { ImCancelCircle} from 'react-icons/im'


const TodoItem = (props) => {
  const [confirmation, setConfirmation] = useState(false);
  const [edit, setEdit] = useState(false);
  const [showEditInput, setShowEditInput] = useState(false);
  const [editInput, setEditInput] = useState(props.item);

  const todoContext = useContext(TodoContext);
  const removeItemHandler = () => {
    setConfirmation(true);
  };

  const updateItemHandler = () => {
    setConfirmation(true);
    setEdit(true);
  };

  const acceptConfirmation = () => {
    if (edit) {
      setShowEditInput(true);
    } else {
      todoContext.remove(props.id);
    }
    setConfirmation(false);
    setEdit(false);
  };

  const rejectConfirmation = () => {
    setConfirmation(false);
    setEdit(false);
    setShowEditInput(false);
  };

  const editFormHandler = (e) => {
    e.preventDefault();
    if(editInput === '') return ;
    props.editTodo(props.id, editInput);
    rejectConfirmation();
    // const editValue = todoContext.updateInput(props.id, e.target.value)
  };

  return (
    <Card>
      <li className={classes.item}>
        {showEditInput &&
          
            <>
            <Backdrop onclick = {rejectConfirmation}/>
            <form className={classes.edit}>
                <input
                  type="text"
                  value={editInput}
                  autoFocus
                  onChange={(e) => setEditInput(e.target.value)}
                />
                <div>
                  <button type="submit" onClick={editFormHandler}>
                    Submit
                  </button>
                  <button onClick={rejectConfirmation}>Cancel</button>
                </div>

            </form>
            </>}

        <p>
          {confirmation
            ? `Are you sure want to ${edit ? "Edit" : "Delete"}`
            : props.item}
        </p>
        {confirmation ? (
          <div>
            <button onClick={acceptConfirmation}> <AiOutlineCheck/> <span className = {classes.hide}>Yes</span></button>
            <button onClick={rejectConfirmation}><ImCancelCircle/> <span className = {classes.hide}>No</span></button>
          </div>
        ) : (
          <div>
            <button onClick={updateItemHandler}>
              <FiEdit2 /> <span className = {classes.hide}>Edit</span> 
            </button>
            <button onClick={removeItemHandler}>
              <MdDeleteForever /><span className = {classes.hide}>Delete</span> 
            </button>
          </div>
        )}
      </li>
    </Card>
  );
};

export default TodoItem;
