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

/*
* Color in cell when mouse hold down and over cell
*/

// Detect mouse down and mouse up activity in square 
let mousedown = false;

document.onmousedown = (e) => {
    mousedown = true;
    draw(e);
}
document.onmouseup = () => (mousedown = false);
square.onmouseover = (e) => mousedown && draw(e);

function draw(e){
    // color
    if(e.target.className === 'cell' && eraser === false)
        e.target.classList.add('active');
    // erase
    if(e.target.className === 'cell active' && eraser === true)
        e.target.classList.remove('active');
}

// erase and clear buttons
const erase = document.querySelector('.erase');
const clear = document.querySelector('.clear');
let eraser = false;

// remove .active class from only cells targeted cells
erase.addEventListener('click', () => {
    eraser = !eraser;
    console.log(eraser);
});

// remove .active class from all cells
clear.addEventListener('click', () => {
    const cells = document.querySelectorAll('.cell');
    cells.forEach(cell => cell.classList.remove('active'));
});

// test grid
makeGrid(16);
