export function renderSignIn() {
    const main = document.getElementById('main-content');
    main.innerHTML = `
        <div class="auth-container">
            <div class="brand-panel">
                <img src="images/jarvis-logo4.png" alt="JARVIS AI">
            </div>

            <div class="signin-container">
                <h1>Sign In CARE AI</h1>
                
                <div class="input-group">
                    <label for="email">Email</label>
                    <input type="email" id="email" name="email">
                </div>
                
                <div class="input-group">
                    <label for="password">Password</label>
                    <input type="password" id="password" name="password">
                </div>
                
                <div class="options">
                    <div class="remember">
                        <input type="checkbox" id="remember">
                        <label for="remember">Remember</label>
                    </div>
                    <a href="#" class="forgot-password">Forget Password?</a>
                </div>
                
                <button class="signin-btn">SIGN IN</button>
                <div class="create-account">
                    Don't have Account? <a href="/register">Register</a>
                </div>
            </div>
        </div>
    `;
}

export function renderRegister() {
    const main = document.getElementById('main-content');
    main.innerHTML = `
        <div class="auth-container">
            <div class="brand-panel">
                <img src="images/jarvis-logo4.png" alt="JARVIS AI">
            </div>

            <div class="signin-container">
                <h1>Create CARE AI Account</h1>
                
                <div class="name-group">
                    <div class="input-group half-width">
                        <label for="firstname">First Name</label>
                        <input type="text" id="firstname" name="firstname" required>
                    </div>

                    <div class="input-group half-width">
                        <label for="lastname">Last Name</label>
                        <input type="text" id="lastname" name="lastname" required>
                    </div>
                </div>

                <div class="input-group">
                    <label for="birthdate">Birthdate</label>
                    <input type="date" id="birthdate" name="birthdate" required>
                </div>

                <div class="input-group">
                    <label for="address">Address</label>
                    <input type="text" id="address" name="address" required>
                </div>

                <div class="location-group">
                    <div class="input-group two-thirds-width">
                        <label for="city">City</label>
                        <input type="text" id="city" name="city" required>
                    </div>

                    <div class="input-group one-third-width">
                        <label for="zipcode">ZIP Code</label>
                        <input type="text" id="zipcode" name="zipcode" required pattern="[0-9]*" inputmode="numeric">
                    </div>
                </div>

                <div class="input-group">
                    <label for="email">Email</label>
                    <input type="email" id="email" name="email" required>
                </div>
                
                <div class="input-group">
                    <label for="password">Password</label>
                    <input type="password" id="password" name="password" required minlength="8">
                    <div class="password-strength">
                        <div class="password-strength-bar"></div>
                    </div>
                    <small class="hint">Minimum 8 characters</small>
                </div>
                
                <div class="input-group">
                    <label for="confirm-password">Confirm Password</label>
                    <input type="password" id="confirm-password" name="confirm-password" required>
                    <div id="password-match" class="hint"></div>
                </div>
                <button class="signin-btn" id="register-btn">CREATE ACCOUNT</button>
                <div class="create-account"> 
                    Already have an account? <a href="/signin">Sign In</a>
                </div>
            </div>
        </div>
    `;
}

export async function handleSignIn(e) {
    e.preventDefault();
    const email = document.getElementById('email').value;
    const password = document.getElementById('password').value;
    const remember = document.getElementById('remember').checked;

  
    try {
        const response = await fetch('http://localhost:8080/login', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ email, password })
        });

        if (!response.ok) throw new Error('Login falhou');

        const data = await response.json();

        // ⚡ Guardar só o user no estado global
        window.authState = {
            user: data.user
        };


    } catch (err) {
        console.error('Login error:', err);
        alert('Invalid login. Check your data.');
    }



    console.log('Signing in with:', { email, password, remember });
    alert('Isto vai para onde????');
    // Redirect to home after successful login
    window.history.pushState({}, '', '/');
    window.dispatchEvent(new PopStateEvent('popstate'));
}

export function handleRegister(e) {
    e.preventDefault();
    if (!validateRegistrationForm()) return;
    
    const formData = {
        firstName: document.getElementById('firstname').value,
        lastName: document.getElementById('lastname').value,
        // ... other fields
    };
    
    console.log('Registering with:', formData);
    alert('Registration successful! Redirecting...');
    
    window.history.pushState({}, '', '/signin');
    window.dispatchEvent(new PopStateEvent('popstate'));
}

function validateRegistrationForm() {
    const password = document.getElementById('password').value;
    const confirmPassword = document.getElementById('confirm-password').value;
    
    if (password !== confirmPassword) {
        alert('Passwords do not match!');
        return false;
    }
    
    return true;
}