import * as React from 'react';
import { RouteComponentProps } from 'react-router';
import 'bootstrap';


interface CounterState {
    currentCount: number;
}

export class Counter extends React.Component<RouteComponentProps<{}>, CounterState> {
    constructor() {
        super();
        this.state = { currentCount: 0 };
    }

    public render() {
        return <div>
            <div className="jumbotron"><h1> Counter</h1> </div>

            <p>This is the first counter.</p>

            <p>Current count: <strong>{ this.state.currentCount }</strong></p>

            <button onClick={() => { this.incrementCounter() }}>Increment</button>

            <h1 className="Cards">Counter 2</h1>

            <p>This is the second counter.</p>

            <p>Current count: <strong>{this.state.currentCount}</strong></p>

            <button onClick={() => { this.incrementCounter() }}>Increment</button>

            <h1 className="Cards">Counter 3</h1>

            <p>This is the 3rd counter</p>

            <p>Current count: <strong>{this.state.currentCount}</strong></p>

            <button onClick={() => { this.incrementCounter() }}>Increment</button>


            <div className="container mt-3">
                <h2>Enable Via JavaScript</h2>
                <div className="dropdown">
                    <button type="button" className="btn btn-primary" data-toggle="dropdown">
                        Dropdown button
                </button>
                    <div className="dropdown-menu">
                        <a className="dropdown-item" href="#">Link 1</a>
                        <a className="dropdown-item" href="#">Link 2</a>
                        <a className="dropdown-item" href="#">Link 3</a>
                    </div>
                </div>
                <p><strong>Note:</strong> The data-toggle="dropdown" attribute is required regardless of whether you call the dropdown() method.</p>
            </div>


        </div>;
    }

    incrementCounter() {
        this.setState({
            currentCount: this.state.currentCount + 1
        });
    }
}
