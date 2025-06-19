import { Link } from "react-router-dom";

import classes from "./ProjectComponent.module.css";
import Modal from "./Model";
import { useState } from "react";

export default function ProjectComponent({
  title,
  createdAt,
  endDate,
  githubLink,
  websiteLink,
  updatedAt,
  description,
}) {
  const [isOpen, setIsOpen] = useState(false);
  function modelOpen() {
    setIsOpen(true);
  }
  function handleCloseModel() {
    setIsOpen(false);
  }
  

  return (
    <div className={classes.projectcomponent}>
      <h2 className={classes.projectheader}>
        <span>Title:</span> {title}
      </h2>
      <h6 className={classes.projectstartdate}>
        <span>started:</span>
        {createdAt}
      </h6>
      <h6 className={classes.projectenddate}>
        <span>enddate:</span>
        {endDate}
      </h6>
      <h4 className={classes.projectgithub}>
        <span> github repo:</span>
        <Link to={githubLink} target="blank">
          {githubLink}
        </Link>
      </h4>
      <h4 className={classes.projectwebsite}>
        <span>website: </span>
        {websiteLink}
      </h4>
      <h6 className={classes.projectupdate}>
        {" "}
        <span>updatedlast:</span>
        {updatedAt}
      </h6>
      <Modal open={isOpen}>
      <div className={classes.modaldesign}>
       <p>
          <span>description:</span>
          {description}
        </p>
        <button className={classes.closemodalBtn} onClick={handleCloseModel}>CLOSE</button>

      </div>
       
      </Modal>
      <p className={classes.projectdescrib}>
        <span>description:</span>
        {description.length > 50 ? (
          <>
            {description.substring(0, 70)}
            <span id="dots">...</span>
            <Link onClick={modelOpen} className={classes.readmorebtn}>
              read more
            </Link>
          </>
        ) : (
          description
        )}
      </p>
    </div>
  );
}
