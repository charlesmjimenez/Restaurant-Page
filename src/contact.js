const createContactPage = () => {
  const contactPageContainer = document.createElement("div");
  contactPageContainer.classList.add("contact-container");
  const contactHeading = document.createElement("h2");
  contactHeading.textContent = "Contact Us";

  const contactInformationContainer = document.createElement("div");
  contactInformationContainer.classList.add("contact-information-container");

  contactInformationContainer.appendChild(contactHeading);
  const description = document.createElement("p");
  description.textContent = "We would love to hear from you!";

  const phoneNumber = document.createElement("p");
  phoneNumber.textContent = "Phone (+44 7820 555261)";
  const email = document.createElement("p");
  email.textContent = "test@gmail.com";

  const address = document.createElement("p");
  address.textContent =
    "27 Maplewood Grove Southampton SO16 7PL United Kingdom";

  const openingHours = document.createElement("p");
  openingHours.textContent =
    "Mon–Thu: 12:00 PM – 10:00 PM | Fri–Sat: 12:00 PM – 11:00 PM | Sun: 12:00 PM – 9:00 PM";

  contactInformationContainer.appendChild(description);
  contactInformationContainer.appendChild(phoneNumber);
  contactInformationContainer.appendChild(email);
  contactInformationContainer.appendChild(address);
  contactInformationContainer.appendChild(openingHours);

  contactPageContainer.appendChild(contactInformationContainer);

  return contactPageContainer;
};

export { createContactPage };
