import sinigangImg from "./sinigang.png";

const createHomePage = () => {
  const homePageContainer = document.createElement("div");

  const heading = document.createElement("h2");
  heading.textContent = "Welcome";

  // const sinigang = document.createElement("img");
  // sinigang.src = sinigangImg;

  const paragraph = document.createElement("p");
  paragraph.textContent = "This is my restaurant site.";

  homePageContainer.appendChild(heading);
  homePageContainer.appendChild(paragraph);
  // homePageContainer.appendChild(sinigang);

  return homePageContainer;
};

export { createHomePage };
