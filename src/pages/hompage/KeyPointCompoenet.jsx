import classes from "./KeyPointComponent.module.css";
import { useSelector } from "react-redux";
import ArrowDark from "../../svg/ArrowDark";
import ArrowLight from "../../svg/ArrowLight";

export default function KeyPointComponent({ Img, title, discription, id }) {
  const invertedcolour = useSelector(
    (state) => state.invertedColour.togglevalue
  );

  let colorHeading;
  if (id == 1) {
    colorHeading = <h3 className={classes["colour-1"]}>{title}</h3>;
  } else if (id == 2) {
    colorHeading = <h3 className={classes["colour-2"]}>{title}</h3>;
  } else if (id == 3) {
    colorHeading = <h3 className={classes["colour-3"]}>{title}</h3>;
  }

  return (
    <div className={classes["key-point-card"]}>
      <div className={classes["card-back"]}>
        <p className={classes["card-back-text"]}>{discription}</p>
      </div>
      <div className={classes["card-face"]}>
        <img src={Img} className={classes["card-face-img"]} />

        <div className={classes["card-face-heading"]}>{colorHeading}</div>
        <div className={classes["card-face-content"]}>
          {invertedcolour ? <ArrowDark /> : <ArrowLight />}
        </div>
      </div>
    </div>
  );
}
