import {Link, Route} from 'react-router-dom';
import {Home} from './Home';
import * as React from 'react';




export class GovtCommunication extends React.Component<any, any> {

    constructor(props: any) {
        super(props);
        this.state = {
            isCollapsed: true
        };

        this.toggle = this.toggle.bind(this);
    }

    public render() {
        return (
            <div className="container">
                <div className="row">
                    <div className="col">manager</div>
                    <div className="col"><Link to={'govt-communication/to'}>to</Link></div>
                </div>
                <div className="row">
                    <div className="col">thisi s submanager</div>
                </div>
                <div className="row">
                    <div className="col">
                        <Route path={"/govt-communication/to"} component={Home}/>
                    </div>
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


