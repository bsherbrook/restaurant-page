import "./style.scss";
import {homePage} from "./initialBuild";
import {contactUs} from "./tabThree";
import {makeMenu} from "./tabTwo";

tabTwo.addEventListener("click", () => {
  makeMenu();
});

tabOne.addEventListener("click", () => {
  homePage();
});

tabThree.addEventListener("click", () => {
  contactUs();
});
