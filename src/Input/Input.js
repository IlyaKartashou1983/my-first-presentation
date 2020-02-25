import React from 'react';
import s from '../Greeting/Greeting.module.css'



class Input extends React.Component {
    render = () => {
        return (
            <div >
                <input className={s.input} ref={this.props.refNewName}  type="text" placeholder="Введи свое имя,брат!"/>
            </div>
        );
    }
}

export default Input;



