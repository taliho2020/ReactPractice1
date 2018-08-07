import * as React from 'react';
import { RouteComponentProps } from 'react-router';
import 'bootstrap';

const Cmsq = ['DWCHKR800190', 'SHKK380033181434', 'PSNQPUM180716', 'ONEYHANU12152400', 'ASTI221518075963', 'APLY104486067','AOKT104486720', 'AMAWSSELA1808109', 'SUIH180730NY35'];

const CMSQList = Cmsq.map((cmsq, i) => <li key={'cmsq_' + i}> {cmsq} </li>
);

interface CMSQState {
    currentCount: number;
}

export class CMSQ extends React.Component<RouteComponentProps<{}>, CMSQState> {
    constructor() {
        super();
        this.state = { currentCount: 0 };
    }

    public render() {
        return <div>
            <div className="jumbotron"> <h1>Cargo Manifest Status Query</h1></div>
            <input type="textarea" />

            <p>Enter up to 8 bill of ladings</p>

            <button> SEND TO CBP </button>

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


            <button> <h3> Sort By AMS # or By Customer </h3> </button>
            <ol>{CMSQList} </ol>


        </div>;


    }
    
    incrementCounter() {
        this.setState({
            currentCount: this.state.currentCount + 1
        });
    }
}
