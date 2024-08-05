//Create 16x16 default grid
let body = document.querySelector("body");

let grid = document.createElement("div");
grid.classList.add("grid");
body.appendChild(grid);

for(let i = 0; i < 16; i++) {
    let row = document.createElement("div");
    row.classList.add("row");
    for(let j = 0; j < 16; j++) {
        let square = document.createElement("div");
        square.classList.add("square");
        square.setAttribute("id", "square");
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