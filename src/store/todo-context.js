import React, {useState} from 'react'

const TodoContext = React.createContext({
    todo : [],
    show: false,
    remove: [],
    edit: {},
    updateInput: () => {},
    removeUpdateInput: () => {},
    newTodo: (item) => {},
    showTodo: () => {}
})

export const TodoProvider = (props) => {
    const [addTodo, setAddTodo] = useState([])
    const [showTodo, setShowTodo] = useState(false)
    const [editTodo, setEditTodo] = useState({})
    

    const addTodoHandler = (content) => {
        setAddTodo(addTodo.concat({
            id: addTodo.length + 1,
            todo: content
        }))
    }

    const removeHandler = (item) => {
        setAddTodo(item)
    }

    const showUpdateInputHandler = (item) => {
        setEditTodo({
            state: true,
            id: item
        })
    }

    const removeUpdateInputHandler = () => {
        setEditTodo(false)
    }
    


    const showTodoHandler = () => {
        setShowTodo(true)
    }

    return (
        <TodoContext.Provider value={
            {
                todo: addTodo,
                show: showTodo,
                edit: editTodo,
                remove: removeHandler,
                newTodo: addTodoHandler,
                showTodo: showTodoHandler,
                updateInput: showUpdateInputHandler,
                removeUpdateInput: removeUpdateInputHandler
            }
        }>
        {props.children}
        </TodoContext.Provider>
    )
} 

export default TodoContext;