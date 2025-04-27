import { renderMedicineForm } from "../views/medicine-form";

export function init() {
    renderMedicineForm();
    setupMedicineFormListeners();
}

function setupMedicineFormListeners() {
    document.addEventListener('click', (e) => {
        i (e.target.classList.contains('save-btn') || 
        e.target.closest('.save-btn')) {
        const eventId = e.target.getAttribute('data-event') || 
                      e.target.closest('.save-btn').getAttribute('data-event');
        showEditMedicine(eventId);
    }
    
    i (e.target.classList.contains('cancel-btn') || 
    e.target.closest('.cancel-btn')) {
    const eventId = e.target.getAttribute('data-event') || 
                  e.target.closest('.cancel-btn').getAttribute('data-event');
    showEditMedicine(eventId);
    }
    })
}