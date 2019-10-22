import React from 'react';
import './Todo.css';
function Todo(props) {
        return (
            <div>
                <input type='checkbox' />
                <span class='completed-task'>{props.title}</span>
            </div>
        )
}

export default Todo;
