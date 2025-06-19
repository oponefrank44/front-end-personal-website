import { useSelector, useDispatch } from "react-redux";
import { toggleInvertedColour } from "../../redux/config";
import NavigationItems from "./NavigationItems";
import classes from "./MainNavigation.module.css";
import { LightSvg } from "../../svg/lightsvg";
import { DarkSvg } from "../../svg/darksvg";
import { Logo } from "../../logo/Logo";

function MainNavigation() {
  const dispatch = useDispatch();
  const invertedcolour = useSelector(
    (state) => state.invertedColour.togglevalue
  );

  function handleMood() {
    dispatch(toggleInvertedColour());
    if (invertedcolour) {
      document.documentElement.style.setProperty("--PrimaryColor", "#fff");
      document.documentElement.style.setProperty("--SecondaryColor", "#000");
    } else {
      document.documentElement.style.setProperty("--PrimaryColor", "#000");
      document.documentElement.style.setProperty("--SecondaryColor", "#fff");
    }
  }

  return (
    <>
      <header className={classes["header-flex-Container"]}>
        <Logo />

        <NavigationItems />

        <div className={classes["moods"]}>
          {invertedcolour ? (
            <LightSvg onclick={handleMood} />
          ) : (
            <DarkSvg onclick={handleMood} />
          )}
        </div>
      </header>
    </>
  );
}

export default MainNavigation;
