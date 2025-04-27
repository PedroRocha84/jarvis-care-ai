import router from './router.js';

addEventListener('DOMContentLoaded', () => {
    init();
    router.start();
});

function init() {
    const app = document.getElementById('app');
    const wrapper = createWrapper();
    
    app.appendChild(wrapper);
}

function createWrapper(){

    const main = document.createElement('main');
    main.id = 'main-content';
    
    const footer = document.createElement('div');
    footer.classList.add("footer")

    const nav = document.createElement('nav');
    nav.classList.add('navbar');

    const navHome = document.createElement("a");
    navHome.href= "/";
    navHome.textContent = "Home";
    navHome.classList.add('active');
    nav.appendChild(navHome);

    const navSignIn = document.createElement("a");
    navSignIn.href = "/signin";
    navSignIn.textContent = "Sign In";
    navSignIn.classList.add('active');
    nav.appendChild(navSignIn);

    const navRegister = document.createElement("a");
    navRegister.href = "/register";
    navRegister.textContent = "Register";
    navRegister.classList.add('active');
    nav.appendChild(navRegister);
    
    main.appendChild(footer);
    footer.appendChild(nav);

    return main;
}