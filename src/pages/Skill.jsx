import SkillComponent from "./skils/SkillComponent";
import classes from "./Skill.module.css"
import skillsimg from "../assets/skills.png"
export default function Skill() {
    return (
        <div className={classes.skillspage}>

            <img src={skillsimg} alt="skill img" className={classes.skillimg}/>
            <p className={classes.skillsparagh}>Here are some of the skills I have acquired:</p>
            <SkillComponent />
           
        </div>
    );
}