import router from './router.js';

addEventListener('DOMContentLoaded', () => {
    init();
    router.start();
});

function init() {
    const app = document.getElementById('app');

    const header = createHeader();
    const main = document.createElement('main');
    main.id = 'main-content';

    app.appendChild(header);
    app.appendChild(main);
}

function createHeader() {
    const header = document.createElement('header');

    const pageTitle = document.createElement('h1');
    pageTitle.textContent = 'CARE AI';

    const nav = document.createElement('nav');
    nav.classList.add('navbar');
    nav.innerHTML = `
        <a href="/">Home</a>
        <a href="/signin">Sign In</a>
        <a href="/register">Register</a>
        <a href="/profile">Profile</a>
    `;

    header.appendChild(pageTitle);
    header.appendChild(nav);

    return header;
}