export function renderHealthDashboard() {
    const mainContent = document.getElementById('main-content');
    
    mainContent.innerHTML = `
        <section class="health-dashboard">
            <h2>Health Dashboard</h2>
            <div class="health-grid">
                <div class="health-card" data-target="/health/mood">
                    <h3>Mood Tracker</h3>
                    <p>Track your daily mood and emotions</p>
                    <div class="health-icon">😊</div>
                </div>
                <div class="health-card">
                    <h3>Sleep Tracker</h3>
                    <p>Monitor your sleep patterns</p>
                    <div class="health-icon">😴</div>
                </div>
                <div class="health-card">
                    <h3>Activity Log</h3>
                    <p>Record your physical activity</p>
                    <div class="health-icon">🏃‍♂️</div>
                </div>
                <div class="health-card">
                    <h3>Nutrition</h3>
                    <p>Track your meals and water intake</p>
                    <div class="health-icon">🍎</div>
                </div>
            </div>
        </section>
    `;

}

export function renderMoodTracker() {
    const mainContent = document.getElementById('main-content');
    
    mainContent.innerHTML = `
        <section class="mood-tracker">
            <h2>How are you feeling today?</h2>
            <form id="mood-form">
                <div class="mood-options">
                    <label class="mood-option">
                        <input type="radio" name="mood" value="excited" required>
                        <span>😆 Excited</span>
                    </label>
                    <label class="mood-option">
                        <input type="radio" name="mood" value="happy">
                        <span>😊 Happy</span>
                    </label>
                    <label class="mood-option">
                        <input type="radio" name="mood" value="neutral">
                        <span>😐 Neutral</span>
                    </label>
                    <label class="mood-option">
                        <input type="radio" name="mood" value="sad">
                        <span>😔 Sad</span>
                    </label>
                    <label class="mood-option">
                        <input type="radio" name="mood" value="angry">
                        <span>😠 Angry</span>
                    </label>
                </div>
                <button type="submit" class="submit-btn">Save Mood</button>
            </form>
            
            <div class="mood-history">
                <h3>Your Recent Moods</h3>
                <div id="mood-history-list"></div>
            </div>
        </section>
    `;
    
    // Load any existing mood data
    loadMoodHistory();
    addHealthStyles();
}

function loadMoodHistory() {
    const moodData = JSON.parse(localStorage.getItem('moodData')) || {};
    const historyList = document.getElementById('mood-history-list');
    
    if (historyList) {
        if (Object.keys(moodData).length === 0) {
            historyList.innerHTML = '<p>No mood data recorded yet.</p>';
            return;
        }
        
        let html = '<ul>';
        const sortedDates = Object.keys(moodData).sort().reverse().slice(0, 5); // Show last 5 entries
        
        sortedDates.forEach(date => {
            const mood = moodData[date];
            html += `
                <li>
                    <span class="mood-date">${formatDate(date)}</span>
                    <span class="mood-emoji">${getMoodEmoji(mood)}</span>
                    <span class="mood-label">${mood}</span>
                </li>
            `;
        });
        
        html += '</ul>';
        historyList.innerHTML = html;
    }
}

function getMoodEmoji(mood) {
    const emojiMap = {
        'excited': '😆',
        'happy': '😊',
        'neutral': '😐',
        'sad': '😔',
        'angry': '😠'
    };
    return emojiMap[mood] || '❓';
}

function formatDate(dateString) {
    const options = { year: 'numeric', month: 'short', day: 'numeric' };
    return new Date(dateString).toLocaleDateString(undefined, options);
}
