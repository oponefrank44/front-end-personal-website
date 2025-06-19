



import classes from "./SharedContent.module.css"

export default function SharedContent({title,children}) {
    return (
        <div className={classes["shared-component"]}>
        <h2 className={classes["shared-heading"]}>{title}</h2>
        <p className={classes["shared-children"]} >
            {children}
        </p>


        </div>
    )
}