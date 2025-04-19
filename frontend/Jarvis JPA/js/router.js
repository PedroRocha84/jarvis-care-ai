import routes from './routes.js';

function start() {
    const path = window.location.pathname;
    navigate(path, true);
    setAnchorEventListener();
    addEventListener('popstate', handlePopState);
}

function navigate(path, firstLoad) {
    if (path === routes.currentPath.path) {
        return;
    }

    const routeKey = Object.keys(routes).find(key => routes[key].path === path);
    const route = routes[routeKey] || routes.home;

    setCurrentRoute(route);

    firstLoad
        ? history.replaceState(route, '', route.path)
        : history.pushState(route, '', route.path);

    initializeController(route.controller);
}

function setCurrentRoute(route) {
    routes.currentPath.path = route.path;
    routes.currentPath.controller = route.controller;
}

async function initializeController(controller) {
    try {
        const controllerModule = await import(`./controllers/${controller}.js`);
        controllerModule.init();
    } catch (error) {
        console.log(error);
    }
}

function setAnchorEventListener() {
    const anchors = document.querySelectorAll('nav a');
    anchors.forEach(anchor => {
        anchor.addEventListener('click', event => {
            event.preventDefault();
            navigate(anchor.pathname);
        });
    });
}

function handlePopState(data) {
    const { state } = data;
    const route = state || routes.home;
    setCurrentRoute(route);
    initializeController(route.controller);
}

export default { start };