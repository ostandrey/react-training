import React, {useContext} from 'react';
import PropTypes from 'prop-types'
import {Button} from "react-bootstrap";
import Context from "../contex";

const styles = {
    li: {
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
        padding: '10px 10px',
        border: '1px solid #ccc',
        borderRadius: '4px',
        marginBottom: '.5rem',
    },
    input: {
        marginRight: '1rem',
    },
    btnDelete: {
        padding: 0,
        lineHeight:0
    },
};

function TodoItem({todo, index, onChange }) {
    console.log(todo);
    const {removeTodoItem} = useContext(Context);
    const classes = [];

    if(todo.completed) {
        classes.push('done');
    }

    return (
        <li style={styles.li}>
            <span className={classes.join(' ')}>
                <input type="checkbox"
                       style={styles.input}
                       checked={todo.completed}
                       onChange={() => onChange(todo.id)}/>
                {index + 1}
                {/*space*/}
                &nbsp;
                {todo.title}
            </span>
            <Button variant="outline-danger" id={'btn-delete'} onClick={removeTodoItem.bind(null, todo.id)}>
                <span className="material-icons">
                    delete_forever
                </span>
            </Button>
        </li>
    )
}

//validation
TodoItem.propTypes = {
    todo: PropTypes.object,
    index: PropTypes.number,
    onChange: PropTypes.func
};

export default TodoItem
