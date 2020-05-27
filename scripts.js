const sumbit = document.getElementById('submit-button');

sumbit.addEventListener('click', () => {
    const input = document.getElementById('input-user');
    const itemValue = input.value;
    addTask(itemValue);
});

const addTask = (itemValue) => {
    const ul = document.querySelector('ul');
    const li = document.createElement('li');
    li.innerHTML = `<li><span id="items">${itemValue}</span></li>`;
    ul.appendChild(li);
};

const deleted = document.getElementById('items');

