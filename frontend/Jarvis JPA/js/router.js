import routes from './routes.js';

function start() {
    const path = window.location.pathname;
    navigate(path, true);
    setAnchorEventListener();
    addEventListener('popstate', handlePopState);
}

function navigate(path, shouldReplace = false, shouldPush = true) {
    const routeKey = Object.keys(routes).find(key => routes[key].path === path);
    const route = routeKey ? routes[routeKey] : routes.home;

    setCurrentRoute(route);

    if (shouldPush) {
        shouldReplace
            ? history.replaceState(route, '', route.path)
            : history.pushState(route, '', route.path);
    }

    initializeController(route.controller);
}

function setCurrentRoute(route) {
    routes.currentPath.path = route.path;
    routes.currentPath.controller = route.controller;
}

async function initializeController(controllerName) {
    console.log(controllerName);
    try {
        const controllerModule = await import(`./controllers/${controllerName}.js`);
        if (typeof controllerModule.init === 'function') {
            controllerModule.init();
        } else {
            throw new Error(`Controller ${controllerName} missing init function`);
        }
    } catch (error) {
        console.error('Controller initialization failed:', error);
        // Fallback to home
        import('./controllers/home-controller.js').then(m => m.init());
    }
}

function setAnchorEventListener() {
    document.addEventListener('click', (event) => {
        if (event.target.tagName === 'A' && event.target.getAttribute('href').startsWith('/')) {
            event.preventDefault();
            navigate(event.target.getAttribute('href'));
        }
    });
}

function handlePopState(event) {
    const path = event.state?.path || window.location.pathname;
    navigate(path, false, false); // Don't pushState again during back/forward
}
export default { start };