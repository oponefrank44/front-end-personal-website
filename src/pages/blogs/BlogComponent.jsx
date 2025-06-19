

import classes from "./BlogComponent.module.css";



export default function BlogComponent({title,content,crtdate}) {
    
  return (
    <div className={classes.blogcomponent}>
    
    <h3 className={classes.blogcomponentheader} ><span>title:</span> {title}</h3>
   <h6><span>Date:</span> {crtdate}</h6> 

    <p className={classes.blogcomponentcontent}><span>content:</span> {content}</p>
     
    </div>
  );
}