const container = document.getElementById('container');
const gridSize = 16;
const cellSize = gridSize * gridSize;

for (let i = 0; i < cellSize; i++) {
    const gridItem = document.createElement('div');
    gridItem.classList.add('gridItem');
    gridItem.classList.add('square');
    container.appendChild(gridItem);
};

const square = document.querySelectorAll('.square');


square.forEach((square) => {
    square.addEventListener('mouseover', () => {
        square.style.backgroundColor = 'red','green','blue';
    });
});
