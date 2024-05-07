function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}

const input = document.querySelector('#controls input');
const createButton = document.querySelector('[data-create]');
const destroyButton = document.querySelector('[data-destroy]');
const boxesContainer = document.getElementById('boxes');

createButton.addEventListener('click', () => {
    const amount = parseInt(input.value);
    if (amount >= 1 && amount <= 100) {
        createBoxes(amount);
        input.value = '';
    } else {
        alert('Please enter a number between 1 and 100.');
    }
});

destroyButton.addEventListener('click', destroyBoxes);

function createBoxes(amount) {
    const fragment = document.createDocumentFragment(); // Створюємо фрагмент DOM

    for (let i = 0; i < amount; i++) {
        const box = document.createElement('div');
        box.classList.add('box');
        box.style.backgroundColor = getRandomHexColor();
        box.style.width = `${30 + i * 10}px`;
        box.style.height = `${30 + i * 10}px`;
        fragment.appendChild(box); // Додаємо елемент до фрагменту
    }

    boxesContainer.appendChild(fragment); // Додаємо фрагмент до основного контейнера
}

function destroyBoxes() {
    boxesContainer.innerHTML = '';
}