import React from 'react';
import s from '../Greeting/Greeting.module.css';

class Input extends React.Component {

    render = () => {
        return (
            <div>
                <input className={s[this.props.classForInput]}
                       value={this.props.title}
                       onChange={this.props.onChangeInput}
                       onKeyPress={this.props.onKeyPress}  type="text" placeholder="Введи свое имя,брат!"/>
                <button onClick={this.props.onAddClick}>Add</button>
            </div>
        );
    }
}

export default Input;



