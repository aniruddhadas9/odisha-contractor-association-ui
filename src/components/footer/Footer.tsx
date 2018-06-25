import * as React from 'react';
import {Link} from 'react-router-dom'

export class Footer extends React.Component<any, any> {

    constructor(props: any) {
        super(props);
        this.state = {
            isCollapsed: true
        };

        this.toggle = this.toggle.bind(this);
    }

    public render() {
        return (
            <div className="footer">
                <div className="container">
                    <nav className="navbar navbar-light navbar-expand-md bg-faded justify-content-center">
                        <Link to={'/'} className="navbar-brand d-flex w-50 mr-auto">logo</Link>
                        <button
                            className="navbar-toggler btn btn-outline-primary" type="button" data-toggle="collapse"
                            onClick={this.toggle}
                            data-target="#candifoodtoggle">
                            <span className=" navbar-toggler-icon"/>
                        </button>
                        <div className=" navbar-collapse collapse w-100" id="candifoodtoggle">
                            <ul className="nav navbar-nav ml-auto w-100 justify-content-end">
                                <li className="nav-item">
                                    <Link className="nav-link" to="/govt-communication">Govt Communication</Link>
                                </li>
                                <li className="nav-item">
                                    <Link className="nav-link" to="/profile">profile</Link>
                                </li>
                            </ul>
                        </div>
                    </nav>
                </div>
            </div>
        )
    }

    private toggle() {
        this.setState({
            isCollapsed: !this.state.isCollapsed
        });
    }

}


