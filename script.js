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
