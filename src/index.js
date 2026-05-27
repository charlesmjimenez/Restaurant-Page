import "./styles.css";
import { createHomePage } from "./home.js";
import { createContactPage } from "./contact.js";
import { createMenuPage } from "./menu.js";

const mainContent = document.getElementById("content");
const homeButton = document.querySelector(".home");
const menuButton = document.querySelector(".menu");
const contactButton = document.querySelector(".contact");
const navBar = document.querySelector(".nav-bar");

function clearContent() {
  mainContent.innerHTML = " ";
}

function loadHomePage() {
  clearContent();
  mainContent.appendChild(createHomePage());

  // attach listener AFTER rendering
  const homeMenuButton = document.querySelector(".home-menu-button");

  homeMenuButton.addEventListener("click", () => {
    loadMenuPage();
  });
}

function loadMenuPage() {
  clearContent();
  mainContent.appendChild(createMenuPage());
}

function loadContactPage() {
  clearContent();
  mainContent.appendChild(createContactPage());
}

homeButton.addEventListener("click", loadHomePage);

menuButton.addEventListener("click", loadMenuPage);

contactButton.addEventListener("click", loadContactPage);

loadHomePage();
