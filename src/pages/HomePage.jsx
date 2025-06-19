// import {useSelector} from "react-redux";
import classes from "./HomePage.module.css";
import KeyPointPage from "./hompage/KeyPoint";


import Header from "./hompage/header";
import TestimoniesPage from "./hompage/TestimoniePage";





function Homepage() {

    // const isDarkMode= useSelector((state) => state.invertedColour.togglevalue);
    
    
    return <div className={classes["home-page"]}>
        <Header />
        <KeyPointPage/>
      <TestimoniesPage />
      
       
        
       
    </div>
}


export default Homepage