import {Button} from "react-bootstrap";
import React, {useState} from "react";
import PropTypes from 'prop-types';

function AddTodo({ onCreate }) {
    const [value, setValue] = useState('');


    function submitTodo(event) {
        event.preventDefault();
        if (value.trim()) {
            onCreate(value);
            setValue('')
        }
        console.log(event);
    }
    return(
        <form action="" onSubmit={submitTodo}>
            <div className={'input-container'}>
                <div className="form-group">
                    <input type="text"
                           className="form-control"
                           id="inputTodo"
                           value={value}
                           onChange={event => setValue(event.target.value)}
                           placeholder={'Input task'}>
                    </input>
                </div>
                <div >
                    <Button variant="primary" type={'submit'}>Add task</Button>
                </div>
            </div>
        </form>
    );
}

AddTodo.propTypes = {
    onCreate: PropTypes.func
};

export default AddTodo
