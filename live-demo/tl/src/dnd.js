const cardPool = document.getElementById("card-pool");
const poolIcons = document.querySelectorAll(".pool-icon");
let items = document.querySelectorAll(".card");
let boxes = document.querySelectorAll(".card-box");

function handleDragStart(ev) {
  this.style.opacity = "0.4";

  dragSrcEl = this;
  ev.dataTransfer.effectAllowed = "move";
  ev.dataTransfer.setData("text/plain", ev.target.id);
}

function handleDragEnd(ev) {
  this.style.opacity = "1";

  cardPool.classList.remove("out");

  boxes.forEach(function (box) {
    box.classList.remove("over");
  });
}

function handleDragOver(ev) {
  if (ev.preventDefault) {
    ev.preventDefault();
  }

  return false;
}

function handleDrawer(ev) {
  cardPool.classList.add("out");
}

function handleDragEnter(ev) {
  this.classList.add("over");
}

function handleDragLeave(ev) {
  this.classList.remove("over");
}

function handleDrop(ev) {
  if (ev.preventDefault) {
    ev.preventDefault();
  }
  ev.stopPropagation();

  if (ev.target.classList.contains("trash")) {
    let data = ev.dataTransfer.getData("text/plain");
    ev.target.appendChild(document.getElementById(data));

    const trash = document.querySelector(".trash");
    trash.removeChild(trash.lastChild);
  } else if (ev.target.classList.contains("card-box")) {
    let data = ev.dataTransfer.getData("text/plain");
    ev.target.appendChild(document.getElementById(data));
  }

  return false;
}

function refreshEventListeners() {
  items = document.querySelectorAll(".card");
  items.forEach(function (item) {
    item.addEventListener("dragstart", handleDragStart);
    item.addEventListener("dragend", handleDragEnd);
  });

  boxes = document.querySelectorAll(".card-box");
  boxes.forEach(function (box) {
    box.addEventListener("dragover", handleDragOver);
    box.addEventListener("dragenter", handleDragEnter);
    box.addEventListener("dragleave", handleDragLeave);
    box.addEventListener("drop", handleDrop);
  });
}

function handleMenu() {
  if (cardPool.classList.contains("out")) {
    cardPool.classList.remove("out");
  } else {
    cardPool.classList.add("out");
  }
}

function initializePoolIcon() {
  poolIcons.forEach((poolIcon) => {
    poolIcon.addEventListener("dragenter", handleDrawer);
    poolIcon.addEventListener("click", handleMenu);
  });
}
