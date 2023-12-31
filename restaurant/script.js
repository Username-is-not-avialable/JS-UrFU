generateMenu();
getCartItemsFromLocalStorage();
updateItemsTotal();
// if the local storage is empty cartItems is null

document.querySelector(".cart").onclick = toggleCartPopup;
document.querySelector(".close").onclick = toggleCartPopup;

// Event listener for the "Оплатить" button
document.getElementById("payButton").onclick = openPurchaseWindow;
document.getElementById("submitPayment").onclick = completePurchase;

async function fetchMenu() {
  try {
    const response = await fetch("menu.json");
    const menuData = await response.json();
    return menuData;
  } catch (error) {
    console.error("Error fetching menu data:", error);
  }
}

// Generate HTML for menu items
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

function getCartItemsFromLocalStorage() {
  window.cartItems = JSON.parse(localStorage.getItem("cart"));
  if (!cartItems) {
    cartItems = [];
  }
  return cartItems;
}

function addToCart(itemName, price) {
  uniqueItemsNames = new Set(cartItems.map((x) => x.name));
  if (uniqueItemsNames && uniqueItemsNames.has(itemName)) {
    currentItem = cartItems.find((item) => item.name === itemName);
    currentItem["count"] = currentItem["count"] + 1;
  } else {
    cartItems.push({ name: itemName, price: price, count: 1 });
  }
  updateItemsTotal();
  updateLocalStorage();
}

function updateItemsTotal() {
  const totalItems = document.getElementById("cart-total");
  let itemsCount = 0;
  cartItems.map((item) => (itemsCount += item.count));
  totalItems.textContent = itemsCount;
}

function deleteZeroUnitsItemsFromCart() {
  cartItems = cartItems.filter((item) => item.count > 0);
}

// Update local storage based on cartItems global variable
function updateLocalStorage() {
  localStorage.setItem("cart", JSON.stringify(cartItems));
}

function decreaseItemCount(itemName) {
  currentItem = cartItems.find((item) => item.name === itemName);
  currentItem.count -= 1;
  deleteZeroUnitsItemsFromCart();
  updateLocalStorage();
  updateCartPopup();
}

function increaseItemCount(itemName) {
  currentItem = cartItems.find((item) => item.name === itemName);
  currentItem.count += 1;
  updateItemsTotal();
  updateLocalStorage();
  updateCartPopup();
}

function delItemFromCart(itemName) {
  let deletingLi = document.getElementById(itemName);
  deletingLi.remove();
  cart;
}

function clearCart() {
  cartItems = [];
  updateItemsTotal();
  deleteZeroUnitsItemsFromCart();
  updateLocalStorage();
  updateCartPopup();
}

function toggleCartPopup() {
  const cartPopup = document.getElementById("cartPopup");
  cartPopup.style.display =
    cartPopup.style.display === "block" ? "none" : "block";

  // Update cart items and total on pop-up open
  if (cartPopup.style.display === "block") {
    updateCartPopup();
  }
}

// Re-render cart popup
function updateCartPopup() {
  const cartItemsList = document.getElementById("cartItemsList");
  const cartTotal = document.getElementById("cartTotalPrice");

  cartItemsList.innerHTML = "";
  let totalPrice = 0;

  // re-render every item in cart popup
  cartItems.forEach((item) => {
    if (item.count > 0) {
      const li = document.createElement("li");
      li.classList.add("cart-item");
      li.id = item.name;
      increaseButton = createIncreaseButton(item.name);
      decreaseButton = createDecreaseButton(item.name);
      li.textContent = `${item.name} ${item.count} шт - ${
        item.price * item.count
      } ₽`;
      li.appendChild(decreaseButton);
      li.appendChild(increaseButton);
      cartItemsList.appendChild(li);
      totalPrice += item.price * item.count;
    }
  });
  cartTotal.textContent = totalPrice;
}

function createDecreaseButton(itemName) {
  const decreaseButton = document.createElement("button");
  decreaseButton.classList.add("decrease-button");
  decreaseButton.innerText = "-";
  decreaseButton.onclick = () => decreaseItemCount(itemName);
  return decreaseButton;
}

function createIncreaseButton(itemName) {
  const increaseButton = document.createElement("button");
  increaseButton.classList.add("increase-button");
  increaseButton.innerText = "+";
  increaseButton.onclick = () => increaseItemCount(itemName);
  return increaseButton;
}

function openPurchaseWindow() {
  const purchaseWindow = document.getElementById("purchaseWindow");
  purchaseWindow.style.display = "block";
  document.getElementById("submitPayment").textContent = `Оплатить ${
    document.getElementById("cartTotalPrice").textContent
  } руб`;
}

function closePurchaseWindow() {
  const purchaseWindow = document.getElementById("purchaseWindow");
  purchaseWindow.style.display = "none";
}

function completePurchase() {
  alert("Платеж проведен успешно!");
  closePurchaseWindow();
  clearCart();
}
