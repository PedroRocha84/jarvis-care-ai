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

    fetch('http://localhost:8080/jarvis/api/user/' + user.id + '/medicines')
        .then(response => {
            if (!response.ok) { 
                throw new Error('Failed to fetch medicine data');
            }
            return response.json(); // Parse the response JSON
        })
        .then(data => {
            console.log(data);  // Log the data to the console
            
            const today = new Date();
            const weekDays = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
            const currentWeekDay = weekDays[today.getDay()];
            
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
                    data.flatMap(medicine => {
                        if (!medicine.medicineWeekDays || medicine.medicineWeekDays.includes(currentWeekDay)) {
                            return medicine.medicineHours.map(hour => ({
                                hour: hour,
                                medicine: medicine
                            }));
                        } else {
                            return [];
            }
        })
            // Sort by time
            .sort((a, b) => {
                // Convert time strings to Date objects for comparison
                const timeA = new Date(`2000-01-01T${a.hour}`);
                const timeB = new Date(`2000-01-01T${b.hour}`);
                return timeA - timeB;
            })
            // map to HTML after ordering
            .map(item => `
                <div class="event-card event-${item.medicine.type}">
                    <div class="event-time">
                        <span class="time">${item.hour}</span>
                    </div>
                    <div class="event-details">
                        <h3>${item.medicine.medicineName}</h3>
                        <span class="dosage">${item.medicine.medicineDosage}</span>
                    </div>
                    <div class="event-actions">
                        <button class="event-btn details-btn" data-event="${item.medicine.id}">
                            <i class="fas fa-info-circle"></i> Edit
                        </button>
                        <button class="event-btn cancel-btn" data-event="${item.medicine.id}">
                            <i class="fas fa-times"></i> Remove
                        </button>
                    </div>
                </div>
                        `).join('') 
                        : 
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
