import React from 'react';
import Todo from "./Todo";

class TodoList extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            term: '',
            items: []
        };
    }

    onChange = (event) => {
        this.setState({ term: event.target.value });
    }

    onSubmit = (event) => {
        event.preventDefault();
        this.setState({
            term: '',
            items: [...this.state.items, <Todo title={this.state.term}/>]
        });
    }

    render() {
        return (
            <div>
                <div>
                    <form className="todoList" onSubmit={this.onSubmit}>
                        <input value={this.state.term} onChange={this.onChange} />
                        <button>Add Item</button>
                    </form>
                    {this.state.items}
                </div>
            </div>
        );
    }
}

export default TodoList;