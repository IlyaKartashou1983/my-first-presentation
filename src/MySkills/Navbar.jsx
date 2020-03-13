import React from 'react';
import {Link} from "react-router-dom";

class Navbar extends React.Component {
    state = {
        isHidden: false
    }
    onShowFiltersClick = () => {
        this.setState({
            isHidden : false
        })
    }
    onHideFiltersClick = () => {
        this.setState({
            isHidden : true
        })
    }
    render = () => {
        let daysItems = this.props.days
            .map(d => <Link to={d.routeData}>{d.day}</Link>

    );


        return (
            <div>
                {!this.state.isHidden && <div>{daysItems}</div>}
                {!this.state.isHidden && <span onClick={this.onHideFiltersClick}>hide</span>}
                {this.state.isHidden && <span onClick={this.onShowFiltersClick}>show</span>}
            </div>
        );
    }
}

export default Navbar;