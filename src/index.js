import "./style.scss";
import "initialBuild.js";
import "tabThree.js";
import "tabTwo.js";

tabTwo.addEventListener("click", () => {
  makeMenu();
});

tabOne.addEventListener("click", () => {
  homePage();
});

tabThree.addEventListener("click", () => {
  contactUs();
});
