



import KeyPointComponent from "./KeyPointCompoenet";
import classes from "./KeyPoint.module.css"
import {Datas} from "./data.js"


export default function KeyPointPage() {
  return (
    <>
    
    <div className={classes["key-container"]}>
    
      {
      Datas.map((data)=><KeyPointComponent  Img={data.img} title={data.title} discription={data.description}
      id={data.id} key={data.id}
    />)
    }


    
    
    </div>
    </>
    
  );
}
