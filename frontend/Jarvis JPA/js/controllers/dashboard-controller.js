import { renderDashboard } from '../views/dashboard-view.js';

export function init() {
    renderDashboard('daily');
    setupDashboardListeners();
}

function setupDashboardListeners() {
    document.addEventListener('click', (e) => {
        if (e.target.classList.contains('view-btn')) {
            e.preventDefault();
            const viewType = e.target.getAttribute('data-view');
            renderDashboard(viewType);
            setupDashboardListeners();
        }
        
        if (e.target.classList.contains('details-btn') || 
            e.target.closest('.details-btn')) {
            const eventId = e.target.getAttribute('data-event') || 
                          e.target.closest('.details-btn').getAttribute('data-event');
            showEventDetails(eventId);
        }
        
        if (e.target.classList.contains('cancel-btn') || 
            e.target.closest('.cancel-btn')) {
            const eventId = e.target.getAttribute('data-event') || 
                          e.target.closest('.cancel-btn').getAttribute('data-event');
            cancelEvent(eventId);
        }
        
        if (e.target.classList.contains('quick-action-btn') || 
            e.target.closest('.quick-action-btn')) {
            const action = e.target.getAttribute('data-action') || 
                         e.target.closest('.quick-action-btn').getAttribute('data-action');
            handleQuickAction(action);
        }
    });
}

function showEventDetails(eventId) {
    alert(`Showing details for event ${eventId}`);
}

function cancelEvent(eventId) {
    if (confirm('Are you sure you want to cancel this appointment?')) {
        alert(`Event ${eventId} cancelled`);
        renderDashboard('daily');
        setupDashboardListeners();
    }
}

function handleQuickAction(action) {
    switch(action) {
        case 'new-appointment':
            alert('Redirecting to new appointment form');
            // window.location.href = '/new-appointment';
            break;
        case 'new-exam':
            alert('Redirecting to new exam form');
            // window.location.href = '/new-exam';
            break;
        case 'new-treatment':
            alert('Redirecting to new treatment form');
            // window.location.href = '/new-treatment';
            break;
        default:
            break;
    }
}