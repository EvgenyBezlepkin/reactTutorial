import React, {useContext} from 'react'
import PropTypes from 'prop-types'
import classes from './todoitem.css'
import Context from "../context";

//TODO: пример деструктуризации
//TODO: пример стилизации с подключаемым файлом
//TODO: пример поднятия события от ребенка к родителю (вызов передаваемых функций)
function TodoItem ({todo, ind, onChange}) {

    //TODO: пример сквозной передачи событий (3)
    const {removeTodo} = useContext(Context)

    function completed() {
        if (todo.completed) {
            return 'done'
        }
    }

    return (
        <li className={'liClass'}>
            <span className={completed()}>
                <input
                    type="checkbox"
                    checked={todo.completed}
                    className={'inputClass'}
                    onChange={() => onChange(todo.id)}/>
                <strong>{ind+1}</strong>
                &nbsp;
                {todo.title}
            </span>
             <button className={'rm'} onClick={() => removeTodo(todo.id)}>&times;</button>
        </li>
    )
}

//TODO: применение бблиотеки prop-types

TodoItem.propTypes = {
    todo: PropTypes.object.isRequired,
    ind: PropTypes.number,
    onChange: PropTypes.func.isRequired
}


export default TodoItem