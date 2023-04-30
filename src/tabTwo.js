function menuItem(title, blurb) {
  const item = document.createElement("div");
  item.classList.add("menu-item");
  const name = document.createElement("h3");
  name.textContent = title;
  const description = document.createElement("p");
  description.innerHTML = blurb;
  const pic = document.createElement("img");
  return item.appendChild(name), item.appendChild(description), item; //,
  //pic.src= `images/pizzas/${title.toLowerCase()}.png`,
  //pic.alt= `${title}`,
}
//menu event listener
export function makeMenu() {
  const menuBox= document.createElement('div');
  menuBox.setAttribute('id','menuBox');
  const contentBody= document.getElementById('content-body');
  const quoteBoxBox= document.getElementById('quoteBoxBox');
  quoteBoxBox.textContent= '';
  contentBody.textContent = "";
  menuBox.appendChild(menuItem("Beer-fried Chicken", "Farm fresh chicken served deep fried in our signature beer glaze served with onion rings or fries"));
  menuBox.appendChild(menuItem("Fried Chicken Sandwich", "Our signature beer-fried chicken served up fresh on a brioche bun with all the fixin's and a side of fries"));
  menuBox.appendChild(menuItem('Shrimp and Grits','Tender shrimp cooked in a rich and spicy tomato-based sauce, served over a bed of creamy stone-ground grits'));
  menuBox.appendChild(menuItem('Smoked Brisket Plate','Slow-smoked brisket served with a side of collard greens and mac and cheese.'));
  menuBox.appendChild(menuItem('Grilled Catfish','Tender catfish fillet grilled to perfection, served with a side of black-eyed peas and rice'));
  menuBox.appendChild(menuItem('Fried Green Tomatoes','Crispy cornmeal-coated slices of unripe tomatoes, served with a spicy remoulade sauce'));
  menuBox.appendChild(menuItem('Pimento Cheese Fritters','Creamy pimento cheese balls, breaded and fried to golden perfection, served with a sweet and tangy red pepper jelly'));
  menuBox.appendChild(menuItem('Bourbon Pecan Pie','Classic Southern pecan pie infused with a hint of bourbon, served with a dollop of whipped cream'));
  contentBody.appendChild(menuBox);
}
