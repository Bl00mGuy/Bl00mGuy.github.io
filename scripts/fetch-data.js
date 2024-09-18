document.addEventListener('DOMContentLoaded', () => {
    const todoContainer = document.getElementById('todo-container');
    const preloader = document.getElementById('todo-preloader');

    preloader.style.display = 'block';

    fetch('https://jsonplaceholder.typicode.com/todos?_limit=10')
        .then(response => {
            if (!response.ok) {
                throw new Error('Network response was not ok');
            }
            return response.json();
        })
        .then(data => {
            preloader.style.display = 'none';

            todoContainer.innerHTML = data.map(todo => `
                <div class="todo-item">
                    <h3>${todo.title}</h3>
                    <p>${todo.completed ? 'Completed' : 'Pending'}</p>
                </div>
            `).join('');
        })
        .catch(error => {
            preloader.style.display = 'none';
            todoContainer.innerHTML = `<p>⚠ Что-то пошло не так: ${error.message}</p>`;
        });
});
