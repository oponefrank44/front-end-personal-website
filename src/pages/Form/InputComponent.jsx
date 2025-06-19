import classes from "./InputComponent.module.css";

export default function InputComponent({ id,istextArea,...props }) {
  return istextArea ? (
    <div>
      <textarea
        className={classes.textarea}
        
        {...props}
        required
        minLength="10"
        maxLength="1000"
       type="textarea"
       ro="4"
       
       
      />
    </div>
  ) : (
    <div>
      <input
        className={classes.input}
        {...props}
        required
        minLength="2"
        maxLength="25"
        id={id}
      />
     
    </div>
  );
}
