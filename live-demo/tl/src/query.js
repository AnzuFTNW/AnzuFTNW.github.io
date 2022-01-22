const qSubmit = document.getElementById("qSubmit");
const qSearch = document.getElementById("qSearch");
const qResult = document.getElementById("qResult");
const qSelect = document.getElementById("qSelect");
let cardIdCount = 1;
let qOutput;
let query;

// QUERY MAGIC
function selectQuery() {
  if (qSelect.value === "character") {
    query = `
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
    qSearch.setAttribute("placeholder", "Aki Adagaki");
  } else if (qSelect.value === "animanga") {
    query = `
    query ($id: Int, $page: Int, $perPage: Int, $search: String) {
      Page (page: $page, perPage: $perPage) {
        pageInfo {
          total
          currentPage
          lastPage
          hasNextPage
          perPage
        }
        media (id: $id, search: $search) {
          id
          title {
            romaji
          }
          coverImage {
            medium
          }
        }
      }
    }
    `;
    qSearch.setAttribute("placeholder", "One Punch Man");
  } else {
    qSearch.setAttribute("placeholder", "...");
  }
}

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

  if (qSelect.value === "character") {
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
        refreshEventListeners();
      });
      if (qOutput.length === 50) {
        console.log("Too many");
      }
    }
  } else if (qSelect.value === "animanga") {
    qOutput = data.data.Page.media;

    if (qOutput.length === 0) {
      console.log("Nothing");
    } else {
      qOutput.forEach(function (animanga) {
        const cardDiv = document.createElement("DIV");
        const cardName = document.createElement("P");
        const cardImg = document.createElement("IMG");

        cardDiv.setAttribute("id", `c${cardIdCount}`);
        cardDiv.classList.add("card");
        cardDiv.setAttribute("draggable", true);
        cardName.classList.add("card-name");
        cardName.innerHTML = `${animanga.title.romaji}`;
        cardImg.classList.add("card-image");
        cardImg.setAttribute("draggable", false);
        cardImg.setAttribute("src", `${animanga.coverImage.medium}`);

        cardDiv.appendChild(cardName);
        cardDiv.appendChild(cardImg);
        qResult.appendChild(cardDiv);

        cardIdCount++;
        refreshEventListeners();
      });
      if (qOutput.length === 50) {
        console.log("Too many");
      }
    }
  } else {
    console.log("uhm..");
  }
}

function handleError(error) {
  alert("Error, check console");
  console.error(error);
}

function initializeQuery() {
  qSubmit.addEventListener("click", requestQuery);
  qSelect.addEventListener("change", function () {
    console.log("You selected: ", this.value);
    selectQuery();
  });
}
