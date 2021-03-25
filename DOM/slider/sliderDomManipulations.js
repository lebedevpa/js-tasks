const leftBtn = document.querySelector("#left");
const rightBtn = document.querySelector("#right");
const itemsList = document.querySelector("#items");

const loop = (directon, e) => {
  e.preventDefault();

  if (directon === "right") {
    itemsList.appendChild(itemsList.firstElementChild);
  } else {
    itemsList.insertBefore(itemsList.lastElementChild, items.firstElementChild);
  }

}

right.addEventListener ("click", e => {
  loop ("right", e);
})

left.addEventListener ("click", e => {
  loop ("left", e);
})