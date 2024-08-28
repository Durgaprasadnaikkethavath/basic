// Data storage
let cart = [];
let wishlist = [];

// Function to add items to the cart
function addToBag(productName, price) {
  const existingItem = cart.find((item) => item.name === productName);

  if (existingItem) {
    existingItem.quantity += 1;
    existingItem.totalPrice += price;
  } else {
    cart.push({
      name: productName,
      price: price,
      quantity: 1,
      totalPrice: price,
    });
  }

  updateCartDisplay();
}

// Function to add items to the wishlist
function addToWishlist(productName) {
  if (!wishlist.includes(productName)) {
    wishlist.push(productName);
    updateWishlistDisplay();
  }
}

// Function to update the cart display
function updateCartDisplay() {
  const cartItems = document.getElementById("cart-items");
  const totalAmountElement = document.getElementById("total-amount");
  let totalAmount = 0;

  // Clear existing items
  cartItems.innerHTML = "";

  // Display cart items
  cart.forEach((item) => {
    const li = document.createElement("li");
    li.textContent = `${item.name} - $${item.price} x ${item.quantity} = $${item.totalPrice}`;
    cartItems.appendChild(li);
    totalAmount += item.totalPrice;
  });

  // Update total amount
  totalAmountElement.textContent = totalAmount;
}

// Function to update the wishlist display
function updateWishlistDisplay() {
  const wishlistItems = document.getElementById("wishlist-items");

  // Clear existing items
  wishlistItems.innerHTML = "";

  // Display wishlist items
  wishlist.forEach((item) => {
    const li = document.createElement("li");
    li.textContent = item;
    wishlistItems.appendChild(li);
  });
}
