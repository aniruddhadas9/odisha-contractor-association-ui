import * as React from 'react';
import './App.css';
import {Router, Route, browserHistory} from 'react-router';

import logo from './logo.svg';
import {Home} from './components/Home';
import {Login} from './components/Login';

class App extends React.Component {
    public render() {
        return (
            <div className="App">
                <Router history={browserHistory}>
                    <Route path="/" exact={true} component={Login as any}/>
                    <Route path="/home" component={Home as any}/>
                </Router>
                <header className="App-header">
                    <img src={logo} className="App-logo" alt="logo"/>
                    <h1 className="App-title">Welcome to React</h1>
                </header>
                <p className="App-intro">
                    To get started, edit <code>src/App.tsx</code> and save to reload.
                </p>
            </div>
        );
    }
}

export default App;
