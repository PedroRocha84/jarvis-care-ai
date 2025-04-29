import { render } from '../views/home-view.js';


export function init() {
    const temp = document.getElementById('main-content');
    temp.innerHTML = '';

    render();

}