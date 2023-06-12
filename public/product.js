const addCartButtons = document.querySelectorAll(".btn-border");
const cartIcon = document.querySelector(".item-number");
const cartLink = document.querySelector(".cart-icon");

let cart = localStorage.getItem("items")
  ? localStorage.getItem("items").split("u")
  : [];

cartIcon.innerText = cart.length;
cartLink.href = "/cart?list=" + localStorage.getItem("items");

addCartButtons.forEach((btn) => {
  const id = btn.dataset.id;
  btn.innerText = cart.includes(id.toString()) ? "Added" : "Add to Cart";
  btn.onclick = (e) => {
    navbar.style.top = "0";
    e.stopPropagation();
    if (!cart.includes(id.toString())) {
      cart.push(id);
      btn.innerText = "Added";
    } else {
      cart = cart.filter((item) => item !== id);
      btn.innerText = "Add to Cart";
    }
    localStorage.setItem("items", cart.join("u"));
    cartIcon.innerText = cart.length;
    cartLink.href = "/cart?list=" + localStorage.getItem("items");
  };
});
