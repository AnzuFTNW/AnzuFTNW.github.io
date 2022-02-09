// build page layout
const app = document.getElementById("app");
const queryNav = createContainer("query-nav", "nav");
app.appendChild(queryNav);

/* query stuff */
const queryTypes = ["character", "animanga", "staff", "user"];
const queryModes = {
  character: ["name", "origin", /*"season",*/ "user"],
  animanga: ["name", /*"season",*/ "studio", "user" /*, "list"*/],
  staff: ["name", "user"],
  user: ["name" /*, "following", "followers"*/],
};

// build query nav
function buildQueryNav() {
  // create the different items
  const queryType = createDropdownMenu("query-type", queryTypes);
  const queryMode = createDropdownMenu("query-mode", getQueryModes(queryType));
  const querySearch = createInput("query-search", "search");
  const querySubmit = createButton("query-submit", "Search");
  queryNav.appendChild(queryType);
  queryNav.appendChild(queryMode);
  queryNav.appendChild(querySearch);
  queryNav.appendChild(querySubmit);
  searchQuery(queryType.value, queryMode.value);
  // check for type switch
  queryType.onchange = (ev) => {
    queryMode.innerHTML = "";
    const mode = getQueryModes(ev.target);
    // update dropdown
    createDropdownMenu("query-mode", mode);
    // update search placeholder
    searchQuery(ev.target.value, queryMode.value);
  };
  // check for mode switch
  queryMode.onchange = (ev) => {
    // update search placeholder
    searchQuery(queryType.value, ev.target.value);
  };
  querySubmit.addEventListener("click", handleQuery);
  querySearch.addEventListener("keypress", function (e) {
    if (e.key === "Enter") {
      handleQuery();
    }
  });
  // get current mode
  function getQueryModes(menu) {
    const type = menu[menu.selectedIndex].id;
    return queryModes[type];
  }
}

buildQueryNav();
