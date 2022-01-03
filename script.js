const container = document.querySelector(".container");
var color = "black";

function createGrid(gridNumber) {
  let gridArea = gridNumber * gridNumber;
  for (let i = 1; i <= gridArea; i++) {
    let gridItem = document.createElement("div");
    container.style.gridTemplateColumns = `repeat(${gridNumber}, 1fr)`;
    container.style.gridTemplateRows = `repeat(${gridNumber}, 1fr)`;
    container.insertAdjacentElement("beforeend", gridItem);
  }
  var cells = container.querySelectorAll("div");
  cells.forEach((cell) => cell.addEventListener("mouseenter", colorGrid));
}

function colorGrid() {
  switch (color) {
    case "black":
      this.style.backgroundColor = "#000000";
      break;
  }
}

function reset(){
  
}

createGrid(30);
