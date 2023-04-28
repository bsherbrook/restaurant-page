const pageBody = document.getElementById("content");
const pageHead = document.createElement("header");
const titleCard = document.createElement("h2");
const buttonBox= document.createElement("div");
const tabOne = document.createElement("button");
const tabTwo = document.createElement("button");
const tabThree = document.createElement("button");
//header
titleCard.innerHTML = "Gabriel's Southern Kitchen";
tabOne.innerHTML = "Home";
tabTwo.innerHTML = "Menu";
tabThree.innerHTML = "Contact Us";
tabOne.setAttribute('id','tabOne');
tabTwo.setAttribute('id','tabTwo')
tabThree.setAttribute('id','tabThree');
buttonBox.setAttribute('id', 'buttonBox')
pageHead.appendChild(titleCard);
buttonBox.appendChild(tabOne);
buttonBox.appendChild(tabTwo);
buttonBox.appendChild(tabThree);
pageHead.appendChild(buttonBox);
pageBody.appendChild(pageHead);
//body
const contentBody = document.createElement("div");
contentBody.setAttribute("id", "content-body");
const backgroundPic= document.createElement("img");
backgroundPic.src= "./images/aditya-joshi-wood.jpg";
backgroundPic.setAttribute('id', 'backgroundPic');
pageBody.appendChild(backgroundPic);
const quoteOne = document.createElement("p");
const quoteTwo = document.createElement("p");
const contentPic = document.createElement("img");
contentPic.src= "./images/febrian-zakaria-chef.jpg"
contentPic.alt="Chef Gabriel"
contentPic.setAttribute('id','chefPic');
const orderNow = document.createElement("p");
quoteOne.innerHTML = "Best food this side of Mississip!";
quoteTwo.innerHTML = `"You won't regret it" -John Foodguy`;
orderNow.innerHTML = "Order it now online!";
contentBody.appendChild(quoteOne);
contentBody.appendChild(quoteTwo);
contentBody.appendChild(contentPic);
contentBody.appendChild(orderNow);
pageBody.appendChild(contentBody);
//footer
const footer = document.createElement("footer");
footer.classList.add("footer");
footer.innerHTML = "Copyright Bryan Sherbrook 2023";
pageBody.appendChild(footer);

export function homePage() {
  contentBody.textContent = "";
  quoteOne.innerHTML = "Best food this side of Mississip!";
  quoteTwo.innerHTML = `"You won't regret it" -John Foodguy`;
  orderNow.innerHTML = "Order it now online!";
  contentBody.appendChild(quoteOne);
  contentBody.appendChild(quoteTwo);
  contentBody.appendChild(contentPic);
  contentBody.appendChild(orderNow);
  pageBody.appendChild(contentBody);
}
