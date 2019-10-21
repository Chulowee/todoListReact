import React from 'react';
import './Todo.css';
class Todo extends React.Component {
    render() {
        return (
            <div>
                <input type='checkbox' />
                <span class='completed-task'>{this.props.title}</span>
            </div>
        )
    }
}

export default Todo;
