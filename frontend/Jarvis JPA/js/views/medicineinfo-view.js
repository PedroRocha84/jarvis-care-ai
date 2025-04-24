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

    medicineHeader();
   
        const response = await fetch('http://localhost:8080/jarvis/api/user/' + user.id + '/medicines')
        .then(response =>{
            console.log(response.json);
            if (!response.ok) { throw new Error('Failed to fetch medicine data');}

            return response.json();    
        })
        .then(data => {
            console.log(data);
        })
        .catch(error => {
            main.innerHTML = `<p class="error">Error fetching medicine data. Try later.</p>`;
         })
}


export function medicineHeader(formattedDate, viewType) {
    const medicineInfoContainer = document.createElement("div");
    medicineInfoContainer.classList.add("medicine-info-container");

    const medicineInfoHeader = document.createElement("div");
    medicineInfoHeader.classList.add("medicine-info-header");

    const medicineTitle = document.createElement("h1");
    medicineTitle.classList.add("medicine-info-title");
    medicineTitle.textContent = `Today's Medicine - ${formattedDate}`;

    const viewSwitch = document.createElement("div");
    viewSwitch.classList.add("view-switcher");

    const buttonDaily = document.createElement("button");
    buttonDaily.className = `view-btn ${viewType === 'daily' ? 'active' : ''}`;
    buttonDaily.textContent = "Daily";

    const buttonWeekly = document.createElement("button");
    buttonWeekly.className = `view-btn ${viewType === 'weekly' ? 'active' : ''}`;
    buttonWeekly.textContent = "Weekly";

    const buttonMonthly = document.createElement("button");
    buttonMonthly.className = `view-btn ${viewType === 'monthly' ? 'active' : ''}`;
    buttonMonthly.textContent = "Monthly";

    viewSwitch.appendChild(buttonDaily);
    viewSwitch.appendChild(buttonWeekly);
    viewSwitch.appendChild(buttonMonthly);

    medicineInfoHeader.appendChild(medicineTitle);
    medicineInfoHeader.appendChild(viewSwitch);

    medicineInfoContainer.appendChild(medicineInfoHeader);

    const main = document.getElementById('main-content');
    main.innerHTML = ''; // clear old content
    main.appendChild(medicineInfoContainer);
}