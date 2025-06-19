import classes from "./AboutHeaderdesign.module.css";

function AboutHeaderdesign() {
  return (
    <div className={classes["about-header-container"]}>
      <div className={classes["about-container-outer"]}>
        <div className={classes["about-container-inner"]}>
          <div className={classes["about-container-ball"]}></div>
        </div>
      </div>
    </div>
  );
}

export default AboutHeaderdesign;
