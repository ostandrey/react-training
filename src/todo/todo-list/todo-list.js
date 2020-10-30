import React from 'react';
import TodoItem from "../todo-item/todo-item";
import PropTypes from 'prop-types'

const styles = {
    ul: {
        listStyle: 'none',
        margin: 0,
        padding: 0
    }
};

function TodoList(props) {
    return (
        <div>
            <ul style={styles.ul}>
                { props.todos.map((todo, index) => {
                    return <TodoItem
                        todo={todo}
                        key = {todo.id}
                        index ={index}
                        onChange={props.changeStatus}/>
                })}
            </ul>
        </div>
    )
}

TodoList.propTypes = {
    todos: PropTypes.arrayOf(PropTypes.object),
};

export default TodoList
