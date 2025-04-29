import { renderMedicineForm } from "../views/medicine-form.js";

export function init() {
    const temp = document.getElementById('main-content');
    temp.innerHTML = '';
    renderMedicineForm();
    setupMedicineFormListeners();
}

function setupMedicineFormListeners() {
    document.addEventListener('click', (e) => {
        if (e.target.classList.contains('save-btn') || 
            e.target.closest('.save-btn')) {
            
            const eventId = e.target.getAttribute('data-event') || 
                            e.target.closest('.save-btn').getAttribute('data-event');
            showEditMedicine();
        }

        if (e.target.classList.contains('cancel-btn') || 
            e.target.closest('.cancel-btn')) {
            
            const eventId = e.target.getAttribute('data-event') || 
                            e.target.closest('.cancel-btn').getAttribute('data-event');
            showEditMedicine();
        }
    });
}

function showEditMedicine() {
    window.history.pushState({}, '', '/medicines');
    window.dispatchEvent(new PopStateEvent('popstate'));
}