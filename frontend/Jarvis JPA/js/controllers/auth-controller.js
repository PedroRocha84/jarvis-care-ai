import { renderSignIn, renderRegister, handleSignIn } from '../views/auth-view.js';

export function init() {
    const path = window.location.pathname;
    
    if (path === '/signin') {
        renderSignIn();
        setupSignInListeners();
    } else if (path === '/register') {
        renderRegister();
        setupRegisterListeners();
    } else if (path === '/logout') {
        handleLogout();
    }
}

function setupSignInListeners() {
    const signInBtn = document.querySelector('.signin-btn');
    if (signInBtn) {
        signInBtn.addEventListener('click', (e) => {
        handleSignIn();
        });
    }
}

function setupRegisterListeners() {
    const registerBtn = document.getElementById('register-btn');
    if (registerBtn) {
        registerBtn.addEventListener('click', (e) => {
            e.preventDefault();
            if (validateRegistrationForm()) {
                // Simulate successful registration
                alert('Registration successful! Redirecting to sign in...');
                window.history.pushState({}, '', '/signin');
                window.dispatchEvent(new PopStateEvent('popstate'));
            }
        });
    }
    setupPasswordValidation();
}

function validateRegistrationForm() {
    const password = document.getElementById('password')?.value;
    const confirmPassword = document.getElementById('confirm-password')?.value;
    
    if (password && confirmPassword && password !== confirmPassword) {
        alert('Passwords do not match!');
        return false;
    }
    return true;
}

function setupPasswordValidation() {
    const passwordInput = document.getElementById('password');
    const confirmInput = document.getElementById('confirm-password');
    const matchIndicator = document.getElementById('password-match');
    
    if (confirmInput && matchIndicator) {
        confirmInput.addEventListener('input', () => {
            if (passwordInput.value === confirmInput.value) {
                matchIndicator.textContent = 'Passwords match!';
                matchIndicator.style.color = 'green';
            } else {
                matchIndicator.textContent = 'Passwords do not match!';
                matchIndicator.style.color = 'red';
            }
        });
    }
}

function handleLogout() {
    window.authState.isAuthenticated = false;
    window.authState.user = null;
    window.history.pushState({}, '', '/');
    window.dispatchEvent(new PopStateEvent('popstate'));
}