import TodoForm from './components/TodoForm'
import {Fragment} from 'react'
import { TodoProvider } from './store/todo-context';
import TodoList from './components/TodoList';

function App() {
  return (
      <Fragment>
        <h1>Todo Application</h1>
        <TodoProvider>
            <TodoForm/>
            <TodoList/>
        </TodoProvider>
      </Fragment>
      
  );
}


export default App;
