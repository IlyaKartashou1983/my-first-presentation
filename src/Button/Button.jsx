import React from 'react';
import s from '../Greeting/Greeting.module.css';


class Button extends React.Component {
    render = () => {
        return (
            <button className={s.btn} onClick={this.props.onClick}>Hello</button>
        );
    }
}

export default Button;



