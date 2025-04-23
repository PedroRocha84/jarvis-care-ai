export function renderMedicineInfo(viewType = 'daily') {
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
            type: 'medicine',
            title: 'Tamoxifeno',
            time: '09:30 AM',
            lastDay: "15-07-2025"
        },
        {
            id: 2,
            type: 'medicine',
            title: 'Voltaren',
            time: '12:00 AM',
            lastDay: "15-07-2025"
        },
        {
            id: 3,
            type: 'medicine',
            title: 'Benuron',
            time: '06:00 PM',
            lastDay: "15-07-2025"
        }
    ];


    main.innerHTML = `
        <div class="medicine-info-container">
            <div class="medicine-info-header">
                <h1 class="medicine-info-title">Today's Medicine Schedule - ${formattedDate}</h1>
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
                                <span class="duration">${event.lastDay}</span>
                            </div>
                            <div class="event-details">
                                <h3>${event.title}</h3>
                            </div>
                            <div class="event-actions">
                                <button class="event-btn details-btn" data-event="${event.id}">
                                    <i class="fas fa-info-circle"></i> Edit
                                </button>
                                <button class="event-btn cancel-btn" data-event="${event.id}">
                                    <i class="fas fa-times"></i> Remove
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
        </div>
    `;
}