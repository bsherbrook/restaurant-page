import "./style.scss";
import {homePage} from "./initialBuild";
import {contactUs} from "./tabThree";
import {makeMenu} from "./tabTwo";
const chefPic= document.getElementById('chefPic');
const modalBio= document.getElementById('modalBio');

tabTwo.addEventListener("click", () => {
  makeMenu();
});

tabOne.addEventListener("click", () => {
  homePage();
});

tabThree.addEventListener("click", () => {
  contactUs();
});

chefPic.addEventListener('click', ()=>{
  modalBio.style.display='flex';
})
modalBio.addEventListener('click', ()=>{
  modalBio.style.display='none';})
