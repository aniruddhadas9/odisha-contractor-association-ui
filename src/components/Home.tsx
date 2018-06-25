import * as React from 'react';
import logo from '../assets/logo.svg';
import {OcaCarousel} from './OcaCarousel/OcaCarousel';

export class Home extends React.Component {

    public render() {
        return  (
            <div>
                <OcaCarousel/>
                <header className="App-header">
                    <img src={logo} className="App-logo" alt="logo"/>
                    <h1 className="App-title">Welcome to React</h1>
                </header>
            </div>
        )
    }
}
