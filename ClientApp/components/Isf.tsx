import * as React from 'react';
import { RouteComponentProps } from 'react-router';
import 'bootstrap';


export class Isf extends React.Component<RouteComponentProps<{}>, {}> {
    public render() {
        return <div>
            <div className="jumbotron"> <h1>Importer Security Filing (10 + 2) </h1> </div>
            <p>Welcome to your new single-page application, built with:</p>
            <p>This is the ISF Page</p>
            <h3>Getting hold of components and links </h3>
        </div>;
    }
}
