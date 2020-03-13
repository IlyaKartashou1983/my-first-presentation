import React from 'react';
import Navbar from "../MySkills/Navbar";
import Monday from "../MySkills/Monday";
import {
    HashRouter as Router,
    Switch,
    Route,
    Link
} from "react-router-dom";


class App extends React.Component {
    constructor(props) {
        super(props);
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
        ],
        error: true,
        classForInput: 'error',
        title: '',
        days: [
            {day: 'Monday', routeData: '/monday'},
            {day: 'Tuesday', routeData: '/tuesday'},
            {day: 'Wednesday', routeData: '/wednesday'},
            {day: 'Thursday', routeData: '/thursday'},
            {day: 'Friday', routeData: '/friday'}
        ]
    };
    onChangeInput = (e) => {
        this.setState({
            error: false,
            title: e.currentTarget.value,
            classForInput: ''


        })
    };
    onKeyPress = (e) => {
        if (e.key === 'Enter') {
            let newText = this.state.title;
            if (newText === '') {
                this.setState({
                    error: true
                })
            } else {
                this.onAddClick(newText)
            }
        }
    }

    onAddClick = (e) => {
        let name = this.state.title;
        let newNames = [...this.state.names, {name}];
        if (name === '') {
            this.setState({
                error: true
            })
        } else {
            alert(name + " ,ну как ты там поживаешь?)))")
            this.setState({

                names: newNames,
                title: '',
                classForInput: 'error'

            })


        }
    }
    render = () => {

        return (
            <Router>

                <Navbar skills={this.state.skills} names={this.state.names} days={this.state.days}/>
               {/* <MyFriends names={this.state.names}/>
                <Myskills skills={this.state.skills}/>*/}

             <Route path='/monday' render={()=><Monday skills={this.state.skills} names={this.state.names}
                                                        onKeyPress ={this.onKeyPress}
                                                        onAddClick={this.onAddClick}
                                                        onChangeInput={this.onChangeInput}
                                                        classForInput ={this.state.classForInput}
                                                        title={this.state.title} />}/>


            </Router>
        );
    }
}

export default App;

