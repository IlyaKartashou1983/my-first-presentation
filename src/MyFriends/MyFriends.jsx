import React from 'react';
import MyFriend from "./MyFriend";
import s from './MyFriends.module.css';

class MyFriends extends React.Component {

    render = () => {
        let myFriends = this.props.names.map((t, index) => {
                return <MyFriend key={index} name={t.name}/>
            }
        );
        return (
            <div className={s.friends}>
                <div className={s.myFriend}>
                    Мои лучшие друзья
                </div>
                {myFriends}
            </div>
        );
    }
}

export default MyFriends;



