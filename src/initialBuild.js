const pageBody = document.getElementById("content");
const pageHead = document.createElement("header");
const titleCard = document.createElement("p");
const tabOne = document.createElement("button");
const tabTwo = document.createElement("button");
const tabThree = document.createElement("button");
//header
titleCard.innerHTML = "Restaurant Name";
tabOne.innerHTML = "Tab 1";
tabTwo.innerHTML = "Tab 2";
tabThree.innerHTML = "Tab 3";
tabOne.setAttribute('id','tabOne');
tabTwo.setAttribute('id','tabTwo')
tabThree.setAttribute('id','tabThree');
pageHead.appendChild(titleCard);
pageHead.appendChild(tabOne);
pageHead.appendChild(tabTwo);
pageHead.appendChild(tabThree);
pageBody.appendChild(pageHead);
//body
const contentBody = document.createElement("div");
contentBody.setAttribute("id", "content-body");
const quoteOne = document.createElement("p");
const quoteTwo = document.createElement("p");
const contentPic = document.createElement("img");
//contentPic.src=
//contentPic.alt=
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
