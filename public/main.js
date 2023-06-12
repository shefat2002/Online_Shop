const cards1 = document.querySelectorAll(".slider1 .cards .card");
const cardDiv1 = document.querySelector(".slider1 .cards");
const left_arrow1 = document.querySelector(".slider1 .arrow.left");
const right_arrow1 = document.querySelector(".slider1 .arrow.right");

const cards2 = document.querySelectorAll(".slider2 .cards .card");
const cardDiv2 = document.querySelector(".slider2 .cards");
const left_arrow2 = document.querySelector(".slider2 .arrow.left");
const right_arrow2 = document.querySelector(".slider2 .arrow.right");

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

document.addEventListener("DOMContentLoaded", () => {
  const scrollLinks = document.querySelectorAll('a[href^="#"]');
  scrollLinks.forEach((link) => {
    link.addEventListener("click", (event) => {
      event.preventDefault();
      const target = document.querySelector(link.getAttribute("href"));
      if (target)
        target.scrollIntoView({
          behavior: "smooth",
        });
    });
  });
});
