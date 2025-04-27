export function renderSignIn() {
    const main = document.getElementById('main-content');
    main.innerHTML = "";
   
    const authContainer = document.createElement('div');
    authContainer.className = 'auth-container';

    const brandPanel = document.createElement('div');
    brandPanel.className = 'brand-panel';
    const brandImg = document.createElement('img');
    brandImg.src = 'images/jarvis-logo4.png';
    brandImg.alt = 'JARVIS AI';
    brandPanel.appendChild(brandImg);

    const signinContainer = document.createElement('div');
    signinContainer.className = 'signin-container';

    const signinTitle = document.createElement('h1');
    signinTitle.textContent = 'Sign In CARE AI';
    signinContainer.appendChild(signinTitle);

    const inputGroupEmail = document.createElement('div');
    inputGroupEmail.className = 'input-group';
    const emailLabel = document.createElement('label');
    emailLabel.setAttribute('for', 'email');
    emailLabel.textContent = 'Email';
    const emailInput = document.createElement('input');
    emailInput.type = 'email';
    emailInput.id = 'email';
    emailInput.name = 'email';
    inputGroupEmail.append(emailLabel, emailInput);

    const inputGroupPassword = document.createElement('div');
    inputGroupPassword.className = 'input-group';
    const passwordLabel = document.createElement('label');
    passwordLabel.setAttribute('for', 'password');
    passwordLabel.textContent = 'Password';
    const passwordInput = document.createElement('input');
    passwordInput.type = 'password';
    passwordInput.id = 'password';
    passwordInput.name = 'password';
    inputGroupPassword.append(passwordLabel, passwordInput);

    const options = document.createElement('div');
    options.className = 'options';

    const remember = document.createElement('div');
    remember.className = 'remember';
    const rememberInput = document.createElement('input');
    rememberInput.type = 'checkbox';
    rememberInput.id = 'remember';
    const rememberLabel = document.createElement('label');
    rememberLabel.setAttribute('for', 'remember');
    rememberLabel.textContent = 'Remember';
    remember.append(rememberInput, rememberLabel);

    const forgotPasswordLink = document.createElement('a');
    forgotPasswordLink.href = '#';
    forgotPasswordLink.className = 'forgot-password';
    forgotPasswordLink.textContent = 'Forget Password?';

    options.append(remember, forgotPasswordLink);

    const signinButton = document.createElement('button');
    signinButton.className = 'signin-btn';
    signinButton.textContent = 'SIGN IN';

    const createAccount = document.createElement('div');
    createAccount.className = 'create-account';
    createAccount.innerHTML = `Don't have Account? <a href="/register">Register</a>`;

    signinContainer.append(
    inputGroupEmail,
    inputGroupPassword,
    options,
    signinButton,
    createAccount
    );

    authContainer.append(brandPanel, signinContainer);

    main.appendChild(authContainer);

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

export async function handleSignIn() {
    

    const email = document.getElementById('email').value;
    const password = document.getElementById('password').value;
    const remember = document.getElementById('remember').checked;

    try {
        const response = await fetch("http://localhost:8080/jarvis/login", {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify({ email, password }),
            mode: 'cors'
        });

        if (!response.ok) {
            alert("Login failed: " + response.statusText);
            return;
        }
        
        const data = await response.json(); // ✅ Expecting JSON from server

        const { id,firstName, email: userEmail } = data;
        
        // Store user info in session or local storage
        const user = { id, firstName, email: userEmail };
        sessionStorage.setItem('user', JSON.stringify(user));

        // Optional: global state
        window.authState = {
            isAuthenticated: true,
            user
        };

        // Redirect and pass user info (optional)
        window.history.pushState(user, '', '/profile');
        window.dispatchEvent(new PopStateEvent('popstate'));

    } catch (error) {
        console.error("Error during login:", error);
        alert("An error occurred during login.");
    }
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

function validateRegistration() {
    const password = document.getElementById('password').value;
    const confirmPassword = document.getElementById('confirm-password').value;
    
    if (password !== confirmPassword) {
        alert('Passwords do not match!');
        return false;
    }
    
    return true;
}