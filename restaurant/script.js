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

let cartItems = JSON.parse(localStorage.getItem("cart"));
//checking for null
if (!cartItems) {
  cartItems = [];
  let uniqueItemsNames = new Set();
} else {
  // let uniqueItemsNames = new Set(cartItems.map((x) => x.name));
  updateCart();
}

function addToCart(itemName, price) {
  if (window.uniqueItemsNames) {
    if (window.uniqueItemsNames.has(itemName)) {
      currentItem = cartItems.find((item) => item.name === itemName);
      currentItem["count"] = currentItem["count"] + 1;
    } else {
      cartItems.push({ name: itemName, price: price, count: 1 });
    }
  } else {
    cartItems.push({ name: itemName, price: price, count: 1 });
  }
  // totalPrice += price;
  updateCart();
}

// re-renders the cart with the updated total items count.
function updateCart() {
  const totalSpan = document.getElementById("cart-total");
  let itemsCount = 0;
  cartItems.map((item) => (itemsCount += item.count));
  totalSpan.textContent = itemsCount;
  cartItems = cartItems.filter((item) => item.count > 0);
  localStorage.setItem("cart", JSON.stringify(cartItems));
  window.uniqueItemsNames = new Set(cartItems.map((x) => x.name));
}

function decreaseItemCount(itemName) {
  currentItem = cartItems.find((item) => item.name === itemName);
  currentItem.count -= 1;
  updateCart();
  updateCartPopup();
}

function increaseItemCount(itemName) {
  currentItem = cartItems.find((item) => item.name === itemName);
  currentItem.count += 1;
  updateCart();
  updateCartPopup();
}

function delItemFromCart(itemName) {
  let deletingLi = document.getElementById(itemName);
  deletingLi.remove();
  cart;
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
  let totalPrice = 0;

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
      totalPrice += item.price;
    }
  });

  cartTotal.textContent = totalPrice;
}

function createDecreaseButton(itemName) {
  const decreaseButton = document.createElement("button"); //incapsulate in CreateDecreaseBut
  decreaseButton.classList.add("decrease-button");
  decreaseButton.innerText = "-";
  decreaseButton.onclick = () => decreaseItemCount(itemName);
  return decreaseButton;
}

function createIncreaseButton(itemName) {
  const increaseButton = document.createElement("button"); //incapsulate in CreateDecreaseBut
  increaseButton.classList.add("increase-button");
  increaseButton.innerText = "+";
  increaseButton.onclick = () => increaseItemCount(itemName);
  return increaseButton;
}

let close = document.querySelector(".close");
close.onclick = toggleCartPopup;

//count occurrences of each element in cart
function countItems(cartItems) {
  let itemsCount = {};
  for (let itemName of new Set(cartItems.map((x) => x.name))) {
    itemsCount[itemName] = cartItems.filter((x) => x.name === itemName).length;
    console.log(itemName);
  }
  return itemsCount;
}

function openPurchaseWindow() {
  const purchaseWindow = document.getElementById("purchaseWindow");
  purchaseWindow.style.display = "block";
  document.getElementById("submitPayment").textContent = `Оплатить ${
    document.getElementById("cartTotalPrice").textContent
  } руб`;
}

// Function to close the purchase window
function closePurchaseWindow() {
  const purchaseWindow = document.getElementById("purchaseWindow");
  purchaseWindow.style.display = "none";
}
document.getElementById("submitPayment").onclick = completePurchase;
// Function to complete the purchase
function completePurchase() {
  // submitBtn = document.getElementById("submitPayment");
  // submitBtn.onclick=completePurchase;
  // Add your logic for completing the purchase here
  // This function is an example placeholder for the purchase completion
  alert("Платеж проведен успешно!");
  closePurchaseWindow();
}

// Event listener for the "Оплатить" button
const payButton = document.getElementById("payButton");
payButton.addEventListener("click", openPurchaseWindow);
