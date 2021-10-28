import classes from "./TodoForm.module.css";
import ReactDom from "react-dom";
import { useRef, useContext, useState } from "react";
import TodoContext from "../store/todo-context";
import { GrAdd } from "react-icons/gr";
import Backdrop from "../UI/Backdrop";

const TodoForm = () => {
  const [showForm, setShowForm] = useState(false);
  const todoContext = useContext(TodoContext);
  const inputRef = useRef(null);

  const formHandler = () => {
    setShowForm(true);
  };

  const submitHandler = (e) => {
    e.preventDefault();
    const inputValue = inputRef.current.value;
    if (inputValue === "") {
      return;
    }

    todoContext.newTodo(inputValue);
    todoContext.showTodo();
    inputRef.current.value = "";
    setShowForm(false);
  };

  return (
    <div className={classes["new-todo"]}>
      {!showForm && ReactDom.createPortal(
        <p className={classes.add}>
          <GrAdd size={15} className={classes.icon} onClick={formHandler} />
          New
        </p>,
        document.getElementById("add-icon")
      )}

      {showForm && (
          <>
        <Backdrop onclick = {() => setShowForm(false)}/>
        <form onSubmit={submitHandler} className={classes.form}>
          <textarea row="5" ref={inputRef}></textarea>
          <button>Add</button>
        </form>
        </>
      )}
    </div>
  );
};

export default TodoForm;
