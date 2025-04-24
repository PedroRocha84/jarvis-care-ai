export function render() {
    const main = document.getElementById('main-content');
    main.innerHTML = `
        <div class="hero-section">
            <div class="hero-content">
                <h1>CARE AI</h1>
                <h2>Your Personal Health Companion</h2>
                <p class="hero-description">AI-powered healthcare solutions for better well-being</p>
                <div class="cta-buttons">
                    <a href="/signin" class="btn btn-primary">Get Started</a>
                    <a href="#learn-more" class="btn btn-secondary">Learn More</a>
                </div>
            </div>
            <div class="hero-image">
                <img src="/images/home-logo.jpeg" alt="Image home">
            </div>
        </div>

        <div id="learn-more" class="features-section">
            <h3>How CARE AI Helps You</h3>
            <div class="feature-cards">
                <div class="feature-card">
                    <i class="fas fa-calendar-check"></i>
                    <h4>Appointment Management</h4>
                    <p>Easily schedule and track your medical appointments</p>
                </div>
                <div class="feature-card">
                    <i class="fas fa-heartbeat"></i>
                    <h4>Health Monitoring</h4>
                    <p>Track your vital signs and health metrics</p>
                </div>
                <div class="feature-card">
                    <i class="fas fa-robot"></i>
                    <h4>AI Assistance</h4>
                    <p>Get personalized health recommendations</p>
                </div>
            </div>
        </div>

        <div class="awareness-section">
            <div class="awareness-content">
                <h3>Health Awareness</h3>
                <h2>Early Detection Saves Lives</h2>
                <p>Learn how to monitor your health and recognize early warning signs with our AI-powered tools.</p>
                <a href="/dashboard" class="btn btn-outline">Check Your Health</a>
            </div>
        </div>
    `;

}