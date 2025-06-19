import { useState } from "react";
import { Link } from "react-router-dom";
import { subProjects } from "./NavlistItem";
import classes from "./Submenu.module.css";

export default function Submenu() {
  const [showSubmenu, setShowSubmenu] = useState(true);
  return (
    <ul className={showSubmenu?classes["sub-nav-items"]: classes["sub-nav-items-hidden"]}>
      {subProjects.map((item) => (
        <li key={item.id} className={classes[`${item.cname}`]}>
          <Link
            to={item.path}
            className={classes["sub-nav-items-li"]}
            onClick={showSubmenu? () => setShowSubmenu(false) : null}
          
            onMouseOut={() => setShowSubmenu(true) }
          >
            {item.title}
          </Link>
          
        </li>
      ))}
     
    </ul>
  );
}
