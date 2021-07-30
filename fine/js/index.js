const hearts = Array.from(document.getElementsByClassName("like"));
const removeBtns = Array.from(document.querySelectorAll(".remove"));
const incBtns = Array.from(document.querySelectorAll(".increment"));
const decBtns = Array.from(document.querySelectorAll(".decrement"));

//Update Total

function updateTotal() {
  const quantity = Array.from(document.querySelectorAll(".quantity"));
  const unitPrice = Array.from(document.querySelectorAll(".unit-price"));
  const totalPrice = document.querySelector(".total-price");
  let sum = 0;
  for (let i = 0; i < quantity.length; i++) {
    sum += quantity[i].innerText * unitPrice[i].innerText;
  }
  totalPrice.innerText = sum;
}

window.addEventListener("load", updateTotal);

// increment && decrement
function inc(event) {
  event.target.previousElementSibling.innerText++;
  updateTotal();
}
function dec(event) {
  if (event.target.nextElementSibling.innerText > 1) {
    event.target.nextElementSibling.innerText--;
    updateTotal();
  }
}

for (let i = 0; i < incBtns.length; i++) {
  incBtns[i].addEventListener("click", inc);
  decBtns[i].addEventListener("click", dec);
}

//Remove Btn

function removeProduct(event) {
  event.target.parentElement.parentElement.remove();
  updateTotal();
}

for (let i = 0; i < removeBtns.length; i++) {
  removeBtns[i].addEventListener("click", removeProduct);
}

function handleLike(event) {
  event.target.classList.toggle("red-heart");
}
for (let i = 0; i < hearts.length; i++) {
  hearts[i].addEventListener("click", handleLike);
}
