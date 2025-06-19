// Make sure to import or define 'classes' before using it, or replace with your own class names.
import { Link } from "react-router-dom";
import classes from "./ErrorHandling.module.css"
export default function ErrorHadling({title,message}) {
    return (
        <div className={classes.errordiv}>
            <h1 className={classes.errordiveheading}>
                {title}
            </h1>
            <p>
                {message}
            </p>
           
        </div>
    );
}