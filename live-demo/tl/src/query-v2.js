let query,
  queryPage = 1,
  queryDataType,
  killFlag = true,
  querySwitch = false;

// update search text and query
function searchQuery(type, mode) {
  const querySearch = document.getElementById("query-search");
  switch (type) {
    case "Character":
      switch (mode) {
        case "Name":
          querySearch.setAttribute("placeholder", "Aki Adagaki");
          query = `
            query ($id: Int, $page: Int, $perPage: Int, $search: String) {
              Page (page: $page, perPage: $perPage) {
                pageInfo {
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
          queryDataType = "character.name";
          break;
        case "Origin":
          querySearch.setAttribute("placeholder", "Bakemonogatari");
          query = `
            query ($id: Int, $page: Int, $perPage: Int, $search: String) {
              Page {
                media (id: $id, search: $search) {
                  characters (page: $page, perPage: $perPage) {
                    pageInfo {
                      hasNextPage
                      perPage
                    }
                    nodes {
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
              }
            }
          `;
          queryDataType = "character.origin";
          break;
        case "Favorites":
          querySearch.setAttribute("placeholder", "Baros");
          query = `
            query ($id: Int, $page: Int, $perPage: Int, $search: String) {
              Page {
                users (id: $id, search: $search) {
                  id
                  favourites {
                    characters (page: $page, perPage: $perPage) {
                      pageInfo {
                        hasNextPage
                        perPage
                      }
                      nodes {
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
                }
              }
            }
          `;
          queryDataType = "character.favorites";
          break;
      }
      break;
    case "Anime":
      switch (mode) {
        case "Name":
          querySearch.setAttribute("placeholder", "One Punch Man");
          query = `
            query ($id: Int, $page: Int, $perPage: Int, $search: String) {
              Page (page: $page, perPage: $perPage) {
                pageInfo {
                  hasNextPage
                  perPage
                }
                media (id: $id, type: ANIME, search: $search) {
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
          queryDataType = "anime.name";
          break;
        case "Studio":
          querySearch.setAttribute("placeholder", "Kyoto Animation");
          query = `
            query ($id: Int, $page: Int, $perPage: Int, $search: String) {
              Page {
                studios (id: $id, search: $search) {
                  media (page: $page, perPage: $perPage) {
                    pageInfo {
                      hasNextPage
                      perPage
                    }
                    nodes {
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
              }
            }
          `;
          queryDataType = "anime.studios";
          break;
        case "Favorites":
          querySearch.setAttribute("placeholder", "Sei");
          query = `
            query ($id: Int, $page: Int, $perPage: Int, $search: String) {
              Page {
                users (id: $id, search: $search) {
                  favourites {
                    anime (page: $page, perPage: $perPage) {
                      pageInfo {
                        hasNextPage
                        perPage
                      }
                      nodes {
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
                }
              }
            }
          `;
          queryDataType = "anime.favorites";
          break;
        case "List":
          querySearch.setAttribute("placeholder", "Lynnx");
          query = `
            query ($search: String) {
              Completed: MediaListCollection (userName: $search, type: ANIME, status: COMPLETED) {
                lists {
                  entries {
                    media {
                      id
                      title {
                        romaji
                      }
                      coverImage {
                        medium
                      }
                    }
                  }
                  isCustomList
                  isSplitCompletedList
                }
              }
              Repeating: MediaListCollection (userName: $search, type: ANIME, status: REPEATING) {
                lists {
                  entries {
                    media {
                      id
                      title {
                        romaji
                      }
                      coverImage {
                        medium
                      }
                    }
                  }
                  isCustomList
                  isSplitCompletedList
                }
              }
              Paused: MediaListCollection (userName: $search, type: ANIME, status: PAUSED) {
                lists {
                  entries {
                    media {
                      id
                      title {
                        romaji
                      }
                      coverImage {
                        medium
                      }
                    }
                  }
                  isCustomList
                  isSplitCompletedList
                }
              }
            }
          `;
          queryDataType = "anime.list";
          break;
      }
      break;
    case "Manga":
      switch (mode) {
        case "Name":
          querySearch.setAttribute("placeholder", "Aku no Hana");
          query = `
              query ($id: Int, $page: Int, $perPage: Int, $search: String) {
                Page (page: $page, perPage: $perPage) {
                  pageInfo {
                    hasNextPage
                    perPage
                  }
                  media (id: $id, type: MANGA, search: $search) {
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
          queryDataType = "manga.name";
          break;
        case "Favorites":
          querySearch.setAttribute("placeholder", "Robiracer");
          query = `
              query ($id: Int, $page: Int, $perPage: Int, $search: String) {
                Page {
                  users (id: $id, search: $search) {
                    favourites {
                      manga (page: $page, perPage: $perPage) {
                        pageInfo {
                          hasNextPage
                          perPage
                        }
                        nodes {
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
                  }
                }
              }
            `;
          queryDataType = "manga.favorites";
          break;
        case "List":
          querySearch.setAttribute("placeholder", "Ghoulish");
          query = `
            query ($search: String) {
              Completed: MediaListCollection (userName: $search, type: MANGA, status: COMPLETED) {
                lists {
                  entries {
                    media {
                      id
                      title {
                        romaji
                      }
                      coverImage {
                        medium
                      }
                    }
                  }
                  isCustomList
                  isSplitCompletedList
                }
              }
              Current: MediaListCollection (userName: $search, type: MANGA, status: CURRENT) {
                lists {
                  entries {
                    media {
                      id
                      title {
                        romaji
                      }
                      coverImage {
                        medium
                      }
                    }
                  }
                  isCustomList
                  isSplitCompletedList
                }
              }
              Repeating: MediaListCollection (userName: $search, type: MANGA, status: REPEATING) {
                lists {
                  entries {
                    media {
                      id
                      title {
                        romaji
                      }
                      coverImage {
                        medium
                      }
                    }
                  }
                  isCustomList
                  isSplitCompletedList
                }
              }
              Paused: MediaListCollection (userName: $search, type: MANGA, status: PAUSED) {
                lists {
                  entries {
                    media {
                      id
                      title {
                        romaji
                      }
                      coverImage {
                        medium
                      }
                    }
                  }
                  isCustomList
                  isSplitCompletedList
                }
              }
            }
          `;
          queryDataType = "manga.list";
          break;
      }
      break;
    case "Staff":
      switch (mode) {
        case "Name":
          querySearch.setAttribute("placeholder", "Aoi Yuuki");
          query = `
            query ($id: Int, $page: Int, $perPage: Int, $search: String) {
              Page (page: $page, perPage: $perPage) {
                pageInfo {
                  hasNextPage
                  perPage
                }
                staff (id: $id, search: $search) {
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
          queryDataType = "staff.name";
          break;
        case "Favorites":
          querySearch.setAttribute("placeholder", "K1ngOfSloth");
          query = `
            query ($id: Int, $page: Int, $perPage: Int, $search: String) {
              Page {
                users (id: $id, search: $search) {
                  favourites {
                    staff (page: $page, perPage: $perPage) {
                      pageInfo {
                        hasNextPage
                        perPage
                      }
                      nodes {
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
                }
              }
            }
          `;
          queryDataType = "staff.favorites";
          break;
      }
      break;
    case "User":
      switch (mode) {
        case "Name":
          querySearch.setAttribute("placeholder", "Zerro");
          query = `
          query ($id: Int, $page: Int, $perPage: Int, $search: String) {
            Page (page: $page, perPage: $perPage) {
              pageInfo {
                hasNextPage
                perPage
              }
              users (id: $id, search: $search) {
                id
                name
                avatar {
                  medium
                }
              }
            }
          }
        `;
          queryDataType = "user.name";
          break;
      }
      break;
  }
}

function handleQuery() {
  const querySearch = document.getElementById("query-search");
  let variables = {
    search: `${querySearch.value}`,
    page: `${queryPage}`,
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
  cardPool.classList.add("out");
}

function handleResponse(response) {
  return response
    .json()
    .then((json) => (response.ok ? json : Promise.reject(json)));
}

function handleData(data) {
  const queryDataBase = data.data.Page;
  const base = data.data;
  let queryData,
    hasNextPage,
    completedLists,
    repeatingLists,
    pausedLists,
    currentLists;

  function createCard(id, name, image) {
    const cardDiv = document.createElement("DIV");
    const cardNameWrapper = document.createElement("DIV");
    const cardName = document.createElement("P");
    const cardImg = document.createElement("IMG");

    cardDiv.setAttribute("id", `c${id}`);
    cardDiv.classList.add("card");
    cardDiv.setAttribute("draggable", true);
    cardNameWrapper.classList.add("card-name-wrapper");
    cardName.classList.add("card-name");
    cardName.innerHTML = `${name}`;
    cardImg.classList.add("card-image");
    cardImg.setAttribute("draggable", false);
    cardImg.setAttribute("src", `${image}`);

    cardDiv.appendChild(cardNameWrapper);
    cardDiv.appendChild(cardImg);
    cardNameWrapper.appendChild(cardName);
    qResult.appendChild(cardDiv);

    refreshEventListeners();
  }

  function createCardPool() {
    const querySearch = document.getElementById("query-search");

    if (querySearch.value === "") {
      return;
    }

    if (killFlag === true) {
      const x = qResult.childElementCount;
      for (let i = 0; i !== x; i++) {
        qResult.removeChild(qResult.lastChild);
      }
      qResult.scrollTop = 0;
    }

    switch (queryDataType) {
      case "character.name":
        queryData = queryDataBase.characters;
        hasNextPage = queryDataBase.pageInfo.hasNextPage;
        queryData.forEach((character) => {
          const id = character.id;
          const name = character.name.full;
          const image = character.image.medium;
          createCard(id, name, image);
        });
        break;
      case "character.origin":
        queryData = queryDataBase.media[0].characters.nodes;
        hasNextPage = queryDataBase.media[0].characters.pageInfo.hasNextPage;
        queryData.forEach((character) => {
          const id = character.id;
          const name = character.name.full;
          const image = character.image.medium;
          createCard(id, name, image);
        });
        break;
      case "character.favorites":
        queryData = queryDataBase.users[0].favourites.characters.nodes;
        hasNextPage =
          queryDataBase.users[0].favourites.characters.pageInfo.hasNextPage;
        queryData.forEach((character) => {
          const id = character.id;
          const name = character.name.full;
          const image = character.image.medium;
          createCard(id, name, image);
        });
        break;
      case "anime.name":
        queryData = queryDataBase.media;
        hasNextPage = queryDataBase.pageInfo.hasNextPage;
        queryData.forEach((media) => {
          const id = media.id;
          const name = media.title.romaji;
          const image = media.coverImage.medium;
          createCard(id, name, image);
        });
        break;
      case "anime.studios":
        queryData = queryDataBase.studios[0].media.nodes;
        hasNextPage = queryDataBase.studios[0].media.pageInfo.hasNextPage;
        queryData.forEach((media) => {
          const id = media.id;
          const name = media.title.romaji;
          const image = media.coverImage.medium;
          createCard(id, name, image);
        });
        break;
      case "anime.favorites":
        queryData = queryDataBase.users[0].favourites.anime.nodes;
        hasNextPage =
          queryDataBase.users[0].favourites.anime.pageInfo.hasNextPage;
        queryData.forEach((media) => {
          const id = media.id;
          const name = media.title.romaji;
          const image = media.coverImage.medium;
          createCard(id, name, image);
        });
        break;
      case "anime.list":
        // filter out custom lists
        completedLists = base.Completed.lists.filter(
          (list) => !list.isCustomList
        );
        repeatingLists = base.Repeating.lists.filter(
          (list) => !list.isCustomList
        );
        pausedLists = base.Paused.lists.filter((list) => !list.isCustomList);
        // recreate complete list if split
        if (completedLists[0].isSplitCompletedList) {
          let tempList = [];
          completedLists.forEach((list) => {
            tempList = tempList.concat(list.entries);
          });
          queryData = tempList;
        } else {
          queryData = completedLists[0].entries;
        }
        // check if returned arrays are empty and combine them
        if (Object.keys(repeatingLists).length != 0) {
          queryData = queryData.concat(repeatingLists[0].entries);
        }
        if (Object.keys(pausedLists).length != 0) {
          queryData = queryData.concat(pausedLists[0].entries);
        }
        // sort array alphabetically
        queryData.sort((a, b) => {
          const nameA = a.media.title.romaji.toUpperCase();
          const nameB = b.media.title.romaji.toUpperCase();
          if (nameA < nameB) {
            return -1;
          }
          if (nameA > nameB) {
            return 1;
          }
          return 0;
        });
        // create cards
        queryData.forEach((entry) => {
          const id = entry.media.id;
          const name = entry.media.title.romaji;
          const image = entry.media.coverImage.medium;
          createCard(id, name, image);
        });
        break;
      case "manga.name":
        queryData = queryDataBase.media;
        hasNextPage = queryDataBase.pageInfo.hasNextPage;
        queryData.forEach((media) => {
          const id = media.id;
          const name = media.title.romaji;
          const image = media.coverImage.medium;
          createCard(id, name, image);
        });
        break;
      case "manga.favorites":
        queryData = queryDataBase.users[0].favourites.manga.nodes;
        hasNextPage =
          queryDataBase.users[0].favourites.manga.pageInfo.hasNextPage;
        queryData.forEach((media) => {
          const id = media.id;
          const name = media.title.romaji;
          const image = media.coverImage.medium;
          createCard(id, name, image);
        });
        break;
      case "manga.list":
        // filter out custom lists
        completedLists = base.Completed.lists.filter(
          (list) => !list.isCustomList
        );
        repeatingLists = base.Repeating.lists.filter(
          (list) => !list.isCustomList
        );
        pausedLists = base.Paused.lists.filter((list) => !list.isCustomList);
        currentLists = base.Current.lists.filter((list) => !list.isCustomList);
        // recreate complete list if split
        if (completedLists[0].isSplitCompletedList) {
          let tempList = [];
          completedLists.forEach((list) => {
            tempList = tempList.concat(list.entries);
          });
          queryData = tempList;
        } else {
          queryData = completedLists[0].entries;
        }
        // check if returned arrays are empty and combine them
        if (Object.keys(repeatingLists).length != 0) {
          queryData = queryData.concat(repeatingLists[0].entries);
        }
        if (Object.keys(pausedLists).length != 0) {
          queryData = queryData.concat(pausedLists[0].entries);
        }
        if (Object.keys(currentLists).length != 0) {
          queryData = queryData.concat(currentLists[0].entries);
        }
        // sort array alphabetically
        queryData.sort((a, b) => {
          const nameA = a.media.title.romaji.toUpperCase();
          const nameB = b.media.title.romaji.toUpperCase();
          if (nameA < nameB) {
            return -1;
          }
          if (nameA > nameB) {
            return 1;
          }
          return 0;
        });
        // create cards
        queryData.forEach((entry) => {
          const id = entry.media.id;
          const name = entry.media.title.romaji;
          const image = entry.media.coverImage.medium;
          createCard(id, name, image);
        });
        break;
      case "staff.name":
        queryData = queryDataBase.staff;
        hasNextPage = queryDataBase.pageInfo.hasNextPage;
        queryData.forEach((staff) => {
          const id = staff.id;
          const name = staff.name.full;
          const image = staff.image.medium;
          createCard(id, name, image);
        });
        break;
      case "staff.favorites":
        queryData = queryDataBase.users[0].favourites.staff.nodes;
        hasNextPage =
          queryDataBase.users[0].favourites.staff.pageInfo.hasNextPage;
        queryData.forEach((staff) => {
          const id = staff.id;
          const name = staff.name.full;
          const image = staff.image.medium;
          createCard(id, name, image);
        });
        break;
      case "user.name":
        queryData = queryDataBase.users;
        hasNextPage = queryDataBase.pageInfo.hasNextPage;
        queryData.forEach((user) => {
          const id = user.id;
          const name = user.name;
          const image = user.avatar.medium;
          createCard(id, name, image);
        });
        break;
    }
    if (hasNextPage === true) {
      queryPage++;
      killFlag = false;
      handleQuery();
    } else if (querySwitch === true) {
      queryPage = 1;
      killFlag = false;
      handleQuery();
    } else {
      queryPage = 1;
      killFlag = true;
    }
  }

  createCardPool();
}

function handleError(error) {
  alert("Error, check console");
  console.error(error);
}
