
import classes from './NoProject.module.css'

export default function Noprojects({title}) {
    return (
        <div className={classes.noproject}>
            <div className={classes["header-Main-container"]}>
                {/* floating ball */}
                <div className={classes["header-Main--floating-ball-outer"]}>
                    
                </div>
                {/* heading and subheading */}
                <div className={classes["header-Main--heading-container"]}></div>
            </div>
            <h3> {title}</h3>
        </div>
    )
}