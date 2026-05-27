import steakImage from "./assets/home-images/steak.jpg";

const createHomePage = () => {
  const homePageContainer = document.createElement("div");
  homePageContainer.classList.add("home-container");

  const left = leftContainer();
  const right = document.createElement("div");
  right.classList.add("right");

  const steakImg = document.createElement("img");
  steakImg.src = steakImage;

  right.appendChild(steakImg);
  homePageContainer.appendChild(left);
  homePageContainer.appendChild(right);
  // homePageContainer.appendChild(sinigang);

  return homePageContainer;
};

function leftContainer() {
  const left = document.createElement("div");
  left.classList.add("left");

  const heading = document.createElement("h2");
  heading.textContent = "Lite Resto";
  heading.classList.add("home-heading");

  const divider = document.createElement("hr");
  divider.classList.add("divider");

  const paragraph = document.createElement("p");
  paragraph.classList.add("home-paragraph");
  paragraph.textContent =
    "Built around fire, flavour, and craftsmanship. Discover a modern steakhouse experience where expertly aged cuts are flame-seared over glowing embers and served with bold character in every bite. At Lite Resto, every table is prepared for an unforgettable evening.";

  const homeMenuButton = document.createElement("button");
  homeMenuButton.classList.add("home-menu-button");
  homeMenuButton.textContent = "View Menu";

  left.appendChild(heading);
  left.appendChild(divider);
  left.appendChild(paragraph);
  left.appendChild(homeMenuButton);
  return left;
}

export { createHomePage };
