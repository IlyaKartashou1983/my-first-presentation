import React from 'react';
import s from './App.module.css';
import Greeting from "../Greeting/Greeting";
import MyName from "../MyName/MyName";
import Myskills from "../MySkills/Myskills";
import MyFriends from "../MyFriends/MyFriends";


class App extends React.Component {
    constructor(props) {
        super(props);
        /*this.newTaskTitleRef = React.createRef();*/
        this.newNameRef = React.createRef();
    }
    state = {
        skills: [
            {mySkill: ' обаятельный '},
            {mySkill: ' гениальный '},
            {mySkill: ' добряк '}
        ],
        names: [
            {name: ''}
        ]
    };
    onAddClick = () => {
        let name = this.newNameRef.current.value;
        debugger
        let newNames = [...this.state.names, {name}];
        alert(name + " ,ну как ты там поживаешь?)))");
        this.newNameRef.current.value = '';
        this.setState({
            names: newNames
        })
    };

    render = () => {
        return (
            <div className={s.wrapper}>
                <div className={s.container}>
                    <MyName/>
                    <MyFriends names={this.state.names}/>
                    <Myskills skills={this.state.skills}/>
                    <Greeting onAddClick={this.onAddClick} refNewName={this.newNameRef}/>
                </div>
            </div>
        );
    }
}

export default App;

