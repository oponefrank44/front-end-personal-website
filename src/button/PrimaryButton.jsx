import {Link }from "react-router-dom"
import classes from "./PrimaryButton.module.css";



export default function PrimaryButton({onClick}) {
    
  return (
    <button
     className={classes["primary-button"]}
        onClick={onClick
        }
    >
      <p className={classes["primary-button-p"]}>discover</p>
    </button>
  );
}