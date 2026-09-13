function initialize(gridSize = 16) {
    const containerDiv = document.querySelector("#container");

    function createSquareTemplate() {
        const squareDiv = document.createElement("div");
        const squareSize = containerDiv.clientWidth / gridSize;
        squareDiv.style.width = `${squareSize}px`;
        squareDiv.style.height = `${squareSize}px`;
        return squareDiv;
    }

    function makeGrid() {
        const squareDiv = createSquareTemplate();
        for (let row = 1; row <= gridSize; row++) {
            for (let column = 1; column <= gridSize; column++) {
                const squareDivClone = squareDiv.cloneNode();
                squareDivClone.classList.add("square", `r${row}`, `c${column}`);
                containerDiv.appendChild(squareDivClone);
            }
        }
    }

    makeGrid();
}

initialize(100);