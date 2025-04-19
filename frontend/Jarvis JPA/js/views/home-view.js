export function render() {
    const main = document.getElementById('main-content');
    main.innerHTML = `
        <div class="auth-container home-page">
            <div class="brand-panel">
                <img src="images/jarvis-logo4.png" alt="CARE AI">
            </div>
            <div class="signin-container">
                <h1>Welcome to CARE AI</h1>
                <p class="welcome-text">Your intelligent healthcare assistant</p>
                <div class="home-actions">
                    <button class="home-btn" id="signin-btn">Sign In</button>
                    <button class="home-btn outline" id="register-btn">Register</button>
                </div>
            </div>
        </div>
    `;
}