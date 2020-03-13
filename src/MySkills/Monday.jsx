import React from 'react';
import {HashRouter as Router, Link} from "react-router-dom";
import MyName from "../MyName/MyName";
import MyFriends from "../MyFriends/MyFriends";
import Myskills from "./Myskills";
import Greeting from "../Greeting/Greeting";
import s from './Monday.module.css'

class Monday extends React.Component {

    render = () => {

        return (

            <div className={s.wrapper}>
                <div className={s.container}>
                      <MyName/>
                                <MyFriends names={this.props.names}/>
                                <Myskills skills={this.props.skills}/>
                                <Greeting
                                    onKeyPress ={this.props.onKeyPress}
                                    onAddClick={this.props.onAddClick}
                                    onChangeInput={this.props.onChangeInput}
                                    classForInput ={this.props.classForInput}
                                    title={this.props.title}
                                    />
                </div>
            </div>

        );
    }
}

export default Monday;