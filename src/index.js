import { createHomePage } from "./home.js";
import { createContactPage } from "./contact.js";
import { createMenuPage } from "./menu.js";

const mainContent = document.getElementById("content");
const homeButton = document.querySelector(".home");
const menuButton = document.querySelector(".menu");
const contactButton = document.querySelector(".contact");

function clearContent() {
  mainContent.innerHTML = " ";
}

homeButton.addEventListener("click", () => {
  clearContent();
  mainContent.appendChild(createHomePage());
});

menuButton.addEventListener("click", () => {
  clearContent();
  mainContent.appendChild(createMenuPage());
});

contactButton.addEventListener("click", () => {
  clearContent();
  mainContent.appendChild(createContactPage());
});

mainContent.appendChild(createHomePage());
