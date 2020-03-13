import React from 'react';
import s from './Greeting.module.css';
import Input from "../Input/Input";
import Button from "../Button/Button";

class Greeting extends React.Component {
    render = () => {
        return (
            <div className={s.wrap}>
                <Input
                    onAddClick={this.props.onAddClick}
                    onChangeInput={this.props.onChangeInput}
                    onKeyPress ={this.props.onKeyPress}
                    classForInput ={this.props.classForInput}
                    title={this.props.title}


                />

            </div>
        );
    }
}

export default Greeting;

