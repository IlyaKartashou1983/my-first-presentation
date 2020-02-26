import React from 'react';
import s from './Greeting.module.css';
import Input from "../Input/Input";
import Button from "../Button/Button";

class Greeting extends React.Component {
    render = () => {
        return (
            <div className={s.wrap}>
                <Input refNewName={this.props.refNewName}/>
                <Button onClick={this.props.onAddClick}/>
            </div>
        );
    }
}

export default Greeting;



