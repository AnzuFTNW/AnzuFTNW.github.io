const qSubmit = document.getElementById("qSubmit");
const qSearch = document.getElementById("qSearch");
const qResult = document.getElementById("qResult");
const cardStorage = document.getElementById("card-storage");

let items = document.querySelectorAll(".card");
const boxes = document.querySelectorAll(".card-box");

let cardIdCount = 1;
let qOutput;

let query = `
query ($id: Int, $page: Int, $perPage: Int, $search: String) {
  Page (page: $page, perPage: $perPage) {
    pageInfo {
      total
      currentPage
      lastPage
      hasNextPage
      perPage
    }
    characters (id: $id, search: $search) {
      id
      name {
        full
      }
      image {
        medium
      }
    }
  }
}
`;

// DRAG AND DROP MAGIC
function handleDragStart(ev) {
  this.style.opacity = "0.4";

  dragSrcEl = this;
  ev.dataTransfer.effectAllowed = "move";
  ev.dataTransfer.setData("text/plain", ev.target.id);
}

function handleDragEnd(ev) {
  this.style.opacity = "1";
  cardStorage.classList.remove("out");

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
  cardStorage.classList.add("out");
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
    console.log("eh?");
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
}

// QUERY MAGIC
function requestQuery() {
  let variables = {
    search: `${qSearch.value}`,
    page: 1,
    perPage: 50,
  };

  const url = "https://graphql.anilist.co";

  const options = {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      Accept: "application/json",
    },
    body: JSON.stringify({
      query: query,
      variables: variables,
    }),
  };

  fetch(url, options).then(handleResponse).then(handleData).catch(handleError);
}

function handleResponse(response) {
  return response.json().then(function (json) {
    return response.ok ? json : Promise.reject(json);
  });
}

function addNewData() {}

function removeOldData() {
  const x = qResult.childElementCount;
  for (let i = 0; i !== x; i++) {
    qResult.removeChild(qResult.lastChild);
  }
}

function handleData(data) {
  removeOldData();

  qOutput = data.data.Page.characters;

  if (qOutput.length === 0) {
    console.log("Nothing");
  } else {
    qOutput.forEach(function (character) {
      const cardDiv = document.createElement("DIV");
      const cardName = document.createElement("P");
      const cardImg = document.createElement("IMG");

      cardDiv.setAttribute("id", `c${cardIdCount}`);
      cardDiv.classList.add("card");
      cardDiv.setAttribute("draggable", true);
      cardName.classList.add("card-name");
      cardName.innerHTML = `${character.name.full}`;
      cardImg.classList.add("card-image");
      cardImg.setAttribute("draggable", false);
      cardImg.setAttribute("src", `${character.image.medium}`);

      cardDiv.appendChild(cardName);
      cardDiv.appendChild(cardImg);
      qResult.appendChild(cardDiv);

      cardIdCount++;
    });
    if (qOutput.length === 50) {
      console.log("Too many");
    }
    refreshEventListeners();
  }
}

function handleError(error) {
  alert("Error, check console");
  console.error(error);
}

// runtime
refreshEventListeners();

qSearch.value = "";
qSubmit.addEventListener("click", requestQuery);

boxes.forEach(function (box) {
  box.addEventListener("dragover", handleDragOver);
  box.addEventListener("dragenter", handleDragEnter);
  box.addEventListener("dragleave", handleDragLeave);
  box.addEventListener("drop", handleDrop);
});

cardStorage.addEventListener("dragenter", handleDrawer);
