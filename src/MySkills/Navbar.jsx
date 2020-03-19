import React from 'react';
import {Link, NavLink} from "react-router-dom";
import './Navbar.css'


class Navbar extends React.Component {
    state = {
        isHidden: false
    }
    onShowFiltersClick = () => {
        this.setState({
            isHidden: false
        })
    }
    onHideFiltersClick = () => {
        this.setState({
            isHidden: true
        })

    }

    returnActiveDay = (e) => {
        let selectedDay = e.currentTarget.text;
        this.props.onAllFilterClick(selectedDay)

    }


    render = () => {


        let daysItems = this.props.days
            .map(d => {
                    return <NavLink activeClassName='yellow' to={d.routeData}
                                    onClick={this.returnActiveDay}>{d.day}</NavLink>
                }
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