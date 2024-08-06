//Create 16x16 default grid
let body = document.querySelector("body");


function makeGrid(gridSize) {
    let grid = document.createElement("div");
    grid.classList.add("grid");
    grid.setAttribute("id", "grid");
    body.appendChild(grid);
    for(let i = 0; i < gridSize; i++) {
        let row = document.createElement("div");
        row.classList.add("row");
        for(let j = 0; j < gridSize; j++) {
            let square = document.createElement("div");
            square.classList.add("square");
            row.appendChild(square);
        }
        grid.appendChild(row);
    }
    
    let squares = document.querySelectorAll(".square");
    
    squares.forEach((square) => {
        square.addEventListener("mouseenter", (event) => {
            event.target.style["background-color"] = "red";
        });
    });
}

//start off with default 16x16 grid
makeGrid(16);

let changeBtn = document.querySelector("button");

changeBtn.addEventListener("click", function() {
    let gridSize = prompt("Enter size you wish grid to be (E.g. enter 100 for up to 100x100):");
    body.removeChild(grid);

    makeGrid(gridSize);
});

let clearBtn = document.querySelector("#clear");

clearBtn.addEventListener("click", function() {
    let squares = document.querySelectorAll(".square");
    
    squares.forEach((square) => {
        square.style["background-color"] = "white";
    });
});

let resetBtn = document.querySelector("#reset");

resetBtn.addEventListener("click", function() {
    body.removeChild(grid);
    makeGrid(16);
});