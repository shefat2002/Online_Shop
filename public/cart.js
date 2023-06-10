const placeOrderBtn = document.querySelector(".placeOrderBtn");
const paymentDiv = document.getElementById("paymentDiv");
const paymentForm = document.getElementById("paymentForm");
const orderStatus = document.getElementById("orderStatus");

const cartIcon = document.querySelector(".item-number");
const cartLink = document.querySelector(".cart-icon");
const navbar = document.getElementById("navbar");
const total = document.getElementById("total");

const deleteBtns = document.querySelectorAll(".cartItemDelete");

const closeBtn = document.getElementById("closebtn");

let cart = localStorage.getItem("items")
  ? localStorage.getItem("items").split("u")
  : [];

deleteBtns.forEach((btn) => {
  btn.onclick = () => {
    let id = btn.dataset.id;
    cart = cart.filter((item) => item !== id);
    const parentDiv = btn.closest(".cartItem");
    localStorage.setItem("items", cart.join("u"));
    cartIcon.innerText = cart.length;
    cartLink.href = "/cart?list=" + localStorage.getItem("items");
    changeUrl(localStorage.getItem("items"));
    parentDiv.remove();
    if (cart.length === 0) {
      location.reload();
    }
  };
});

const changeUrl = (value) => {
  var currentUrl = new URL(window.location.href);
  currentUrl.searchParams.set("list", value);
  window.history.pushState({}, "", currentUrl);
};

const setTotal = () => {
  const items = document.querySelectorAll(".cartItemPrice");
  let sum = 0;
  items.forEach((item) => {
    number = item.innerText.substring(1);
    sum += parseFloat(number);
  });
  total.innerText = "Total: $" + Number(sum.toFixed(2));
};
setTotal();

cartIcon.innerText = cart.length;
cartLink.href = "/cart?list=" + localStorage.getItem("items");

let prevScrollpos = window.scrollY;

window.onscroll = () => {
  let currentScrollPos = window.scrollY;
  if (window.scrollY === 0) navbar.style.padding = "30px 0";
  else navbar.style.padding = "15px 0";

  if (prevScrollpos > currentScrollPos) navbar.style.top = "0";
  else navbar.style.top = "-200px";

  prevScrollpos = currentScrollPos;
};

placeOrderBtn.addEventListener("click", () => {
  paymentDiv.style.display = "flex";
  paymentDiv.style.justifyContent = "center";
  paymentDiv.style.alignItems = "center";
});

closeBtn.onclick = () => {
  paymentDiv.style.display = "none";
};

paymentForm.addEventListener("submit", (event) => {
  event.preventDefault();
  orderStatus.textContent = "Payment done!";
  paymentDiv.innerHTML = "";
  paymentDiv.style.display = "none";
  orderStatus.style.display = "flex";
  orderStatus.style.justifyContent = "center";
  orderStatus.style.alignItems = "center";
  localStorage.setItem("items", "");

  setInterval(() => {
    location.replace("/");
  }, 2000);
});
