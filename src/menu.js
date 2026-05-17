const createMenuPage = () => {
  const menuPageContainer = document.createElement("div");
  const heading = document.createElement("h2");
  heading.textContent = "Our Menu";

  menuPageContainer.appendChild(heading);
  // const menuList = document.createElement("ul");

  const foodItems = [
    {
      name: "Sinigang",
      description: "This is a soup based food",
      price: "£13.99",
    },
    {
      name: "Adobo",
      description: "This is a chicken based food",
      price: "£13.99",
    },
  ];

  const menuContainer = document.createElement("div");

  foodItems.forEach((item) => {
    const container = document.createElement("div");
    const foodName = document.createElement("h3");
    foodName.textContent = item.name;
    const foodDesc = document.createElement("p");
    foodDesc.textContent = item.description;
    const foodPrice = document.createElement("p");
    foodPrice.textContent = item.price;
    container.appendChild(foodName);
    container.appendChild(foodDesc);
    container.appendChild(foodPrice);
    menuContainer.appendChild(container);
  });

  menuPageContainer.appendChild(menuContainer);

  return menuPageContainer;
};

export { createMenuPage };
