import React from 'react';
import TodoList from './Todo/TodoList'
import './App.css';
import Context from "./context"


function App() {

    let todosData = [
        {id: 1, completed: false, title: 'buy bread'},
        {id: 2, completed: false, title: 'buy butter'},
    ]

    //TODO: возвращает массив с двумя элементами: (состояние, функция изменения состояния)
    const [todos, setTodos] = React.useState(todosData)

    function onChange(id) {
        setTodos(todos.map(item => {
            if (item.id === id) {
                item.completed = !item.completed
            }
            return item
        }))
    }

    function removeTodo(id) {
        setTodos(todos.filter(item => item.id !== id))
    }

    //TODO: пример сквозной передачи событий (2)
    //TODO: пример стилизации в общем файле
    return (
        <Context.Provider value={{removeTodo: removeTodo}}>
            <div className="wrapper">
                <h1>React</h1>
                {todos.length ? <TodoList todos={todos} onChange={onChange}/> : <p>There are not todos</p>}
            </div>
        </Context.Provider>
    );
}

export default App;
