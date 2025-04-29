export function renderMedicineInfo(viewType = 'daily') {
    const temp = document.getElementById('main-content');
    temp.innerHTML = '';

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
        return response.json();
    })
    .then(data => {
        console.log(data);

        const today = new Date();
        const formattedToday = today.toISOString().split('T')[0];

        const weekDays = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
        const currentWeekDay = weekDays[today.getDay()];

        // prepare list of medicines
        let eventsHTML = '';

        if (data.length > 0) {
            const medicinesForToday = data.flatMap(medicine => {
                const isExpired = medicine.lastDayOfMedicine && new Date(medicine.lastDayOfMedicine) < today;
                if (isExpired) {
                    console.log(`Medicamento ${medicine.medicineName} expirou em ${medicine.lastDayOfMedicine}`);
                    return []; 
                }

                const isDayMatch = !medicine.medicineWeekDays || 
                                   !medicine.medicineWeekDays.length || 
                                   medicine.medicineWeekDays.includes(currentWeekDay);

                if (isDayMatch) {
                    return medicine.medicineHours.map(hour => ({
                        hour: hour,
                        medicine: medicine
                    }));
                }
                return [];
            });

            if (medicinesForToday.length > 0) {
                eventsHTML = medicinesForToday
                    .sort((a, b) => {
                        const timeA = new Date(`2000-01-01T${a.hour}`);
                        const timeB = new Date(`2000-01-01T${b.hour}`);
                        return timeA - timeB;
                    })
                    .map(item => `
                        <div class="event-card event-${item.medicine.type || 'default'}">
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
                    `)
                    .join('');
            } else {
                eventsHTML = `
                    <div class="no-events">
                        <i class="far fa-calendar-check"></i>
                        <p>No events scheduled for today</p>
                    </div>
                `;
            }
        } else {
            eventsHTML = `
                <div class="no-events">
                    <i class="far fa-calendar-check"></i>
                    <p>No events scheduled for today</p>
                </div>
            `;
        }

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
                        ${eventsHTML}
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
                    <button class="quick-action-btn" data-action="new-appointment" href='/medicines/add'">
                        Add Medicine
                    </button>
                </div>
            </div>
        `;
    })
    .catch(error => {
        console.error(error);
        main.innerHTML = `<p class="error">Error fetching medicine data. Try later.</p>`;
    });
}
