import React from 'react';
import s from '../Greeting/Greeting.module.css'
import a from '../MyName/MyName.module.css'


class MyFriend extends React.Component {
    render = () => {
        return (
            <div >
                {this.props.name}
            </div>
        );
    }
}

export default MyFriend;



