const mainContent = document.getElementById("content");
const saveName = document.getElementById("saveName");
const fileSelection = document.getElementById("fileSelection");
const loadButton = document.getElementById("loadButton");
const deleteButton = document.getElementById("deleteButton");
const exportButton = document.getElementById("exportButton");
const fileImport = document.getElementById("fileImport");

function toggleButtons(boolean) {
  fileSelection.disabled = boolean;
  loadButton.disabled = boolean;
  deleteButton.disabled = boolean;
  exportButton.disabled = boolean;
}

function createFile(name) {
  const file = document.createElement("OPTION");
  file.setAttribute("value", name);
  file.setAttribute("id", name);
  file.innerHTML = name;
  fileSelection.appendChild(file);
}

function saveFile() {
  const name = saveName.value;

  if (name !== "") {
    const file = document.getElementById("tierlist");
    createFile(name);
    toggleButtons(false);
    localStorage.setItem(name, JSON.stringify(file.outerHTML));
  } else {
    alert("Please name your tierlist");
  }
}

function loadFile() {
  const tierList = document.getElementById("tierlist");
  const name = fileSelection.value;
  const file = JSON.parse(localStorage.getItem(name));
  tierList.outerHTML = file;
  refreshEventListeners();
}

function deleteFile() {
  const name = fileSelection.value;
  const file = document.getElementById(`${name}`);
  fileSelection.removeChild(file);
  localStorage.removeItem(name);

  if (fileSelection.hasChildNodes() !== true) {
    toggleButtons(true);
  }
}

function getFiles() {
  const files = localStorage;

  if (files.length !== 0) {
    Object.keys(files).forEach((name) => {
      createFile(name);
    });

    toggleButtons(false);
  }
}

function exportFile() {
  const name = fileSelection.value;
  const file = new Blob([localStorage.getItem(name)], {
    type: "application/json",
  });
  let exportFile = window.URL.createObjectURL(file);

  const link = document.createElement("A");
  link.setAttribute("download", `${name}.tl`);
  link.href = exportFile;
  document.body.appendChild(link);

  window.requestAnimationFrame(() => {
    const event = new MouseEvent("click");
    link.dispatchEvent(event);
    document.body.removeChild(link);
  });
}

function importFile(e) {
  const fileList = e.target.files;
  const importFile = fileList[0];
  const name = importFile.name.slice(0, -3);
  let file;

  const reader = new FileReader();
  reader.addEventListener(
    "load",
    () => {
      file = reader.result;
      localStorage.setItem(name, file);
      getFiles();
    },
    false
  );
  reader.readAsText(importFile);
}

function initializeImport() {
  fileImport.addEventListener("change", importFile);
}
