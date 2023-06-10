const cards1 = document.querySelectorAll(".slider1 .cards .card");
const cardDiv1 = document.querySelector(".slider1 .cards");
const left_arrow1 = document.querySelector(".slider1 .arrow.left");
const right_arrow1 = document.querySelector(".slider1 .arrow.right");

const cards2 = document.querySelectorAll(".slider2 .cards .card");
const cardDiv2 = document.querySelector(".slider2 .cards");
const left_arrow2 = document.querySelector(".slider2 .arrow.left");
const right_arrow2 = document.querySelector(".slider2 .arrow.right");
const addCartButtons = document.querySelectorAll(".btn-border");
const navbar = document.getElementById("navbar");

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
  btn.onclick = () => {
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

// For slider 1
let left1 = 0;
let card_size1 = 20;
let total_card_size1 = cards1.length * 20 - 100;
left_arrow1.style.opacity = ".5";

right_arrow1.onclick = () => {
  left1 += card_size1;
  left_arrow1.style.opacity = "1";
  if (left1 >= total_card_size1) {
    right_arrow1.style.opacity = ".5";
    left1 = total_card_size1;
  }
  movecards(cardDiv1, left1);
};
left_arrow1.onclick = () => {
  left1 -= card_size1;
  right_arrow1.style.opacity = "1";

  if (left1 <= 0) {
    left1 = 0;
    left_arrow1.style.opacity = ".5";
  }
  movecards(cardDiv1, left1);
};

// For slider 2
let left2 = 0;
let card_size2 = 20;
let total_card_size2 = cards2.length * 20 - 100;
left_arrow2.style.opacity = ".5";

right_arrow2.onclick = () => {
  left2 += card_size2;
  left_arrow2.style.opacity = "1";
  if (left2 >= total_card_size2) {
    right_arrow2.style.opacity = ".5";
    left2 = total_card_size2;
  }
  movecards(cardDiv2, left2);
};
left_arrow2.onclick = () => {
  left2 -= card_size2;
  right_arrow2.style.opacity = "1";

  if (left2 <= 0) {
    left2 = 0;
    left_arrow2.style.opacity = ".5";
  }
  movecards(cardDiv2, left2);
};

const movecards = (div, left) => {
  div.style.left = `calc(${-left}rem - ${(left / 20) * 2}px)`;
};

let prevScrollpos = window.scrollY;

window.onscroll = () => {
  var currentScrollPos = window.scrollY;
  if (window.scrollY === 0) navbar.style.padding = "30px 0";
  else navbar.style.padding = "15px 0";

  if (prevScrollpos > currentScrollPos) {
    navbar.style.top = "0";
  } else {
    navbar.style.top = "-200px";
  }
  prevScrollpos = currentScrollPos;
};

document.addEventListener("DOMContentLoaded", () => {
  const scrollLinks = document.querySelectorAll('a[href^="#"]');

  scrollLinks.forEach((link) => {
    link.addEventListener("click", (event) => {
      event.preventDefault();

      const target = document.querySelector(link.getAttribute("href"));

      if (target) {
        target.scrollIntoView({
          behavior: "smooth",
        });
      }
    });
  });
});

const placeOrderBtn = document.querySelectorAll(".placeOrderBtn");
const paymentDiv = document.getElementById("paymentDiv");
const paymentForm = document.getElementById("paymentForm");
const orderStatus = document.getElementById("orderStatus");
const closeBtn = document.getElementById("closebtn");

placeOrderBtn.forEach((btn) => {
  btn.addEventListener("click", () => {
    paymentDiv.style.display = "flex";
    paymentDiv.style.justifyContent = "center";
    paymentDiv.style.alignItems = "center";
  });
});

closeBtn.onclick = () => {
  paymentDiv.style.display = "none";
};

paymentForm.addEventListener("submit", (event) => {
  event.preventDefault();
  orderStatus.textContent = "Payment done!";
  paymentDiv.innerHTML = ""; // Empty the payment div
  paymentDiv.style.display = "none";
  orderStatus.style.display = "flex";
  orderStatus.style.justifyContent = "center";
  orderStatus.style.alignItems = "center";

  setInterval(() => {
    location.reload();
  }, 3000);
});
