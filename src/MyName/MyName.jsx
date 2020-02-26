import React from 'react';
import a from './MyName.module.css';


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



