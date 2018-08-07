import * as React from 'react';
import { RouteComponentProps } from 'react-router';
import 'bootstrap';


interface RState {
    currentCount: number;
}

export class References extends React.Component<RouteComponentProps<{}>, RState> {
    constructor() {
        super();
        this.state = { currentCount: 0 };
    }

    public render() {
        return <div>
            <div className="jumbotron"> <h1>References </h1> </div>

            <p>To consolidate, push the menu button below</p>

            <button> Consolidate In Bond Entries </button>

            <p>Current count: <strong>{this.state.currentCount}</strong></p>

            <button onClick={() => { this.incrementCounter() }}>Increment</button>

            <h2>Month Field</h2>
            <p>The <strong>input type="month"</strong> allows the user to select a month and year.</p>
            <p>Depending on browser support:A date picker can pop-up when you enter the input field.</p>

            <form>
                Birthday (month and year):
                     <input type="month" name="bdaymonth" />
                <input type="submit" />
            </form>

            <p><strong>Note:</strong> type="month" is not supported in Firefox, Safari, or Internet Explorer 11 and earlier versions.</p>

            <h2>Duty Due Dates</h2>
            <p>The <strong>input type="month"</strong> allows the user to select a month and year.</p>
            <p>Depending on browser support:A date picker can pop-up when you enter the input field.</p>

            <form>
                Due Date (month and year):
                     <input type="month" name="bdaymonth" />
                <input type="submit" />
            </form>

            <p><strong>Note:</strong> type="month" is not supported in Firefox, Safari, or Internet Explorer 11 and earlier versions.</p>

            <h2> Website References </h2>

            <a target="#"
                href="https://www.cnn.com/">
                Politics and Business
            </a>
            <br />
            <a target="#"
                href="https://www.bloomberg.com/">
                All the business news you want
            </a>
            <br />

        </div>;


    }

    incrementCounter() {
        this.setState({
            currentCount: this.state.currentCount + 1
        });
    }
}
