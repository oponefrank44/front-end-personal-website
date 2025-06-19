import { FooterLogo } from "../../logo/FooterLogo";
import classes from "./Footer.module.css";
import FooterItems from "./FooterItems";
import { Footerlist1 } from "./FooterData";
import { Footerlist2 } from "./FooterData";
import Social from "./Social";

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
                <li key={item.id} className={classes.ListItem}>
                  {item.title}
                </li>
              ))}
            </div>
          </FooterItems>
        </div>
        <div className={classes["services"]}>
          <FooterItems>
            <div>
              {Footerlist2.map((item) => (
                <li key={item.id} className={classes.ListItem}>
                  {item.title}
                </li>
              ))}
            </div>
          </FooterItems>
        </div>
         <Social />
      </div>
      <div className={classes.social}>
       
      </div>
    </footer>
  );
}
