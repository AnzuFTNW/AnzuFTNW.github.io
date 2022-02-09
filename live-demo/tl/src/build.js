// create parent
function createContainer(id, type) {
  const html = type.toUpperCase();
  let element = document.createElement(`${html}`);
  element.id = `${id}`;
  return element;
}

// create dropdown menu
function createDropdownMenu(id, array) {
  // create dropdown option
  function createDropdownOption(id, name) {
    const option = document.createElement("OPTION");
    option.id = `${id}`;
    option.innerHTML = `${name}`;
    return option;
  }
  let menu;
  // check if menu already exists
  if (document.getElementById(id) === null) {
    // if not create it
    menu = document.createElement("SELECT");
    menu.id = `${id}`;
  } else {
    // if it does select it instead
    menu = document.getElementById(id);
  }
  // fill it in with options from an array
  array.forEach((item) => {
    const name = capitalizeString(item);
    const option = createDropdownOption(item, name);
    menu.appendChild(option);
  });
  return menu;
}

// create search field
function createInput(id, type) {
  const search = document.createElement("INPUT");
  search.id = `${id}`;
  search.type = `${type}`;
  return search;
}

// create button
function createButton(id, name) {
  const button = document.createElement("BUTTON");
  button.id = `${id}`;
  button.innerHTML = `${name}`;
  return button;
}

// helper functions
function capitalizeString(string) {
  const f = string.charAt(0),
    u = f.toUpperCase(),
    r = string.slice(1);
  return u + r;
}
