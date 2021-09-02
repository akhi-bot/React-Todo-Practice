import classes from "./TodoItem.module.css";
import Card from "../UI/Card";
import TodoContext from "../store/todo-context";
import { useContext } from "react";

const TodoItem = (props) => {
  const todoContext = useContext(TodoContext);

  const removeItemHandler = () => {
    const todo = todoContext.todo.filter((element) => element.id !== props.id);
    todoContext.remove(todo);
  };

  const updateItemHandler  = () => {
    todoContext.updateInput(props.id)

  }

  return (
    <Card>
      <li className={classes.item}>
        <p>{props.item}</p>
        <div>
          <button onClick={updateItemHandler}>Edit </button>
          <button onClick={removeItemHandler}>Delete</button>
        </div>
      </li>
    </Card>
  );
};

export default TodoItem;
