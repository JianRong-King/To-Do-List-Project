import React, {useState} from 'react';
import { TodoForm } from './TodoForm';
import {v4 as uuidv4} from 'uuid';
import { Todo } from './todo';
uuidv4();

export const TodoWrapper = () => {
    const [todos, setTodos] = useState([]);

    const addTodo = todo => {
        setTodos([...todos, {id: uuidv4(), task: todo, completed: false, isEditing: false}
        ]);
        console.log(todos);
    }
    return (
        <div className='TodoWrapper'>
            <TodoForm  addTodo = {addTodo}/>
            <Todo />

        </div>
    )
};

// Our app.js now has a single component TodoWrapper
// in its div
// rememeber div is a container for elements