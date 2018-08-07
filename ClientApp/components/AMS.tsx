import * as React from 'react';
import { RouteComponentProps } from 'react-router';
import { InputStyles } from './InputStyles';
import 'bootstrap';

const Cust = ['Admiral Craft', 'Ahead Collection', 'B And A Trading', 'Best Home Fashion', 'Captain Blue', 'WiniDaewoo Corp'];

const CustList = Cust.map((cust, i) => <li key={'cust_' + i}> {cust} </li>
);

export class AMS extends React.Component<RouteComponentProps<{}>, {}> {

    
    public render() {
        const styles = {
            color: 'blue',
            backgroundColor: 'grey',
            width: '100%'
        };


        return <div style={InputStyles.style2}>

            <div className="jumbotron"> <h1>Automated Manifest System</h1> </div>
            <p color="blue">Input your new shipments here to notify U.S. Customs and Border Protection:</p>
            <p>This is the AMS Page</p>
            <input type="text" value="field1" />
            <form>
            <input type="text" value="field1" />
            <input type="text" value="field1" />
            <input type="text" value="field1" />
            <input type="text" value="field1" />
            <input type="text" value="field1" />
            <input type="text" value="field1" />
            <input type="text" value="field1" />
            <input type="text" value="field1" />
                <input type="text" value="field1" />
            </form>

            <form>
                <input type="text" value="field1" />
                <input type="text" value="field1" />
                <input type="text" value="field1" />
                <input type="text" value="field1" />
                <input type="text" value="field1" />
                <input type="text" value="field1" />
                <input type="text" value="field1" />
                <input type="text" value="field1" />
                <input type="text" value="field1" />
            </form>

            <h3> Sort By Customer </h3>
            <ol>{CustList} </ol>

        </div>;
    }
}
