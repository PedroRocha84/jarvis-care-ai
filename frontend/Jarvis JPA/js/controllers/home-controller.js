import { render } from '../views/home-view.js';
import router from '../router.js';

export function init() {
    render();
    setupNavigationListeners();
}

function setupNavigationListeners() {
    document.getElementById('signin-btn')?.addEventListener('click', () => {
        router.navigate('/signin');
    });
    
    document.getElementById('register-btn')?.addEventListener('click', () => {
        router.navigate('/register');
    });
    

   // falta caminho para o profile...





}