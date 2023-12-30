async function fetchMenu() {
  try {
    const response = await fetch("menu.json");
    const menuData = await response.json();
    return menuData;
  } catch (error) {
    console.error("Error fetching menu data:", error);
  }
}

// Function to generate HTML for menu items
async function generateMenu() {
  const menuData = await fetchMenu();

  const menuContainer = document.querySelector(".menu");

  if (menuData && menuData.length > 0) {
    menuData.forEach((item) => {
      const menuItem = document.createElement("div");
      menuItem.classList.add("menu-item");

      const image = document.createElement("img");
      image.src = item.image;
      image.alt = item.name;
      menuItem.appendChild(image);

      const itemName = document.createElement("h2");
      itemName.textContent = item.name;
      menuItem.appendChild(itemName);

      const itemPrice = document.createElement("p");
      itemPrice.textContent = `${item.price} ₽`;
      menuItem.appendChild(itemPrice);

      const addButton = document.createElement("button");
      addButton.textContent = "Add to Cart";
      addButton.addEventListener("click", () =>
        addToCart(item.name, item.price)
      );
      menuItem.appendChild(addButton);

      menuContainer.appendChild(menuItem);
    });
  }
}

// Call generateMenu function to display menu items
generateMenu();

let cartItems = [];
let totalPrice = 0;

function addToCart(itemName, price) {
  cartItems.push({ name: itemName, price: price });
  totalPrice += price;
  updateCart();
}

// re-renders the cart with the updated total items count.
function updateCart() {
  const totalSpan = document.getElementById("cart-total");
  totalSpan.textContent = cartItems.length;
}

let cart = document.querySelector(".cart");
cart.onclick = toggleCartPopup;

function toggleCartPopup() {
  const cartPopup = document.getElementById("cartPopup");
  cartPopup.style.display =
    cartPopup.style.display === "block" ? "none" : "block";

  // Update cart items and total on pop-up open
  if (cartPopup.style.display === "block") {
    updateCartPopup();
  }
}

function updateCartPopup() {
  const cartItemsList = document.getElementById("cartItemsList");
  const cartTotal = document.getElementById("cartTotalPrice");

  cartItemsList.innerHTML = "";
  let total = 0;

  cartItems.forEach((item) => {
    const li = document.createElement("li");
    li.textContent = `${item.name} - $${item.price}`;
    cartItemsList.appendChild(li);
    total += item.price;
  });

  cartTotal.textContent = total;
}

let close = document.querySelector(".close");
close.onclick = toggleCartPopup;
