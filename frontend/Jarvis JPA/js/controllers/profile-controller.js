import { renderProfile } from '../views/profile-view.js';

export function init() {
    // Check authentication
    if (!window.authState.isAuthenticated) {
        window.history.pushState({}, '', '/signin');
        window.dispatchEvent(new PopStateEvent('popstate'));
        return;
    }
    
    renderProfile();
    setupProfileListeners();
}

function setupProfileListeners() {
    // Edit Profile button
    const editBtn = document.querySelector('.btn-edit');
    if (editBtn) {
        editBtn.addEventListener('click', () => {
            alert('Edit profile functionality would go here');
        });
    }
    
    // Profile menu items
    document.querySelectorAll('.profile-menu a').forEach(link => {
        link.addEventListener('click', (e) => {
            e.preventDefault();
            alert(`Would navigate to ${e.target.getAttribute('href')}`);
        });
    });
}