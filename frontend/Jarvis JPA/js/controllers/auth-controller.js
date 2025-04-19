import { renderSignIn, renderRegister, handleSignIn, handleRegister } from '../views/auth-view.js';

export function init() {
    const path = window.location.pathname;
    
    if (path === '/signin') {
        renderSignIn();
        setupSignInListeners();
    } else if (path === '/register') {
        renderRegister();
        setupRegisterListeners();
    }
}

function setupSignInListeners() {
    const signInBtn = document.querySelector('.signin-btn');
    if (signInBtn) {
        signInBtn.addEventListener('click', handleSignIn);
    }
}

function setupRegisterListeners() {
    const registerBtn = document.getElementById('register-btn');
    if (registerBtn) {
        registerBtn.addEventListener('click', handleRegister);
    }
}

function setupPasswordValidation() {
    const passwordInput = document.getElementById('password');
    const confirmInput = document.getElementById('confirm-password');
    const matchIndicator = document.getElementById('password-match');
    
    confirmInput?.addEventListener('input', () => {
        if (passwordInput.value === confirmInput.value) {
            matchIndicator.textContent = 'Passwords match!';
            matchIndicator.style.color = 'green';
        } else {
            matchIndicator.textContent = 'Passwords do not match!';
            matchIndicator.style.color = 'red';
        }
    });
}
