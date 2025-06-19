

import classes from "./Secondary.module.css"



export default function SecondaryButton({title,...props}){
    return(
        <button className={classes["secondary"]} {...props}>
            {title}
        </button>
    )
}