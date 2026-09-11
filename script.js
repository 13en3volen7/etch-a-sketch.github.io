function makeSquare(fromDiv, size = 16) {
    const squareDiv = document.createElement("div");
    const squareSize = fromDiv.clientWidth / size;
    squareDiv.style.width = `${squareSize}px`;
    squareDiv.style.height = `${squareSize}px`;
    squareDiv.classList.add("square");
    fromDiv.appendChild(squareDiv);
}

function makeGridRow(fromDiv, rowID, size = 16) {
    const gridRowDiv = document.createElement("div");
    gridRowDiv.classList.add("grid-row", `id${rowID}`);
    fromDiv.appendChild(gridRowDiv);
    for (let column = 1; column <= size; column++) {
        makeSquare(gridRowDiv, size);
    }
}

function makeGrid(size = 16) {
    const containerDiv = document.querySelector("#container");
    for (let row = 1; row <= size; row++) {
        makeGridRow(containerDiv, row, size);
    }
}

makeGrid(100);