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
    const wrapper = createWrapper();
    
    app.appendChild(header);
    app.appendChild(wrapper);
}

function createHeader() {
    const header = document.createElement('header');

    const pageTitle = document.createElement('h1');
    pageTitle.textContent = 'CARE AI';

    const main = document.createElement('main');
    main.id = 'main-content';

   
    header.appendChild(pageTitle);
    header.appendChild(main);

    return header;
}

function createWrapper(){
    
    const wrapper = document.createElement('div');
    wrapper.classList.add("footer")

    const nav = document.createElement('nav');
    nav.classList.add('navbar');

    wrapper.appendChild(nav);


    nav.innerHTML = authState.isAuthenticated ? `
        <a href="/profile">My Profile</a>
        <a href="/dashboard">My Schedule</a>
        <a href="/assistant">Care Assistant</a>
        <a href="/logout">Logout</a>
    ` : `
        <a href="/">Home</a>
        <a href="/signin">Sign In</a>

        <a href="/register">Register</a>
        <a href="/assistant">Care Assistant</a>
    `;
    
    nav.querySelectorAll('a').forEach(link => {
        if (link.pathname === window.location.pathname) {
            link.classList.add('active');
        }
    });
  

    return wrapper;
}