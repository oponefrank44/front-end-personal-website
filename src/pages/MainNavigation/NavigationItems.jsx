import { useState } from "react";
import { NavLink } from "react-router-dom";
import classes from "./NavigationItem.module.css";
import { Navlist } from "./NavlistItem";
import Submenu from "./Submenu";
import { Link } from "react-router-dom";

export default function NavigationItems() {
  const [dropdownmenu, setDropdownmenu] = useState(false);

  return (
    <ul className={classes["nav-items"]}>
      {Navlist.map((item) => {
        if (item.path === "/projects") {
          return (
            <li
              onMouseOver={() => {
                setDropdownmenu(true);
              }}
              onMouseOut={() => {
                setDropdownmenu(false);
              }}
              key={item.id}
            >
              <div className={classes["header-nav-item-link"]}>
                <div className={classes["header-nav-item-link-div"]}>
                  <ul key={item.id}>{item.title}</ul>

                  {dropdownmenu ? <span>&#11161;</span> : <span>&#11163;</span>}
                </div>
              </div>

              {dropdownmenu && <Submenu  />}
            </li>
          );
        }
        return (
          <li key={item.id} classes={item.cname}>
            <NavLink
              key={item.id}
              to={item.path}
              className={({ isActive }) =>
                isActive
                  ? classes["header-nav-item-link-active"]
                  : classes["header-nav-item-link"]
              }
              end
            >
              {item.title}
            </NavLink>
            
          </li>
          
        );
      })}
    </ul>
  );
}
