import * as React from 'react';
import { RouteComponentProps } from 'react-router';
import 'bootstrap';


interface OEState {
    currentCount: number;
}

export class OceanExport extends React.Component<RouteComponentProps<{}>, OEState> {
    constructor() {
        super();
        this.state = { currentCount: 0 };
    }

    public render() {
        return      <div>
            <div className="jumbotron"> <h1>Ocean Export </h1> </div>

            <p>To consolidate, push the menu button below</p>

            <button> Consolidate In Bond Entries </button>

            <h2>Button Styles</h2>
            <button type="button" className="btn">Basic</button>
            <button type="button" className="btn btn-primary">Primary</button>
            <button type="button" className="btn btn-secondary">Secondary</button>
            <button type="button" className="btn btn-success">Success</button>
            <button type="button" className="btn btn-info">Info</button>
            <button type="button" className="btn btn-warning">Warning</button>
            <button type="button" className="btn btn-danger">Danger</button>
            <button type="button" className="btn btn-dark">Dark</button>
            <button type="button" className="btn btn-light">Light</button>
            <button type="button" className="btn btn-link">Link</button>  
            


        </div>;

    }

    incrementCounter() {
        this.setState({
            currentCount: this.state.currentCount + 1
        });
    }
}
