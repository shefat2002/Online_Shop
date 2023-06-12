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
