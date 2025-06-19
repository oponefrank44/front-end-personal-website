

import classes from "./logo.module.css";

export function FooterLogo() {
  return (
    <div className={classes["header-logo"]}>
        <div className={classes["logo-div"]}>
          <div className={classes["logo-right"]}></div>
      <div  className={classes["logo-bottom"]}></div>
        </div>
            
             <div className={classes["logo-div"]}>
          <button className={classes["logo-main--1"]}></button>
            <button className={classes["logo-main--2"]}></button>
        </div>
    
           
      
    </div>
  );
}