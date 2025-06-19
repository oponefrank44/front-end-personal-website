import classes from "./TestimonyComponent.module.css";
export default function TestimonyComponent({ job, review, name, src }) {
  return (
    <div className={classes["testimony-div"]} >
      <div className={classes["testimony-container"]}>
        <img className={classes["testimany-picture"]} src={src} />

        <h3 className={classes["testimany-jobheading"]}> {job}</h3>
        <h4 className={classes["testimany-name"]}> {name}</h4>
        <p className={classes["testimany-content"]}>{review}</p>
      </div>
    </div>
  );
}
