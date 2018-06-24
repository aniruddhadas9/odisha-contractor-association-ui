import * as React from 'react';

export class Profile extends React.Component<any, any> {

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
                <p>this is profile</p>
            </div>
        )
    }

    private toggle() {
        this.setState({
            isCollapsed: !this.state.isCollapsed
        });
    }

}


