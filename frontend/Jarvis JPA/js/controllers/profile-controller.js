import { renderProfile, renderSettings } from '../views/profile-view.js';
import { createFooter } from '../footer.js';

export function init() {
    const temp = document.getElementById('main-content');
    temp.innerHTML = '';
    if (!window.authState.isAuthenticated) {
        window.history.pushState({}, '', '/signin');
        window.dispatchEvent(new PopStateEvent('popstate'));
        return;
    }
    
    const path = window.location.pathname;
    
    if (path === '/profile') {
        renderProfile();
        setupProfileListeners();
    } else if (path === '/profile/settings') {
        renderSettings();
        
    }
        createFooter();
}

function setupProfileListeners() {
    const editBtn = document.querySelector('.btn-edit');
    if (editBtn) {
        editBtn.addEventListener('click', () => {
            alert('Edit profile functionality would go here');
        });
    }
    
    document.querySelectorAll('.profile-menu a').forEach(link => {
        link.addEventListener('click', (e) => {
            e.preventDefault();
            const path = e.target.getAttribute('href');
            window.history.pushState({}, '', path);
            window.dispatchEvent(new PopStateEvent('popstate'));
        });
    });
}

function setupSettingsListeners() {
    // Password change
    document.getElementById('change-password-btn')?.addEventListener('click', () => {
        alert('Password change modal would open here');
    });
    
    // 2FA toggle
    document.getElementById('2fa-toggle')?.addEventListener('change', (e) => {
        console.log('2FA set to:', e.target.checked);
        // API call would go here
    });
    
    // Notification toggles
    document.getElementById('email-notifications')?.addEventListener('change', (e) => {
        console.log('Email notifications:', e.target.checked);
    });
    
    document.getElementById('appointment-alerts')?.addEventListener('change', (e) => {
        console.log('Appointment alerts:', e.target.checked);
    });
    
    // Account deletion
    document.getElementById('delete-account-btn')?.addEventListener('click', () => {
        if (confirm('Are you sure? This will permanently delete all your data.')) {
            alert('Account deletion would be processed here');
            // In real implementation:
            // deleteAccount();
        }
    });
}