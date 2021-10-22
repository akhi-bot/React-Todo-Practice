import React, {useState} from 'react'

const TodoContext = React.createContext({
    todo : [],
    show: false,
    remove: [],
    updateInput: (id) => {},
    removeUpdateInput: () => {},
    newTodo: (item) => {},
    showTodo: () => {}
})

export const TodoProvider = (props) => {
    const [addTodo, setAddTodo] = useState([])
    const [showTodo, setShowTodo] = useState(false)

    

    const addTodoHandler = (content) => {
        setAddTodo(addTodo.concat({
            id: Math.random(),
            todo: content
        }))
    }

    const removeHandler = (todoId) => {
        const todo = addTodo.filter((element) => element.id !== todoId);
        setAddTodo(todo)
    }
    
        const updateInputHandler = (todoId, value) => {
            const findedTodo = addTodo.find(({id}) => id === todoId)
            findedTodo.todo = value
            return value
        }
    
    const showTodoHandler = () => {
        setShowTodo(true)
    }


    return (
        <TodoContext.Provider value={
            {
                todo: addTodo,
                show: showTodo,
                remove: removeHandler,
                newTodo: addTodoHandler,
                showTodo: showTodoHandler,
                updateInput: updateInputHandler
            }
        }>
        {props.children}
        </TodoContext.Provider>
    )
} 

export default TodoContext;