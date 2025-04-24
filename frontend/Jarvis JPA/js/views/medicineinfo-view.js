export async function renderMedicineInfo(viewType = 'daily') {
    const main = document.getElementById('main-content');
    const user = window.authState.user || {};
    const today = new Date();
    const formattedDate = today.toLocaleDateString('en-US', { 
        weekday: 'long', 
        year: 'numeric', 
        month: 'long', 
        day: 'numeric' 
    });

    

/*
    const userId = window.authState.user?.id;
    let medicines = [];

    if (!userId) {
        alert("You need login")
        //main.innerHTML = `<p class="error">User not logged in</p>`;
        return;
    }
    //aqui
    const token = localStorage.getItem('authToken'); 

    if (!token) {
        alert("You need to be authenticated to view this information.");
        return;
    }
    //ate aqui, retirar?
*/

   
        const response = await fetch('http://localhost:8080/api/${user.id}/medicines')
        .then(response =>{
            if (!response.ok) { throw new Error('Failed to fetch medicine data');}
            return response.json();    
        })
        .then(data => {
            console.log(data);  // Handle the response data here
        })
        .catch(error => {
            main.innerHTML = `<p class="error">Error fetching medicine data. Try later.</p>`;
         })
        

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
}