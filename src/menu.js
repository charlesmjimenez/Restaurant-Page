import steakPlaceHolderImage from "./assets/menu-images/steak.jpg";
// import menuBackgroundImage from "./assets/menu-images/background.jpg";

const createMenuPage = () => {
  const menuPageContainer = document.createElement("div");
  menuPageContainer.classList.add("menu-page-container");
  const heading = document.createElement("h2");
  heading.textContent = "Our Menu";

  menuPageContainer.appendChild(heading);

  const mains = mainsMenu();
  const sides = sidesMenu();
  const drinks = drinksMenu();

  menuPageContainer.appendChild(mains);
  menuPageContainer.appendChild(sides);
  menuPageContainer.appendChild(drinks);

  return menuPageContainer;
};

export { createMenuPage };

function mainsMenu() {
  const mains = [
    {
      name: "Ribeye Steak",
      description:
        "Juicy flame-grilled ribeye finished with garlic herb butter.",
      price: "£28",
      image: steakPlaceHolderImage,
    },
    {
      name: "Filet Mignon",
      description: "Tender beef fillet served with rich red wine jus.",
      price: "£34",
      image: steakPlaceHolderImage,
    },
    {
      name: "New York Strip",
      description: "Classic steak with bold flavour and simple seasoning.",
      price: "£30",
      image: steakPlaceHolderImage,
    },
  ];

  const mainsContainer = document.createElement("div");
  mainsContainer.classList.add("menu-container");
  const mainsHeader = document.createElement("p");
  mainsHeader.classList.add("menu-header");
  mainsHeader.textContent = "Mains";
  mainsContainer.appendChild(mainsHeader);

  mains.forEach((item) => {
    const container = document.createElement("div");
    container.classList.add("item");
    const left = document.createElement("div");
    left.classList.add("menu-left");
    const right = document.createElement("div");
    const foodName = document.createElement("h3");
    foodName.textContent = item.name;
    const divider = document.createElement("hr");
    divider.classList.add("menu-divider");
    const foodDesc = document.createElement("p");
    foodDesc.classList.add("description");
    foodDesc.textContent = item.description;
    const foodPrice = document.createElement("p");
    foodPrice.classList.add("price");
    foodPrice.textContent = item.price;

    const img = document.createElement("img");
    img.classList.add("menu-img-placeholder");
    img.src = item.image;

    left.appendChild(foodName);
    left.appendChild(divider);
    left.appendChild(foodDesc);
    left.appendChild(foodPrice);
    right.appendChild(img);
    container.appendChild(left);
    container.appendChild(right);
    mainsContainer.appendChild(container);
  });

  return mainsContainer;
}

function sidesMenu() {
  const sides = [
    {
      name: "Truffle Fries",
      description: "Crispy fries tossed with truffle oil and parmesan.",
      price: "£6",
      image: steakPlaceHolderImage,
    },
    {
      name: "Garlic Mashed Potatoes",
      description: "Creamy mashed potatoes with roasted garlic and butter.",
      price: "£5",
      image: steakPlaceHolderImage,
    },
    {
      name: "Grilled Asparagus",
      description: "Fresh asparagus lightly charred and seasoned.",
      price: "£6",
      image: steakPlaceHolderImage,
    },
  ];

  const sidesContainer = document.createElement("div");
  sidesContainer.classList.add("menu-container");
  const sidesHeader = document.createElement("p");
  sidesHeader.classList.add("menu-header");
  sidesHeader.textContent = "Sides";
  sidesContainer.appendChild(sidesHeader);

  sides.forEach((item) => {
    const container = document.createElement("div");
    container.classList.add("item");
    const left = document.createElement("div");
    left.classList.add("menu-left");
    const right = document.createElement("div");
    const foodName = document.createElement("h3");
    foodName.textContent = item.name;
    const divider = document.createElement("hr");
    divider.classList.add("menu-divider");
    const foodDesc = document.createElement("p");
    foodDesc.classList.add("description");
    foodDesc.textContent = item.description;
    const foodPrice = document.createElement("p");
    foodPrice.classList.add("price");
    foodPrice.textContent = item.price;

    const img = document.createElement("img");
    img.classList.add("menu-img-placeholder");
    img.src = item.image;

    left.appendChild(foodName);
    left.appendChild(divider);
    left.appendChild(foodDesc);
    left.appendChild(foodPrice);
    right.appendChild(img);
    container.appendChild(left);
    container.appendChild(right);
    sidesContainer.appendChild(container);
  });

  return sidesContainer;
}

function drinksMenu() {
  const drinks = [
    {
      name: "House Red Wine",
      description: "Smooth red wine paired perfectly with steak.",
      price: "£8",
      image: steakPlaceHolderImage,
    },
    {
      name: "Old Fashioned",
      description: "Classic whiskey cocktail with bitters and orange peel.",
      price: "£11",
      image: steakPlaceHolderImage,
    },
    {
      name: "Lemon Iced Tea",
      description: "Refreshing black tea with lemon and light sweetness.",
      price: "£4",
      image: steakPlaceHolderImage,
    },
  ];

  const drinksContainer = document.createElement("div");
  drinksContainer.classList.add("menu-container");
  const drinksHeader = document.createElement("p");
  drinksHeader.classList.add("menu-header");
  drinksHeader.textContent = "Drinks";
  drinksContainer.appendChild(drinksHeader);

  drinks.forEach((item) => {
    const container = document.createElement("div");
    container.classList.add("item");
    const left = document.createElement("div");
    left.classList.add("menu-left");
    const right = document.createElement("div");
    const foodName = document.createElement("h3");
    foodName.textContent = item.name;
    const divider = document.createElement("hr");
    divider.classList.add("menu-divider");
    const foodDesc = document.createElement("p");
    foodDesc.classList.add("description");
    foodDesc.textContent = item.description;
    const foodPrice = document.createElement("p");
    foodPrice.classList.add("price");
    foodPrice.textContent = item.price;

    const img = document.createElement("img");
    img.classList.add("menu-img-placeholder");
    img.src = item.image;

    left.appendChild(foodName);
    left.appendChild(divider);
    left.appendChild(foodDesc);
    left.appendChild(foodPrice);
    right.appendChild(img);
    container.appendChild(left);
    container.appendChild(right);
    drinksContainer.appendChild(container);
  });

  return drinksContainer;
}
