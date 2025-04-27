import router from './router.js';

addEventListener('DOMContentLoaded', () => {
    init();
    router.start();
});

function init() {
    const app = document.getElementById('app');
    
    const main = document.createElement('main');
    main.id = 'main-content';

    app.appendChild(main);
}


