import classes from "./header.module.css";
import profile from "../../assets/profile.jpg";
import PrimaryButton from "../../button/PrimaryButton";
import { useNavigate } from "react-router-dom";

export default function Header() {
  const navigate = useNavigate();

  // Function to handle button click
  const NavigationButton= () => {
    navigate("/projects", { replace: true });
  };


  return (
    <div className={classes["header-Main-container"]}>
      {/* floadting ball */}
      <div className={classes["header-Main--floating-ball-outer"]}>
         
      </div>
      {/* heading and subheading */}
      <div className={classes["header-Main--heading-container"]}>
    

        <h1 >Welcome</h1>

        <p className={classes["header-Main--heading-container--p"]}>the future of technology</p>
        <PrimaryButton onClick={NavigationButton} />
      </div>
      {/*profile picture*/}
      <div className={classes["header-Main--profile-picture-container"]}>
      
      <fig className={classes["header-Main--profile-picture-fig"]}> 
       <img
          src={profile}
          alt="profile"
          className={classes["header-Main--profile-picture"]}
        />
        <figcaption className={classes["header-Main--profile-picture-caption"]}>
          Frank opone
        </figcaption>

      </fig>
      <p className={classes["header-Main--profile-parapagh"]}>
      web developer with a passion for creating innovative solutions.
      

      please feel free to reach out to me for any queries or collaborations.
        
      check out my projects and let's connect!

      </p>
       
       
      </div>
    </div>
  );
}
