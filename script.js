
// ---------- CART LOGIC ----------

// Get cart from localStorage
function getCart() {
  return JSON.parse(localStorage.getItem("cart")) || [];
}

// Save cart
function saveCart(cart) {
  localStorage.setItem("cart", JSON.stringify(cart));
  updateCartCount();
}

// Add to cart (USED IN product.html)
function addToCart(id, name, price, image) {
  const product = {
    id: id,
    name: name,
    price: Number(price),
    image: image,
    quantity: 1
  };

  let cart = JSON.parse(localStorage.getItem("cart")) || [];

  const existingProduct = cart.find(item => item.id === id);

  if (existingProduct) {
    existingProduct.quantity += 1;
  } else {
    cart.push(product);
  }

  localStorage.setItem("cart", JSON.stringify(cart));
  updateCartCount();

  alert("Product added to cart!");
}



// Update cart count in navbar
function updateCartCount() {
  const cart = getCart();
 const count = cart.reduce((sum, item) => {
  return sum + (Number(item.quantity) || 0);
}, 0);


  const cartCount = document.getElementById("cart-count");
  if (cartCount) {
    cartCount.innerText = count;
  }
}

// Run on page load
document.addEventListener("DOMContentLoaded", updateCartCount);

    // Size selection
const sizeButtons = document.querySelectorAll(".sizes button");

sizeButtons.forEach(btn => {
  btn.addEventListener("click", () => {
    // remove active from all
    sizeButtons.forEach(b => b.classList.remove("active"));

    // add active to clicked one
    btn.classList.add("active");

    // optional: store selected size
    const selectedSize = btn.innerText;
    console.log("Selected Size:", selectedSize);
  });
});
// ================= COUNTDOWN TIMER =================
const endTime = new Date().getTime() + 8 * 60 * 60 * 1000;

const timerInterval = setInterval(() => {
  const now = new Date().getTime();
  const diff = endTime - now;

  if (diff <= 0) {
    clearInterval(timerInterval);
    document.getElementById("hours").innerText = "00";
    document.getElementById("minutes").innerText = "00";
    document.getElementById("seconds").innerText = "00";
    return;
  }

  document.getElementById("hours").innerText =
    Math.floor(diff / (1000 * 60 * 60)).toString().padStart(2, "0");

  document.getElementById("minutes").innerText =
    Math.floor((diff / (1000 * 60)) % 60).toString().padStart(2, "0");

  document.getElementById("seconds").innerText =
    Math.floor((diff / 1000) % 60).toString().padStart(2, "0");
}, 1000);

// ================= WISHLIST TOGGLE =================
document.querySelectorAll(".wishlist").forEach(icon => {
  icon.addEventListener("click", () => {
    icon.classList.toggle("active");
  });
});

// ================= NAVBAR SCROLL EFFECT =================
const navbar = document.querySelector(".navbar");

if (navbar) {
  window.addEventListener("scroll", () => {
    navbar.classList.toggle("scrolled", window.scrollY > 80);
  });
}
function openProduct(name, image, price, oldPrice, desc, page = "product.html") {
  const product = {
    name,
    image,
    price,
    oldPrice,
    desc
  };

  localStorage.setItem("selectedProduct", JSON.stringify(product));
  window.location.href = page;
}
