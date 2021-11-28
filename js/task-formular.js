const userInput = document.querySelector('.input-task');
const priority = document.querySelector('.inputs select');
const btAdd = document.querySelector('.input-btn');
const appendTask = (id, element) =>
    document.querySelector(`#${id} ul`).appendChild(element);


btAdd.onclick = () => {
    const li = document.createElement('li');
    const label = document.createElement('label');
    const checkBox = document.createElement('input');
    const btClose = document.createElement('button');
    const iconDelete = document.createElement('span');

    checkBox.setAttribute('type', 'checkbox');
    btClose.setAttribute('class', "btn-delete")
    iconDelete.setAttribute('class', 'fi fi-rr-cross-circle')

    label.innerText = userInput.value;

    btClose.appendChild(iconDelete);
    label.appendChild(checkBox);
    li.appendChild(label);
    li.appendChild(btClose);

    if (userInput.value == '')
        userInput.placeholder = 'You must enter a value';
    else {
        appendTask(priority.value, li);
        priority.value = 'p3';
        userInput.value = '';
        userInput.placeholder = 'Write your task here..'
    }

    btClose.onclick = () => {
        li.remove();
    };

    checkBox.addEventListener('change', (event) =>{
        if (checkBox.checked) {
            label.style.textDecorationLine = 'line-through';
            label.style.color = 'var(--gray)'
            label.style.fontStyle = 'italic'
            label.style.fontFamilly = 'var(--font-text-alt)'
            label.style.fontWeight = '100'

        }
        else {
            label.style.textDecorationLine = 'none';
            label.style.color = 'var(--light)';
            label.style.fontStyle = 'normal';
        };
    });
};
