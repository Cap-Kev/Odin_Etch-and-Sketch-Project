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
        square.style.backgroundColor = 'red';
    });
});

const button = document.querySelector('#btn');

button.addEventListener('click', () => {
    let message = prompt('How many Grid Squares do you want?');
    let num = parseInt(message);

    if(isNaN(num)) {
        alert('Invalid input.Please input numbers');
    }
    else if(num < 1 || num > 100) {
        alert('Please input numbers between 1 and 100');
    }
    else {
        alert(num);
    }

    container.textContent = '';
    let newSquares = num * num;

    for(let i = 0; i < newSquares; i++) {
        const gridItem = document.createElement('div');
        gridItem.classList.add('gridItem','square');
        container.appendChild(gridItem);
        let sizeItem = container.clientWidth / num;
        gridItem.style.width = `${sizeItem}px`;
        gridItem.style.height = `${sizeItem}px`;
    }

    const newSquaresElements = document.querySelectorAll('.square');
    newSquaresElements.forEach((square) => {
        square.addEventListener('mouseover', () => {
            square.style.backgroundColor = 'red';
        });

    });

});