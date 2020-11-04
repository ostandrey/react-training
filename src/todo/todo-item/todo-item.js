import React, {useContext} from 'react';
import PropTypes from 'prop-types'
import {Button} from "react-bootstrap";
import Context from "../contex";

let TodoItem = ({todo, index, onChange }) => {

    const {removeTodoItem} = useContext(Context);
    const classes = [];

    if(todo.completed) {
        classes.push('done');
    }

    return (
        <li>
            <span className={classes.join(' ')}>
                <input type="checkbox"
                       checked={todo.completed}
                       className={'item-checkbox'}
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
};

//validation
TodoItem.propTypes = {
    todo: PropTypes.object,
    index: PropTypes.number,
    onChange: PropTypes.func
};

export default TodoItem
