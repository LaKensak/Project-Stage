import React, {Component} from "react";
import {render} from "react-dom";
import HomePage from './HomePage';
import RoomJoinPage from './RoomJoinPage';
import {Home} from "@material-ui/icons";

export default class App extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div>
                <HomePage/>
                <RoomJoinPage/>
            </div>
        );
    }
}

const appDiv = document.getElementById('app');
render(<App/>, appDiv);