import TodoForm from "./components/TodoForm";
import { Fragment } from "react";
import { TodoProvider } from "./store/todo-context";
import TodoList from "./components/TodoList";
import "./index.css";

function App() {
  return (
    <Fragment>
      <h1>Todo Application</h1>
      <TodoProvider>
        <div className="todo">
          <section className= "first">
            <TodoList />
          </section>
          <section className = "first">
            <TodoForm />
          </section>
        </div>
      </TodoProvider>
    </Fragment>
  );
}

export default App;
