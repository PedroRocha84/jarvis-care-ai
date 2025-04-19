import { renderProfile } from '../views/profile-view.js';

export function init() {
    renderProfile();
    setupProfileListeners();
}

function setupProfileListeners() {
    // Edit Information button
    const editBtn = document.querySelector('.profile-main .btn-outline');
    if (editBtn) {
        editBtn.addEventListener('click', () => {
            alert('Edit functionality would go here');
        });
    }
    
    // Add Contact button
    const addContactBtn = document.querySelector('.card:nth-child(2) .btn-outline');
    if (addContactBtn) {
        addContactBtn.addEventListener('click', () => {
            alert('Add contact functionality would go here');
        });
    }
}