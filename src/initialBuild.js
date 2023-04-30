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
const modalBio= document.createElement('div');
modalBio.setAttribute('id','modalBio');
contentBody.appendChild(modalBio);
const modalHeader= document.createElement('h3');
modalHeader.setAttribute('id', 'modalHeader');
const modalText= document.createElement('p');
const modalTextTwo= document.createElement('p');
modalTextTwo.setAttribute('id','modalText');
modalText.setAttribute('id','modalText');
modalHeader.textContent= `Chef Gabriel's Misson`
modalText.textContent= `Our mission at Gabriels Southern Kitchen, is to serve our guests 
the highest quality, authentic southern cuisine using locally sourced and sustainable 
ingredients. We believe that food brings people together, and our aim is to create a warm 
and welcoming environment where our guests can gather with friends and family to enjoy a delicious meal.`
modalTextTwo.textContent=`We are dedicated to preserving the time-honored traditions of southern cooking, while also incorporating modern 
techniques and flavors to create a truly unique dining experience. Our menu features classic 
dishes such as fried chicken and biscuits, shrimp and grits, and collard greens, as well 
as innovative creations that showcase the bounty of the southern region.`
modalBio.appendChild(modalHeader);
modalBio.appendChild(modalText);
modalBio.appendChild(modalTextTwo);
const quoteBox= document.createElement('div');
const quoteBoxTwo= document.createElement('div');
quoteBox.setAttribute('id','quoteBox');
quoteBoxTwo.setAttribute('id', 'quoteBox');
const contentPic = document.createElement("img");
contentPic.src= "./images/febrian-zakaria-chef.jpg"
contentPic.alt="Chef Gabriel"
contentPic.setAttribute('id','chefPic');
const quoteOne = document.createElement("p");
const quoteTwo = document.createElement("p");
const quoteThree= document.createElement("p");
const orderNow = document.createElement("p");
const orderNowButton= document.createElement('button');
const hours= document.createElement('h3');
const hoursList= document.createElement('p');
orderNowButton.textContent='Menu';
hoursList.innerHTML='Mon-Fri: 10am-10pm<br>Sat:9am-11pm<br>Closed Sunday';
hours.textContent='HOURS:';
orderNowButton.setAttribute('id', 'orderNowButton');
quoteOne.innerHTML = `"Best food this side of Mississip!"<br> - Mark Twain`;
quoteTwo.innerHTML = "\"You won't regret it\" -John Foodguy";
quoteThree.innerHTML= '"This beer fried chicken sends me!"<br> -Stacy Critic'
orderNow.innerHTML = "Order it now online!";
const quoteBoxBox= document.createElement('div');
quoteBoxBox.setAttribute('id','quoteBoxBox');
contentBody.appendChild(contentPic);
quoteBox.appendChild(quoteOne);
quoteBox.appendChild(quoteTwo);
quoteBox.appendChild(quoteThree);
quoteBoxTwo.appendChild(hours);
quoteBoxTwo.appendChild(hoursList);
quoteBoxTwo.appendChild(orderNow);
quoteBoxTwo.appendChild(orderNowButton);
pageBody.appendChild(contentBody);
quoteBoxBox.appendChild(quoteBox);
quoteBoxBox.appendChild(quoteBoxTwo);
pageBody.appendChild(quoteBoxBox);
//footer
const footer = document.createElement("footer");
footer.classList.add("footer");
footer.innerHTML = "Copyright Bryan Sherbrook 2023";
pageBody.appendChild(footer);

export function homePage() {
  contentBody.textContent = "";
  contentBody.appendChild(contentPic);
  pageBody.appendChild(contentBody);
  contentBody.appendChild(modalBio);
  modalBio.appendChild(modalHeader);
  modalBio.appendChild(modalText);
  modalBio.appendChild(modalTextTwo);
  contentBody.appendChild(contentPic);
  quoteBox.appendChild(quoteOne);
  quoteBox.appendChild(quoteTwo);
  quoteBox.appendChild(quoteThree)
  quoteBoxTwo.appendChild(orderNow);
  quoteBoxTwo.appendChild(orderNowButton);
  pageBody.appendChild(contentBody);
  quoteBoxBox.appendChild(quoteBox);
  quoteBoxBox.appendChild(quoteBoxTwo);
  pageBody.appendChild(quoteBoxBox);
}
