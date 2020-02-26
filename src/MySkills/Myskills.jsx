import React from 'react';
import Myskill from "./Myskill";
import s from './Myskills.module.css';


class Myskills extends React.Component {
    render = () => {
       let mySkills = this.props.skills.map((t, index) => {
                return <Myskill key={index} myskill={t.mySkill}/>
            }
        );

        /*let mySkills = this.props.skills.map((t, index) => {
            return
            <Myskill key={index} myskill={t.mySkill}/>
        }
        );*/

        return (
            <div className={s.skills}>
                <div className={s.mySkill}>Мои лучшие качества :</div>
                {mySkills}
            </div>
        );
    }
}

export default Myskills;



