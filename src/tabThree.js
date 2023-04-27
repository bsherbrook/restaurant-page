function contactUs() {
  contentBody.textContent = "";
  const titleCard = document.createElement("h1");
  titleCard.textContent = "Contact Us!";
  const contactInfo = document.createElement("p");
  contactInfo.textContent = "123 Fake Street Anywhereville, USA 12345";
  contentBody.appendChild(titleCard);
  contentBody.appendChild(contactInfo);
}
