import { renderMedicineForm } from "../views/medicine-form";

export function init() {
    renderMedicineForm();
    setupMedicineFormListeners();
}

function setupMedicineFormListeners() {
    document.addEventListener('click', (e) => {
        if (e.target.classList.contains('save-btn') || 
        e.target.closest('.save-btn')) {
        const eventId = e.target.getAttribute('data-event') || 
                      e.target.closest('.save-btn').getAttribute('data-event');
        document.querySelector('#medicine-form').submit();
        alert('Medicine saved successfully');
    }    
    
    if (e.target.classList.contains('cancel-btn') || 
    e.target.closest('.cancel-btn')) {
    const eventId = e.target.getAttribute('data-event') || 
                  e.target.closest('.cancel-btn').getAttribute('data-event');
    window.location.href = 'http://localhost:8080/jarvis/api/medicines';
    }
    });

    /*
    function saveMedicineToServer(medicineData) {
        fetch('http://localhost:8080/jarvis/api/user/' + user.id + '/medicines', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(medicineData)
        })
        .then(response => response.json())
        .then(data => {
            console.log('Success:', data);
            alert('Medicine saved successfully');
        })
        .catch((error) => {
            console.error('Error:', error);
            alert('Failed to save medicine');
        });
    }*/
}