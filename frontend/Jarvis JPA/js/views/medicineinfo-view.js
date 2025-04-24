export function renderMedicineInfo(viewType = 'daily') {
    const main = document.getElementById('main-content');
    const user = window.authState.user || {};
    const today = new Date();
    const formattedDate = today.toLocaleDateString('en-US', { 
        weekday: 'long', 
        year: 'numeric', 
        month: 'long', 
        day: 'numeric' 
    });

    // Fetch request
    fetch('http://localhost:8080/jarvis/api/user/' + user.id + '/medicines')
        .then(response => {
            if (!response.ok) { 
                throw new Error('Failed to fetch medicine data');
            }
            return response.json(); // Parse the response JSON
        })
        .then(data => {
            console.log(data);  // Log the data to the console for debugging
            
            // Now, render the content
            main.innerHTML = `
            <div class="medicine-info-container">
                <div class="medicine-info-header">
                    <h1 class="medicine-info-title">Today's Medicine - ${formattedDate}</h1>
                    <div class="view-switcher">
                        <button class="view-btn ${viewType === 'daily' ? 'active' : ''}" data-view="daily">Daily</button>
                        <button class="view-btn ${viewType === 'weekly' ? 'active' : ''}" data-view="weekly">Weekly</button>
                        <button class="view-btn ${viewType === 'monthly' ? 'active' : ''}" data-view="monthly">Monthly</button>
                    </div>
                </div> 
                
                ${viewType === 'daily' ? `
                <div class="events-list">
                    ${data.length > 0 ? 
                        data.map(event => `
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
                        <i class="fas fa-plus"></i> Add Medicine
                    </button>
                </div>
            </div>
        `;
        })
        .catch(error => {
            console.error(error);  // Log the error to the console for debugging
            main.innerHTML = `<p class="error">Error fetching medicine data. Try later.</p>`;
        });
}
