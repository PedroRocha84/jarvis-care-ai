import { render } from '../views/home-view.js';
import { createFooter } from '../footer.js';

export function init() {
    render();
    createFooter();
}