import { renderHealthDashboard, renderMoodTracker } from '../views/health-view.js';

export function init() {
    const path = window.location.pathname;
    
    if (path === '/health') {
        renderHealthDashboard();
        setupHealthListeners();
    } else if (path === '/health/mood') {
        renderMoodTracker();
        setupMoodTrackerListeners();
    }
}

function setupHealthListeners() {
    document.querySelectorAll('.health-card').forEach(card => {
        card.addEventListener('click', () => {
            const target = card.getAttribute('data-target');
            if (target) {
                window.history.pushState({}, '', target);
                window.dispatchEvent(new PopStateEvent('popstate'));
            }
        });
    });
}

function setupMoodTrackerListeners() {
    const moodForm = document.getElementById('mood-form');
    if (moodForm) {
        moodForm.addEventListener('submit', (e) => {
            e.preventDefault();
            const selectedMood = document.querySelector('input[name="mood"]:checked');
            if (selectedMood) {
                saveMood(selectedMood.value);
            }
        });
    }
}

function saveMood(mood) {
    const today = new Date().toISOString().split('T')[0];
    const moodData = JSON.parse(localStorage.getItem('moodData')) || {};
    moodData[today] = mood;
    localStorage.setItem('moodData', JSON.stringify(moodData));
    
    alert(`Mood saved: ${mood}`);
    window.history.pushState({}, '', '/health');
    window.dispatchEvent(new PopStateEvent('popstate'));
}