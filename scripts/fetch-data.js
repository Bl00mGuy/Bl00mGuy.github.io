document.addEventListener('DOMContentLoaded', () => {
    const preloader = document.getElementById('preloader');
    const content = document.getElementById('content');

    let filterId = Math.random() > 0.5 ? 100 : 200;
    const url = `https://jsonplaceholder.typicode.com/comments?id_gte=${filterId}`;

    preloader.style.display = 'block';

    fetch(url)
        .then(response => {
            if (!response.ok) {
                throw new Error('Network error');
            }
            return response.json();
        })
        .then(data => {
            preloader.style.display = 'none';
            content.style.display = 'block';

            renderData(content, data);
        })
        .catch(error => {
            preloader.style.display = 'none';
            content.style.display = 'block';
            content.innerHTML = `<p class="error-message">⚠ Something went wrong: ${error.message}</p>`;
        });
});

function renderData(container, data) {
    const list = document.createElement('ul');
    data.forEach(item => {
        const listItem = document.createElement('li');
        listItem.textContent = `${item.name} (${item.email}): ${item.body}`;
        list.appendChild(listItem);
    });
    container.appendChild(list);
}