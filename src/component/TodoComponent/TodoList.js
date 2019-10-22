import React from 'react';
import Todo from "./Todo";
import './TodoList.css'

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
        if (this.state.term){
            event.preventDefault();
            this.setState({
                term: '',
                items: [...this.state.items, <Todo title={this.state.term}/>]
            });
        }
    }

    render() {
        return (
            <div>
                <div>
                    <form className="todoList" >
                        <input value={this.state.term} onChange={this.onChange} />
                        <button className="button" onSubmit={this.onSubmit}>Add Item</button>
                    </form>
                    {this.state.items}
                </div>
            </div>
        );
    }
}

//remove
export default TodoList;

const mapStateToProps = state => ({
    counterSum: state.counterSum,
    counterArr: state.counterArr
});

const mapDispatchToProps = dispatch => ({
    generateCounters: counterNum =>
        dispatch({
            type: "GENERATE_COUNTERS",
            payload: parseInt(counterNum)
        }),
    clearCounterSum: () =>
        dispatch({
            type: "CLEAR_SUM"
        }),
    increaseNumber: (changedNum, id) =>
        dispatch({
            type: "INCREASE_COUNT",
            payload: {changedNum, id}
        }),
    decreaseNumber: (changedNum, id) =>
        dispatch({
            type: "DECREASE_COUNT",
            payload: {changedNum, id}
        }),
    counterUpdateCallback: (changedNum) =>
        dispatch({
            type: "COUNTER_SUM",
            payload: changedNum
        })
});

export default connect(mapStateToProps, mapDispatchToProps)(CounterGroup);