export function contactUs() {
  const contentBody= document.getElementById('content-body');
  const quoteBoxBox= document.getElementById('quoteBoxBox');
  const phoneNum= document.createElement('p');
  const emailUs= document.createElement('p');
  const hours= document.createElement('h3');
  const hoursList= document.createElement('p');
  emailUs.textContent= 'business@GabrielsKitchen.com';
  hoursList.innerHTML='Mon-Fri: 10am-10pm<br><br>Sat:9am-11pm<br><br>Closed Sunday';
  hours.textContent='HOURS:';
  phoneNum.textContent= '(555)-987-6543'
  quoteBoxBox.textContent='';
  contentBody.textContent = "";
  const titleCard = document.createElement("h1");
  titleCard.textContent = "Contact Us";
  const contactInfo = document.createElement("p");
  contactInfo.innerHTML = "123 Fake Street Anywhereville, USA 12345";
  const aboutUs= document.createElement('div');
  aboutUs.setAttribute('id', 'aboutUs');
  aboutUs.appendChild(titleCard);
  aboutUs.appendChild(hours);
  aboutUs.appendChild(hoursList);
  aboutUs.appendChild(phoneNum);
  aboutUs.appendChild(emailUs);
  aboutUs.appendChild(contactInfo);
  contentBody.appendChild(aboutUs);
}
