// Create a square window for where the cells will be create in
const container = document.querySelector('.container');
const square = document.createElement('div');
square.classList.add("square");
container.appendChild(square);


/**
 * Draws a grid
 * @param {number} size the size of grid to be drawn
*/
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

square.onmousedown = (e) => {
    mousedown = true;
    draw(e);
}
square.onmouseup = () => (mousedown = false);
square.onmouseover = (e) => mousedown && draw(e);

/**
 * Colors in cell when mouse click down, stops drawing on mouse click up
 * @param {object} e the element object that is to be drawn on
 */
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
const colors =  ['rgb(0,200,255)', ''];
let index = 0;

erase.addEventListener('click', () => {
    eraser = !eraser;
    erase.style.backgroundColor = colors[index];

    index = index >= colors.length - 1 ? 0 : index + 1;
});

// remove .active class from all cells
clear.addEventListener('click', () => {
    const cells = document.querySelectorAll('.cell');
    cells.forEach(cell => cell.classList.remove('active'));
});

// Range slider
const slider = document.getElementById("gridSlider");
const sliderValue = document.querySelector('.sliderValue');

slider.oninput = () => {
    sliderValue.innerHTML = "Size: " + slider.value;
    deleteGrid();
    makeGrid(slider.value);
}

// Display value of slider
sliderValue.innerHTML = "Size: " + slider.value;

// Draw the grid
makeGrid(16);

function deleteGrid(){
    const rows = document.querySelectorAll('.row');
    rows.forEach(row => row.remove());
}