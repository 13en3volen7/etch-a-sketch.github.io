function createSquareTemplate(fromDiv, size = 16) {
    const squareDiv = document.createElement("div");
    const squareSize = fromDiv.clientWidth / size;
    squareDiv.style.width = `${squareSize}px`;
    squareDiv.style.height = `${squareSize}px`;
    return squareDiv;
}

function makeGrid(size = 16) {
    const containerDiv = document.querySelector("#container");
    const squareDiv = createSquareTemplate(containerDiv, size);
    for (let row = 1; row <= size; row++) {
        for (let column = 1; column <= size; column++) {
            const squareDivClone = squareDiv.cloneNode();
            squareDivClone.classList.add("square", `r${row}`, `c${column}`);
            containerDiv.appendChild(squareDivClone);
        }
    }
}


makeGrid(100);