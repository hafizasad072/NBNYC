import React, { Component } from 'react'
import CounterControl from '../Component/CounterControl'
import axios from 'axios'
class Counter extends Component {

    incrementCounter = () => {
        let cstate = { ...this.state };
        cstate.counter = cstate.counter + 1;
        cstate.historyList = [...cstate.historyList];
        cstate.historyList.push(cstate.counter);
        this.setState({ counter: cstate.counter, historyList: cstate.historyList });
    }

    decrementCounter = () => {
        let cstate = { ...this.state };
        cstate.counter = cstate.counter - 1;
        cstate.historyList = [...cstate.historyList];
        cstate.historyList.push(cstate.counter);
        this.setState({ counter: cstate.counter, historyList: cstate.historyList });

    }

    ActionsList = [
        { name: 'Increment', click: this.incrementCounter },
        { name: 'Decrement', click: this.decrementCounter }
    ]

    state = {
        counter: 0,
        historyList: []
    }

    Controls = this.ActionsList.map((item) => <CounterControl key={item.name} click={item.click} name={item.name} />);
    onSubmit = (event) => {
        event.preventDefault();
        const countToAdd = this.getNumber.value;
        let newState = { ...this.state }
        newState.counter = newState.counter + parseInt(countToAdd);
        newState.historyList = [...this.state.historyList];
        newState.historyList.push(newState.counter);
        this.setState({ counter: newState.counter, historyList: newState.historyList });
    }
    componentWillMount() {
        axios.get('https://localhost:44386/api/values', { crossDomain: true })
            .then(response => response.data)
            .then((data) => {
                data.map((item, index) => console.log(item))
            })
        console.log("ComponentWillMount")
    }
    render() {
        return (
            <div>
                <h1>Current Count is: {this.state.counter}</h1>
                {this.Controls}
                <br />
                <form onSubmit={this.onSubmit}>
                    <input type="number" ref={(input) => { this.getNumber = input }} />
                    <input type="submit" value="submit" />
                </form>
                <ul>
                    {this.state.historyList.map((item, i) => <li key={i} >{item}</li>)}
                </ul>
            </div>
        )
    }
}
export default Counter