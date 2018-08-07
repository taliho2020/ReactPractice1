import * as React from 'react';
import { RouteComponentProps } from 'react-router';
import 'bootstrap';


interface PState {
    currentCount: number;
}

export class Profiles extends React.Component<RouteComponentProps<{}>, PState> {
    constructor() {
        super();
        this.state = { currentCount: 0 };
    }

    public render() {
        return <div>
            <div className="jumbotron"> <h1>In Bond Entries Pending</h1> </div>

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

        </div>;


    }

    incrementCounter() {
        this.setState({
            currentCount: this.state.currentCount + 1
        });
    }
}
