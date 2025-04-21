export function renderDashboard(viewType = 'daily') {
    const main = document.getElementById('main-content');
    const today = new Date();
    const formattedDate = today.toLocaleDateString('en-US', { 
        weekday: 'long', 
        year: 'numeric', 
        month: 'long', 
        day: 'numeric' 
    });

    const sampleEvents = [
        {
            id: 1,
            type: 'appointment',
            title: 'Consulta com Dr. Pedro',
            time: '09:30 AM',
            duration: '30 mins',
            location: 'Room 201'
        },
        {
            id: 2,
            type: 'exam',
            title: 'Blood Test',
            time: '11:15 AM',
            duration: '15 mins',
            location: 'Room 3'
        },
        {
            id: 3,
            type: 'treatment',
            title: 'Fisio Therapy Session',
            time: '02:00 PM',
            duration: '45 mins',
            location: 'Center Jamor'
        }
    ];

    main.innerHTML = `
        <div class="dashboard-container">
            <div class="dashboard-header">
                <h1 class="dashboard-title">Today's Schedule - ${formattedDate}</h1>
                <div class="view-switcher">
                    <button class="view-btn ${viewType === 'daily' ? 'active' : ''}" data-view="daily">Daily</button>
                    <button class="view-btn ${viewType === 'weekly' ? 'active' : ''}" data-view="weekly">Weekly</button>
                    <button class="view-btn ${viewType === 'monthly' ? 'active' : ''}" data-view="monthly">Monthly</button>
                </div>
            </div>
            
            ${viewType === 'daily' ? `
            <div class="events-list">
                ${sampleEvents.length > 0 ? 
                    sampleEvents.map(event => `
                        <div class="event-card event-${event.type}">
                            <div class="event-time">
                                <span class="time">${event.time}</span>
                                <span class="duration">${event.duration}</span>
                            </div>
                            <div class="event-details">
                                <h3>${event.title}</h3>
                                <p><i class="fas fa-map-marker-alt"></i> ${event.location}</p>
                            </div>
                            <div class="event-actions">
                                <button class="event-btn details-btn" data-event="${event.id}">
                                    <i class="fas fa-info-circle"></i> Details
                                </button>
                                <button class="event-btn cancel-btn" data-event="${event.id}">
                                    <i class="fas fa-times"></i> Cancel
                                </button>
                            </div>
                        </div>
                    `).join('') : 
                    `<div class="no-events">
                        <i class="far fa-calendar-check"></i>
                        <p>No events scheduled for today</p>
                    </div>`
                }
            </div>
            ` : ''}
            
            ${viewType === 'weekly' ? `
            <div class="calendar-view">
                <p>Weekly view coming soon</p>
            </div>
            ` : ''}
            
            ${viewType === 'monthly' ? `
            <div class="calendar-view">
                <p>Monthly view coming soon</p>
            </div>
            ` : ''}
            
            <div class="quick-actions">
                <button class="quick-action-btn" data-action="new-appointment">
                    <i class="fas fa-plus"></i> New Appointment
                </button>
                <button class="quick-action-btn" data-action="new-exam">
                    <i class="fas fa-flask"></i> Schedule Exam
                </button>
                <button class="quick-action-btn" data-action="new-treatment">
                    <i class="fas fa-heartbeat"></i> Add Treatment
                </button>
            </div>
        </div>
    `;
}