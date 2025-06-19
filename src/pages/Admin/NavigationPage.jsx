import { NavLink } from "react-router-dom";


function Navigation() {
  return (
    <header>
      <ul>
        <li>
            <NavLink className={({isActive})=>{isActive?undefined:undefined

            }}>
                home
            </NavLink>
        </li>
      </ul>
    </header>
  );
}

export default Navigation;
