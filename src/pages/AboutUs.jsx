import AboutHeaderdesign from "./Aboutus/AboutHeaderdesign";
import classes from "./About.module.css";
import SharedContent from "./sharedPages/SharedContent";
import { AboutList } from "./Aboutus/AboutList";

export default function About() {
  return (
    <div className={classes["about-page"]}>
      <h1 className={classes["about-Header"]}>About Us</h1>
      <AboutHeaderdesign />
      <SharedContent title=" Full-Stack Web Developer | Problem Solver | Lifelong Learner">
        <p>
         
          I’m a passionate full-stack web developer with 1+ year of hands-on
          experience building dynamic web applications. What began as curiosity
          in 2022—inspired by Dr. Angela Yu’s Udemy course "100 Days of
          Python"—has evolved into a dedicated career path and lifestyle. Coding
          has transformed the way I think, solve problems, and create value, and
          I’m committed to growing as a developer every day.
        </p>
      </SharedContent>
      <SharedContent title="What I Bring to the Table">
        {AboutList.map((data) => (
          <li key={data.id} className={classes["contact-content-li"]}>
            {data.title}
          </li>
        ))}
      </SharedContent>
    </div>
  );
}
