import * as React from 'react';
import logo from '../assets/logo.svg';
import {OcaCorousel} from './OcaCorousel/OcaCorousel';

export class Home extends React.Component {

    public render() {
        return  (
            <div>
                <OcaCorousel/>
                <header className="App-header">
                    <img src={logo} className="App-logo" alt="logo"/>
                    <h1 className="App-title">Welcome to React</h1>
                </header>
            </div>
        )
    }
}
