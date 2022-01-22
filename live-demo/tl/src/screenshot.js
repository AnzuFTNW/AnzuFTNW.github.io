// Define the function
// to screenshot the div
function doScreenShot() {
  const tierlist = document.getElementById("tierlist");
  const outputWindow = document.getElementById("output");

  html2canvas(tierlist, { allowTaint: true, backgroundColor: null }).then(
    function (canvas) {
      outputWindow.appendChild(canvas);
      outputWindow.style.display = "flex";
    }
  );
}

function closeWindow() {
  const outputWindow = document.getElementById("output");
  outputWindow.style.display = "none";
  outputWindow.removeChild(outputWindow.lastChild);
}

function saveScreenshot() {
  const tempLink = document.createElement("A");
  const screenShot = document.querySelector("canvas");

  tempLink.setAttribute("download", "tierlist.png");
  tempLink.setAttribute(
    "href",
    screenShot.toDataURL("image/png").replace("image/png", "image/octet-stream")
  );
  tempLink.click();
}
