import faker from "faker";

document.addEventListener("DOMContentLoaded", () => {
  const cartText = `<div>You have ${faker.random.number()} items in your cart</div>`;
  document.querySelector("#dev-cart").innerHTML = cartText;
});
