import classes from "./ErrorPage.module.css";
import MainNavigation from "./MainNavigation/MainNavigation";
import Footer from "./Footer/Footer"

export default function ErrorPage() {
  return (
    <>
    <MainNavigation />
    <div className={classes.errorpage}>
      <h1  className={classes.Errorhead}>
        An Error occured  
      </h1>
      <p >
        page can not be found
      </p>
       </div>
    <Footer />
    </>
   
  );
}
