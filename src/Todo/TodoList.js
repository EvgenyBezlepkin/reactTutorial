import React from 'react'
import TodoItem from "./TodoItem"
import PropTypes from 'prop-types'

//TODO: пример функционального компонента

//TODO: пример стилизации inline css

const styles = {
    ul: {
        listStyle: 'none',
        margin: 0,
        padding: 0
    }
}


function TodoList(props) {

    return (
        <ul style={styles.ul}>

            {props.todos.map((item, ind) => {
                return <TodoItem
                        todo= {item}
                        key={item.id}
                        ind = {ind}
                        onChange={props.onChange}/>
            })}


        </ul>
    )
}

TodoList.propTypes = {
    todos: PropTypes.arrayOf(PropTypes.object).isRequired
    //...
}

export default TodoList