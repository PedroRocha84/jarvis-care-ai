import router from './router.js';

const authState = {
    isAuthenticated: false,
    user: null
};

window.authState = authState;

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
    
    nav.innerHTML = authState.isAuthenticated ? `
        <a href="/profile">My Profile</a>
        <a href="/dashboard">My Schedule</a>
        <a href="/logout">Logout</a>
    ` : `
        <a href="/">Home</a>
        <a href="/signin">Sign In</a>
        <a href="/register">Register</a>
    `;

    header.appendChild(pageTitle);
    header.appendChild(nav);
    
    nav.querySelectorAll('a').forEach(link => {
        if (link.pathname === window.location.pathname) {
            link.classList.add('active');
        }
    });

    return header;
}