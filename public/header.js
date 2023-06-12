const navbar = document.getElementById("navbar");

let prevScrollpos = window.scrollY;

window.onscroll = () => {
  let currentScrollPos = window.scrollY;
  if (window.scrollY === 0) navbar.style.padding = "30px 0";
  else navbar.style.padding = "15px 0";

  if (prevScrollpos > currentScrollPos) navbar.style.top = "0";
  else navbar.style.top = "-200px";

  prevScrollpos = currentScrollPos;
};
