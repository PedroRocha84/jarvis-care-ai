export function createFooter(){

    const main = document.getElementById('main-content');

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