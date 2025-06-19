import classes from "./SkillComponent.module.css";
import { Skills } from "./Skill";

export default function SkillComponent() {
  return (
    <ul  className={classes.skillComponent}>
      {Skills.map((skill) => (
        <li key={skill.id} className={classes.skillitem}>
          <h3 className={classes.skillheader}  > {skill.title}</h3>

          <img src={skill.image} className={classes.skillimg} />
          <p>{skill.description}</p>
        </li>
      ))}
    </ul>
  );
}
