import * as React from 'react';
import { RouteComponentProps } from 'react-router';
import { colorStyles } from './facebookStyles'
import 'bootstrap';


interface ABIState {
    currentCount: number;
}

export class ABI extends React.Component<RouteComponentProps<{}>, ABIState> {
    constructor() {
        super();
        this.state = { currentCount: 0 };
    }

    public render() {
        return <div color={colorStyles.darkBlue}>

            <div className="jumbotron"> <h1 color={colorStyles.grey}>ABI Entries Summary Screen</h1> </div>

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

            <input type="text" value="Your name" />
            <input type="text" value="Address" />
            <input type="text" value="Phone Number" />
            <input type="text" value="Email Address"/>
            <input type="text" value="Referral 1"/>
            <input type="text" />

        </div>;


    }

    incrementCounter() {
        this.setState({
            currentCount: this.state.currentCount + 1
        });
    }
}
