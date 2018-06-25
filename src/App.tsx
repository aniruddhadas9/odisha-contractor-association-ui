import * as React from 'react';
import {BrowserRouter , Route} from 'react-router-dom';
import './App.css';
import {Footer} from './components/footer/Footer';
import {GovtCommunication} from './components/GovtCommunication';
import {Header} from './components/header/Header';
import {Home} from './components/Home';
import {Login} from './components/Login';

class App extends React.Component {
    public render() {
        return (
            <BrowserRouter>
                <div className="App">
                    <Header/>
                    <Route exact={true} path={'/'} component={Home}/>
                    <Route path={"/login"} component={Login}/>
                    <Route path={"/profile"} component={Header}/>
                    <Route path={"/govt-communication"} component={GovtCommunication}/>
                    <Footer/>
                </div>
            </BrowserRouter>
        );
    }
}

export default App;
