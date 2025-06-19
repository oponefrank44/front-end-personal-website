

import classes from "./Secondary.module.css"



export default function TextairyButton({title,...props}){
    return(
        <button className={classes["textairy"]} {...props}>
            {title}
        </button>
    )
}