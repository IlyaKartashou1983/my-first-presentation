import React from 'react';
import s from '../Greeting/Greeting.module.css'
import a from '../MyName/MyName.module.css'


class Button extends React.Component {
    render = () => {
        return (
            <div >
                <button className={s.btn} onClick={this.props.onClick}>Hello</button>
            </div>
        );
    }
}

export default Button;



