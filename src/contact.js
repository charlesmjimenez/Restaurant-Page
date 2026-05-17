const createContactPage = () => {
  const contactPageContainer = document.createElement("div");
  const contactHeading = document.createElement("h2");
  contactHeading.textContent = "Contact Us";

  contactPageContainer.appendChild(contactHeading);

  const contactInformationContainer = document.createElement("div");
  const phoneNumber = document.createElement("p");
  phoneNumber.textContent = "+44 7820 555261";
  const email = document.createElement("p");
  email.textContent = "test@gmail.com";

  contactInformationContainer.appendChild(phoneNumber);
  contactInformationContainer.appendChild(email);

  contactPageContainer.appendChild(contactInformationContainer);

  return contactPageContainer;
};

export { createContactPage };
