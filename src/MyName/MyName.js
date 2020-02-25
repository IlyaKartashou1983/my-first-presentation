import React from 'react';
import s from '../Greeting/Greeting.module.css'
import a from './MyName.module.css'


class MyName extends React.Component {
    render = () => {
        return (
            <div className={a.name}>
                Илья Карташов
            </div>
        );
    }
}

export default MyName;



