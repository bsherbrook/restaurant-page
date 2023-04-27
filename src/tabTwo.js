function menuItem(title, blurb) {
  const item = document.createElement("div");
  item.classList.add("menu-item");
  const name = document.createElement("h2");
  name.textContent = title;
  const description = document.createElement("p");
  description.innerHTML = blurb;
  const pic = document.createElement("img");
  return item.appendChild(name), item.appendChild(description), item; //,
  //pic.src= `images/pizzas/${title.toLowerCase()}.png`,
  //pic.alt= `${title}`,
}
//menu event listener
function makeMenu() {
  contentBody.textContent = "";
  contentBody.appendChild(menuItem("test", "test again"));
  contentBody.appendChild(menuItem("again", "t4st again"));
}
