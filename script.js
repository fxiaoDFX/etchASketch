// Create a square window for where the cells will be create in
const container = document.querySelector('.container');
const square = document.createElement('div');
square.classList.add("square");
container.appendChild(square);

// Create cells
// Make a div to hold div cells
function makeGrid(size){
    for(let i = 0; i < size; i++){
        // Make rows
        const row = document.createElement('div');
        row.classList.add('row');
        square.appendChild(row);
        // Fill in rows with cells
        for(let i = 0; i < size; i++){
            const cell = document.createElement('div');
            cell.classList.add('cell');
            row.appendChild(cell);
        }
    }
}

makeGrid(16);