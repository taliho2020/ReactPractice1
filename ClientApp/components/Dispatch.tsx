import * as React from 'react';
import { RouteComponentProps } from 'react-router';
import { Link, Route } from 'react-router-dom';
import { Home } from './Home';
import { Counter } from './Counter';
import { FetchData } from './FetchData';
import 'bootstrap';



const redPanda = {
    src: 'https://upload.wikimedia.org/wikipedia/commons/b/b2/Endangered_Red_Panda.jpg',
    alt: 'Red Panda',
    width: '200px'
};

const friends = [
    {
        title: "Yummmmmmm",
        src: "https://s3.amazonaws.com/codecademy-content/courses/React/react_photo-monkeyweirdo.jpg"
    },
    {
        title: "Hey Guys!  Wait Up!",
        src: "https://s3.amazonaws.com/codecademy-content/courses/React/react_photo-earnestfrog.jpg"
    },
    {
        title: "Yikes",
        src: "https://s3.amazonaws.com/codecademy-content/courses/React/react_photo-alpaca.jpg"
    }
];

const alpsLake1 = {
    src: 'C:\Users\TAL\Source\Repos\ReactDemo2\ReactDemo2\Assets\Images\AlpsLake.png',
    alt: 'Alps Lake Scene #2',
    width: '300px'
};


interface DState {
    currentCount: number;
}

function myCall() {
    alert('Please check the list.')
}

export class Dispatch extends React.Component<RouteComponentProps<{}>, DState> {
    constructor() {
        super();
        this.state = { currentCount: 0 };
    }

       public render() {
        const style = {
            backgroundColor: "grey",
            border: "1px solid red",
            padding: "28px"
           
        };

           const friend = friends[0];

        return <div style={style}>
            <div className="jumbotron"> <h1>Dispatch Dashboard</h1> </div>

            <p>To consolidate, push the menu button below</p>

            <button onClick={myCall}> Consolidate In Bond Entries </button>

            <p>Current count: <strong>{this.state.currentCount}</strong></p>

            <button onClick={() => { this.incrementCounter() }}>Increment</button>

            <h2>Delivery Next Week </h2>
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

            <form>
                <label>Input Form #1 </label>
                <br />
                User Name: <br />
                <input type="username"   placeholder="User Name" />
                <br />
                Password: <br />
                <input type="password" placeholder="password" />
                <br />
                Address Line #1: <br />
                <input type="text" />
                <br />
                Address Line #2: <br />
                <input type="text" />
                <br />
                City: <br />
                <input type="text" />
                <br />
                State: <br />
                <input type="number" />
                <br />
                Zip Code: <br />
                <input type="textarea" name="Zip Code" placeholder="Zip Code" />
                <br />
                Telephone #1:  <br />
                <input type="text" name="Tel #" placeholder="Tel #" />
                <br />
                Fax #1: <br />
                <input type="text" name="Fax #" placeholder="Fax #" />
                <br />
                <input type="text" name="Contact #1" placeholder="Contact #1"/>
                <input type="text" name="Contact #2" placeholder="Contact #2" />
                <br />
                <input type="email" name="Email #1" placeholder="Email #2 "/>
                <input type="email" name="Email #2" placeholder="Emami #2" />
                <br />
                <input type="text" name="Comments" placeholder="Comments" />
                <br />
               

            </form>

            
            <img src={redPanda.src} width="500" height="400" />
            <br />

            <legend> Alps Lakes: </legend>
            <img src={alpsLake1.src} width={alpsLake1.width} alt={alpsLake1.alt} />
            <br />
            


            <div>
                <h1>{friend.title}</h1>

                <img
                    src={friend.src}
                />
            </div>

            <div>
                <Link to="/Home">Home </Link> | <Link to ="/Counter"> Counter </Link> | <Link to ="/FetchData"> Fetch Data </Link>
            </div>
            <div>
                <Route path="/Home" exact component={Home} />
                <Route path="/Counter" exact component={Counter} />
                <Route path="/FetchData" exact component={FetchData} />

            </div>
        </div>;


    }

    incrementCounter() {
        this.setState({
            currentCount: this.state.currentCount + 1
        });
    }
}
