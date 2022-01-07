const container = document.querySelector(".container");
const newGridButton = document.querySelector(".newGridButton");

///// #2 - Sets up event listener when Shake button clicked /////
newGridButton.addEventListener("click", resetNew);

///// #1 - Makes 16 x 16 default grid /////
function makeDefaultGrid() {
  for (i = 0; i <= 255; i++) {
    let defaultGrid = document.createElement("div");
    defaultGrid.classList.add("defaultGrid");
    defaultGrid.addEventListener("mousedown", function (event) {
      event.target.style.backgroundColor = "black";
    });
    defaultGrid.addEventListener("mouseover", function (event) {
      if (event.buttons == 1) {
        event.target.style.backgroundColor = "black";
      }
    });
    container.appendChild(defaultGrid);
  }
}

/// #4 - Removes default grid ///////
function removeAllChildNodes(parent) {
  while (parent.firstChild) {
    parent.removeChild(parent.firstChild);
  }
}

///// #6 - Makes a new grid after default grid is removed & user inputs rows /////
function makeNewGrid(rows) {
  for (i = 0; i <= rows * rows - 1; i++) {
    let newGrid = document.createElement("div");
    newGrid.classList.add("newGrid");
    newGrid.addEventListener("mousedown", function (event) {
      event.target.style.backgroundColor = "black";
    });
    newGrid.addEventListener("mouseover", function (event) {
      if (event.buttons == 1) {
        event.target.style.backgroundColor = "black";
      }
    });
    container.appendChild(newGrid);
  }
}

///// #3 - resetNew function /////
function resetNew() {
  console.log("resetNew function triggered");
  ///// #5 - prompt user for how many rows in new grid /////
  let rows = prompt("Choose number of rows ( 5 - 100 ) for new box");
  console.log(rows);

  while (rows < 5 || rows > 100) {
    alert("Rows must be between 5 and 100");
    rows = prompt("Choose number of rows ( 5 - 100 ) for new box");
  }
  if (isNaN(rows) || rows === null) {
    return;
  }

  removeAllChildNodes(container);
  ///// #7 - Reset the container to its original style /////
  container.setAttribute(
    "style",
    `display: grid; grid-template-columns: repeat(${rows}, 1fr);
          grid-template-rows: repeat(${rows}, 1fr); background-color: rgb(245, 245, 245); border: 4px solid rgba(105, 8, 8, 0.878);
          border-radius: 6px;`
  );

  makeNewGrid(rows);
}

makeDefaultGrid();

///// Subproblems /////
// #1 Make 16 x 16 default grid. // ✅
// #2 Make sure eventlistener on shake button is responding. ✅
// #3 Make sure it runs resetNew function. ✅
// #4 Make sure resetNew runs a function to clear default grid (removeAllChildNodes). ✅
// #5 Prompt user for how many rows in new grid. ✅
// #6 Execute makeNewGrid function using rows input. ✅
// #7 Reset the container to its original style. ✅
