
import { useNavigate } from 'react-router-dom';
import classes from "./successful.module.css";

const ContactSuccess = () => {
  const navigate = useNavigate();

  return (
    <div className={classes["success-container"]}>
      <div className={classes["success-card"]}>
        <div className={classes["success-icon"]}>
          <svg viewBox="0 0 24 24">
            <path fill="currentColor" d="M12 2C6.5 2 2 6.5 2 12S6.5 22 12 22 22 17.5 22 12 17.5 2 12 2M10 17L5 12L6.41 10.59L10 14.17L17.59 6.58L19 8L10 17Z" />
          </svg>
        </div>
        <h1>Message Sent Successfully!</h1>
        <p className={classes["success-message"]}>
          Thank you for contacting us. We'll get back to you soon.
        </p>
        
        <button 
          onClick={() => navigate('/')} 
          className={classes["home-button"]}
        >
          Return to Home
        </button>
        
        <p className={classes["followup-text"]}>
            If you have any further questions, feel free to reach out again.
            using my social media links below.
        </p>
      </div>
    </div>
  );
};

export default ContactSuccess;