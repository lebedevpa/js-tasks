const leftBtn = document.querySelector("#left");
const rightBtn = document.querySelector("#right");
const itemsList = document.querySelector("#items");
const computedStyles = getComputedStyle(items);


const loop = (direction, e) => {
  e.preventDefault();

  if (direction === "right") {
    itemsList.appendChild(itemsList.firstElementChild);
  } else {
    itemsList.insertBefore(itemsList.lastElementChild, items.firstElementChild);
  }
};

rightBtn.addEventListener("click", (e) => {
  e.preventDefault();

  let currentRight = parseInt(computedStyles.right);

  if (currentRight < 500) {
    items.style.right = `${currentRight + 100}px`;
  }



});

leftBtn.addEventListener("click", (e) => {
  e.preventDefault();

  let currentRight = parseInt(computedStyles.right);

  if (currentRight > 0) {
    items.style.right = `${currentRight - 100}px`;
  }



});