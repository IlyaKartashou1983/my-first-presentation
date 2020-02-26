import React from 'react';

class MyFriend extends React.Component {
    render = () => {
        return (
            <div>
                {this.props.name}
            </div>
        );
    }
}

export default MyFriend;



