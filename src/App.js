import React from "react";
import TodoList from "./todo/todo-list/todo-list";
import 'bootstrap/dist/css/bootstrap.min.css';
import {Button} from "react-bootstrap";
import {ButtonGroup} from "react-bootstrap";
import Context from "./todo/contex";
import AddTodo from "./todo/add-todo/add-todo";

function App() {
    const [todos, setTodos] = React.useState([
        { id: 1, completed: true, title: 'Buy milk'},
        { id: 2, completed: false, title: 'Buy bread'},
        { id: 3, completed: false, title: 'Buy water'},
    ]);

    function statusTodo(id) {
        setTodos(
            todos.map(todo => {
                if (todo.id === id) {
                    todo.completed = !todo.completed
                }
                return todo
            })
        )
    }

    function removeTodoItem(id) {
        setTodos(todos.filter(todo => todo.id !== id))
    }

    function addTodo(title) {
        setTodos(todos.concat([{
            title,
            id: todos.length + 1,
            completed: false
        }]))

    }
    return (
        <Context.Provider value={{ removeTodoItem }}>
            <div className={'wrapper'}>
                <h1>TodoList</h1>
                <AddTodo onCreate={addTodo}/>
                <div className={'btn-group'}>
                    <ButtonGroup>
                      <Button id={'btn-active'}>Active</Button>
                      <Button id={'btn-done'}>Done</Button>
                      <Button id={'btn-all'}>All</Button>
                  </ButtonGroup>
                </div>
                  {todos.length ? (
                      <TodoList todos={todos} changeStatus={statusTodo}/>
                  ) : (
                      <h2>No todos! :(</h2>
                  )}

            </div>
        </Context.Provider>
    );
}

export default App;
