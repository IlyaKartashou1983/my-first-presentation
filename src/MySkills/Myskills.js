import React from 'react';
import MySkill from "./Myskill";
import s from './Myskills.module.css'




class MySkills extends React.Component {

    render = () => {
        let mySkills = this.props.skills.map((t) => {
                return <MySkill myskill={t.mySkill} />
            }
        )
        return (
            <div className={s.skills}>
                <div className={s.mySkill}>Мои лучшие качества :</div>
                {mySkills}
            </div>
        );
    }
}

export default MySkills;



