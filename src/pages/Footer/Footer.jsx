import { FooterLogo } from "../../logo/FooterLogo";
import classes from "./Footer.module.css";
import FooterItems from "./FooterItems";
import { Footerlist1 } from "./FooterData";
import { Footerlist2 } from "./FooterData";
import Social from "./Social";
import { Link } from "react-router-dom";

export default function Footer() {
  return (
    <footer>
      <div className={classes["Footer"]}>
        <div className={classes["footerlogo"]}>
          <FooterLogo />
        </div>

        <div className={classes["services"]}>
          <FooterItems>
            <div>
              {Footerlist1.map((item) => (
                <Link to={item.path}>
                  <li key={item.id} className={classes.ListItem}>
                    {item.title}
                  </li>
                </Link>
              ))}
            </div>
          </FooterItems>
        </div>
        <div className={classes["services1"]}>
          <FooterItems>
            <div>
              {Footerlist2.map((item) => (
                <Link to={item.path}>
                  <li key={item.id} className={classes.ListItem}>
                    {item.title}
                  </li>
                </Link>
              ))}
            </div>
          </FooterItems>
        </div>
        <div className={classes.social}>
          <Social />
        </div>
      </div>
    </footer>
  );
}
