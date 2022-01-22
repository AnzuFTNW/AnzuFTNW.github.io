let menuIcons = document.querySelectorAll(".icon");
let addIcons = document.querySelectorAll(".add-icon");
let rmvIcons = document.querySelectorAll(".rmv-icon");
let textSize = 96;
const letterPool = [
  "S",
  "A",
  "B",
  "C",
  "D",
  "E",
  "F",
  "G",
  "H",
  "I",
  "J",
  "K",
  "L",
  "M",
  "N",
  "O",
  "P",
  "Q",
  "R",
  "T",
  "U",
  "V",
  "W",
  "X",
  "Y",
  "Z",
];
let letterIndex = 0;
const colorPool = ["#ff7f7f", "#ffff7f", "#7fff7f", "#7fffff", "#7f7fff"];
let colorIndex = 0;
const textColor = "#22222c";

function openRowMenu(row) {
  const path = row.composedPath();
  const currentRow = path[1];

  console.log(currentRow);

  const currentMenu = currentRow.querySelector(".menu");
  const currentMenuIcon = currentRow.querySelector(".icon");

  const rankTagBackground = currentRow.querySelector(".rank-wrap");
  const rankTag = currentRow.querySelector(".tag");
  const currentValue = rankTag.innerHTML;

  const tagInput = currentRow.querySelector(`input[type="text"]`);
  tagInput.value = currentValue;

  const textColorPicker = currentRow.querySelector(
    `input[type="color"]:nth-child(4)`
  );
  const backgroundColorPicker = currentRow.querySelector(
    `input[type="color"]:nth-child(3)`
  );

  if (currentMenu.style.display === "flex") {
    currentMenu.style.display = "none";
    currentMenuIcon.style.opacity = "0";
  } else {
    currentMenu.style.display = "flex";
    currentMenuIcon.style.opacity = "0.25";
  }

  tagInput.addEventListener("change", () => {
    const newValue = tagInput.value;
    rankTag.innerHTML = newValue;
    resizeText(rankTagBackground);
  });

  textColorPicker.addEventListener("change", () => {
    rankTagBackground.style.color = `${textColorPicker.value}`;
  });

  backgroundColorPicker.addEventListener("change", () => {
    rankTagBackground.style.background = `${backgroundColorPicker.value}`;
  });

  function resizeText(text) {
    const tag = text.firstChild;

    if (tag.clientWidth > text.clientWidth) {
      for (let i = tag.clientWidth; i > text.clientWidth; i = tag.clientWidth) {
        textSize--;
        tag.style.fontSize = `${textSize}px`;
      }
    } else if (tag.clientWidth < text.clientWidth) {
      for (let x = tag.clientWidth; text.clientWidth > x; x = tag.clientWidth) {
        if (textSize >= 128) {
          break;
        }
        textSize++;
        tag.style.fontSize = `${textSize}px`;
      }
    }
  }
}

function addRow(nextRow) {
  const tierList = document.getElementById("tierlist");
  const rowEle = document.createElement("DIV");
  const rankEle = document.createElement("HEADER");
  const tagEle = document.createElement("SPAN");
  const boxEle = document.createElement("DIV");
  const iconEle = document.createElement("DIV");
  const menuEle = document.createElement("DIV");
  const addRowEle = document.createElement("DIV");
  const rmvRowEle = document.createElement("DIV");
  const backgroundColorElement = document.createElement("INPUT");
  const textColorElement = document.createElement("INPUT");
  const textInputElement = document.createElement("INPUT");

  rowEle.setAttribute("class", "row");
  rankEle.setAttribute("class", "rank-wrap");
  tagEle.setAttribute("class", "tag");
  boxEle.setAttribute("class", "card-box");
  iconEle.setAttribute("class", "icon");
  iconEle.innerHTML = "";
  iconEle.setAttribute("data-html2canvas-ignore", "");
  menuEle.setAttribute("class", "menu");
  menuEle.setAttribute("data-html2canvas-ignore", "");
  addRowEle.setAttribute("class", "add-icon");
  addRowEle.innerHTML = "";
  rmvRowEle.setAttribute("class", "rmv-icon");
  rmvRowEle.innerHTML = "";
  backgroundColorElement.setAttribute("type", "color");
  textColorElement.setAttribute("type", "color");
  textInputElement.setAttribute("type", "text");

  if (nextRow !== null) {
    tierList.insertBefore(rowEle, nextRow);
  } else {
    tierList.appendChild(rowEle);
  }

  rowEle.appendChild(rankEle);
  rankEle.appendChild(tagEle);
  rowEle.appendChild(boxEle);
  rowEle.appendChild(iconEle);
  rowEle.appendChild(menuEle);
  menuEle.appendChild(addRowEle);
  menuEle.appendChild(rmvRowEle);
  menuEle.appendChild(backgroundColorElement);
  menuEle.appendChild(textColorElement);
  menuEle.appendChild(textInputElement);

  tagEle.innerHTML = letterPool[letterIndex];
  letterIndex++;

  if (letterIndex > 25) {
    letterIndex = 0;
  }

  rankEle.style.background = colorPool[colorIndex];
  backgroundColorElement.value = colorPool[colorIndex];
  colorIndex++;

  if (colorIndex > 4) {
    colorIndex = 0;
  }

  rankEle.style.color = textColor;
  textColorElement.value = textColor;

  refreshEventListeners();
  refreshMenuIcons();
}

function getNextRow(row) {
  const path = row.composedPath();
  const currentRow = path[2];
  const nextRow = currentRow.nextSibling;
  addRow(nextRow);
}

function removeRow(row) {
  const path = row.composedPath();
  const currentRow = path[2];
  const tierList = path[3];
  const childrenList = tierList.children;

  if (childrenList.length > 1) {
    tierList.removeChild(currentRow);
  } else {
    alert(
      "You can't the last row.\nIf you wish to reset everything refresh the page instead."
    );
  }
}

function refreshMenuIcons() {
  menuIcons = document.querySelectorAll(".icon");
  menuIcons.forEach(function (icon) {
    icon.addEventListener("click", openRowMenu);
  });
  addIcons = document.querySelectorAll(".add-icon");
  addIcons.forEach(function (addicon) {
    addicon.addEventListener("click", getNextRow);
  });
  rmvIcons = document.querySelectorAll(".rmv-icon");
  rmvIcons.forEach(function (rmvicon) {
    rmvicon.addEventListener("click", removeRow);
  });
}

function initializeTierlist() {
  addRow();
  addRow();
  addRow();
  addRow();
  addRow();
}
