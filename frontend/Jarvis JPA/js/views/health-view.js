export function renderHealthDashboard() {
    const main = document.getElementById('main-content');
    const user = window.authState.user || {};
    
    main.innerHTML = `
        <div class="health-container">
            <div class="health-header">
                <h1>Health Dashboard</h1>
                <p>Welcome back, ${user.firstName || 'User'}. Here's your health overview.</p>
                <a href="#" class="btn btn-primary">
                    <i class="fas fa-heartbeat"></i> View Medical Profile
                </a>
            </div>
            
            <div class="health-summary">
                <div class="health-card" data-target="/health/mood">
                    <i class="fas fa-smile"></i>
                    <h3>Mood Tracker</h3>
                    <p>Track your daily emotional well-being</p>
                </div>
                
                <div class="health-card" data-target="/health/vitals">
                    <i class="fas fa-heartbeat"></i>
                    <h3>Vital Signs</h3>
                    <p>Record and monitor your health metrics</p>
                </div>
                
                <div class="health-card" data-target="/health/sleep">
                    <i class="fas fa-moon"></i>
                    <h3>Sleep Analysis</h3>
                    <p>Track your sleep patterns and quality</p>
                </div>
                
                <div class="health-card" data-target="/health/activity">
                    <i class="fas fa-walking"></i>
                    <h3>Activity Log</h3>
                    <p>Monitor your physical activity</p>
                </div>
            </div>
            
            <div class="health-tips">
                <h2><i class="fas fa-lightbulb"></i> Health Tip of the Day</h2>
                <p>Staying hydrated is essential for maintaining energy levels and cognitive function. 
                Aim for 8-10 glasses of water daily.</p>
            </div>
        </div>
    `;
}

export function renderMoodTracker() {
    const main = document.getElementById('main-content');
    const today = new Date().toLocaleDateString('en-US', { 
        weekday: 'long', 
        year: 'numeric', 
        month: 'long', 
        day: 'numeric' 
    });
    
    main.innerHTML = `
        <div class="mood-tracker-container">
            <div class="mood-header">
                <h1>Mood Tracker</h1>
                <p>How are you feeling today, ${today}?</p>
                <a href="/profile/medical" class="btn btn-outline">
                    <i class="fas fa-heartbeat"></i> Medical Profile
                </a>
            </div>
            
            <form id="mood-form">
                <div class="mood-options">
                    <label class="mood-option">
                        <input type="radio" name="mood" value="excellent" required>
                        <div class="mood-icon">
                            <i class="fas fa-grin-stars"></i>
                            <span>Excellent</span>
                        </div>
                    </label>
                    
                    <label class="mood-option">
                        <input type="radio" name="mood" value="good">
                        <div class="mood-icon">
                            <i class="fas fa-smile"></i>
                            <span>Good</span>
                        </div>
                    </label>
                    
                    <label class="mood-option">
                        <input type="radio" name="mood" value="neutral">
                        <div class="mood-icon">
                            <i class="fas fa-meh"></i>
                            <span>Neutral</span>
                        </div>
                    </label>
                    
                    <label class="mood-option">
                        <input type="radio" name="mood" value="bad">
                        <div class="mood-icon">
                            <i class="fas fa-frown"></i>
                            <span>Bad</span>
                        </div>
                    </label>
                    
                    <label class="mood-option">
                        <input type="radio" name="mood" value="awful">
                        <div class="mood-icon">
                            <i class="fas fa-sad-tear"></i>
                            <span>Awful</span>
                        </div>
                    </label>
                </div>
                
                <div class="form-group">
                    <label for="mood-notes">Additional Notes (Optional)</label>
                    <textarea id="mood-notes" placeholder="Any specific reasons for how you're feeling?"></textarea>
                </div>
                
                <button type="submit" class="btn btn-primary">
                    <i class="fas fa-save"></i> Save Mood
                </button>
                
                <a href="/health" class="btn btn-outline">
                    <i class="fas fa-arrow-left"></i> Back to Dashboard
                </a>
            </form>
            
            <div class="mood-history">
                <h3><i class="fas fa-history"></i> Your Mood History</h3>
                <div class="mood-chart">
                    <p>Your mood chart will appear here</p>
                </div>
            </div>
        </div>
    `;
}