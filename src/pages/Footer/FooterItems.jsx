import classes from "./FooterItems.module.css";

export default function FooterItems({ children }) {
  return <div className={classes.footeritem}>{children}</div>;
}
