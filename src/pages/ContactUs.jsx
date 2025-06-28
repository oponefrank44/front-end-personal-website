import { useState } from "react";
import ContactHeadDesign from "./Contact/ContactheadDesign";
import classes from "./Contact.module.css";
import SharedContent from "./sharedPages/SharedContent";
import { ContactData, ReasonForConatct } from "./Contact/DataforContactReason";
import InputComponent from "./Form/InputComponent";
import SecondaryButton from "../button/SecondaryButton";
import TextairyButton from "../button/TertairyButton";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import LoadingSpin from "./loadingspinner/loadingSpin";
import ErrorHadling from "./sharedPages/Errorhandling";
import ContactSuccess from "./Contact/succesful";

export default function Contact() {
  const [errorMessage, setErrorMessage] = useState(null);
  const [pending, setPending] = useState(false);
  const navigator = useNavigate();
  const [inputValue, setInputValue] = useState({
    email: "",
    subject: "",
    fname: "",
    lname: "",

    message: "",
  });
  const [onblur, setOnblur] = useState({
    fname: false,
    lname: false,
    email: false,
    subject: false,
    message: false,
  });



  const isValidEmail = onblur.email && !inputValue.email.includes("@");
  const isFname = onblur.fname && inputValue.fname.trim().length < 2;
  const isLname = onblur.lname && inputValue.lname.trim().length < 2;
  const isSubject = onblur.subject && inputValue.subject.trim().length < 2;
  const isMessage = onblur.message && inputValue.message.trim().length < 10;

  const handleChange = (identify, value) => {
    setInputValue((prev) => ({
      ...prev,
      [identify]: value,
    }));
    setOnblur((prev) => ({
      ...prev,
      [identify]: false,
    }));
  };
  const handleBlur = (identify) => {
    setOnblur((prev) => ({
      ...prev,
      [identify]: true,
    }));
  };

  function handleReset(){
    setInputValue({
    email: "",
    subject: "",
    fname: "",
    lname: "",

    message: "",
  })
  }

  async function handleSubmit(event) {
    event.preventDefault();
    setErrorMessage(null);
    setPending(true);
    try {
      const response = await axios.post(
        "https://frankwebsite.onrender.com/contact",
        inputValue,
        {
          headers: {
            "Content-Type": "application/json",
          },
        }
      );

      if (response.error) {
        throw new Error(response.errorMessage);
      }
      setPending(false);
      navigator("/contact/success");
    } catch (error) {
      setPending(false)
      setErrorMessage(error.message);
    }
  }

  return (
    <div className={classes["contact"]}>
      <h1 className={classes["contact-heading"]}>contact us</h1>
      <ContactHeadDesign />
      <div className="contact-content">
        <SharedContent title="WHY CONTACT ME ?">
          {ReasonForConatct.map((data) => (
            <li className={classes["contact-content-li"]} key={data.id}>
              {data.title}
            </li>
          ))}
        </SharedContent>
        <SharedContent title="Who Might Contact Me?">
          {ContactData.map((data) => (
            <li className={classes["contact-content-li"]} key={data.id}>
              {data.title}
            </li>
          ))}
        </SharedContent>
      </div>
      <div className={classes["contact-form"]}>
        <h3 className={classes["contact-form-heading"]}> Reach out </h3>
        {
          errorMessage&& <ErrorHadling title="ERROR Occured try again later or contact by mobile" message={errorMessage}/>
        }

        <div className={classes["contact-form-form"]}>
          {pending ? (
            <div className={classes["contact-form-loader"]}>
              <LoadingSpin />
            </div>
          ) : (
            <form
              onSubmit={handleSubmit}
              className={classes["contactFormfill"]}
            >
              <div className={classes["contactfirstname"]}>
                <label for="fname" className={classes["contactLabel"]}>
                  First name
                </label>

                <InputComponent
                  name="fname"
                  id="fname"
                  type="text"
                  placeholder="first name"
                  onChange={(event) => {
                    handleChange("fname", event.target.value);
                  }}
                  value={inputValue.fname}
                  onBlur={() => handleBlur("fname")}
                />
                {isFname && (
                  <p className={classes.error}>please fill in the text</p>
                )}
              </div>
              <div className={classes["contactlastname"]}>
                <label for="lname" className={classes["contactLabel"]}>
                  Last name
                </label>

                <InputComponent
                  name="lname"
                  id="lname"
                  type="text"
                  placeholder="last name"
                  onChange={(event) => {
                    handleChange("lname", event.target.value);
                  }}
                  value={inputValue.lname}
                  onBlur={() => handleBlur("lname")}
                />
                {isLname && (
                  <p className={classes.error}>please fill in the text</p>
                )}
              </div>

              <div className={classes["contactemail"]}>
                <label for="email" className={classes["contactLabel"]}>
                  Email
                </label>

                <InputComponent
                  name="email"
                  id="email"
                  type="email"
                  placeholder="email"
                  onChange={(event) => {
                    handleChange("email", event.target.value);
                  }}
                  onBlur={() => handleBlur("email")}
                  value={inputValue.email}
                />
                {isValidEmail && (
                  <p className={classes.error}>
                    {" "}
                    email is invlaid enter a valid email
                  </p>
                )}
              </div>
              <div className={classes["contactsubject"]}>
                <label for="subject" className={classes["contactLabel"]}>
                  subject
                </label>

                <InputComponent
                  name="subject"
                  id="subject"
                  type="text"
                  placeholder="subject"
                  onChange={(event) => {
                    handleChange("subject", event.target.value);
                  }}
                  value={inputValue.subject}
                  onBlur={() => handleBlur("subject")}
                />
                {isSubject && (
                  <p className={classes.error}>please fill in the text</p>
                )}
              </div>
              <div className={classes["contactmessage"]}>
                <label for="message" className={classes["contactLabel"]}>
                  Your Message:
                </label>
                <br></br>
                <InputComponent
                  istextArea
                  id="message"
                  name="message"
                  onChange={(event) => {
                    handleChange("message", event.target.value);
                  }}
                  value={inputValue.message}
                  onBlur={() => handleBlur("message")}
                />
                {isMessage && (
                  <p className={classes.error}>
                    message must be more than 10 words
                  </p>
                )}
              </div>

              <div className={classes["contactformbutton"]}>
                <TextairyButton title="reset" onClick={handleReset}/>
                <SecondaryButton type="submit" title="submit" />
              </div>
            </form>
          )}
        </div>
      </div>
    </div>
  );
}
