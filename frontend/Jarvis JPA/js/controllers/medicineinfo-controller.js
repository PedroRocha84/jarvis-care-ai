import { renderMedicineInfo } from '../views/medicineinfo-view.js';

export function init() {
    const temp = document.getElementById('main-content');
    temp.innerHTML = '';
    renderMedicineInfo('daily');
    setupMedicineInfoListeners();
}

function setupMedicineInfoListeners() {
    document.addEventListener('click', (e) => {
        if (e.target.classList.contains('view-btn')) {
            e.preventDefault();
            const viewType = e.target.getAttribute('data-view');
            renderMedicineInfo(viewType);
            setupMedicineInfoListeners();
        }
        
        if (e.target.classList.contains('details-btn') || 
            e.target.closest('.details-btn')) {
            const eventId = e.target.getAttribute('data-event') || 
                          e.target.closest('.details-btn').getAttribute('data-event');
            showEditMedicine(eventId);
        }
        
        if (e.target.classList.contains('cancel-btn') || 
            e.target.closest('.cancel-btn')) {
            const eventId = e.target.getAttribute('data-event') || 
                          e.target.closest('.cancel-btn').getAttribute('data-event');
            removeMedicine(eventId);
        }
        
        if (e.target.classList.contains('quick-action-btn') || 
            e.target.closest('.quick-action-btn')) {
            const action = e.target.getAttribute('data-action') || 
                         e.target.closest('.quick-action-btn').getAttribute('data-action');
            addMedicine(action);
        }
        
    });
}




function removeMedicine(eventId) {
    if (confirm('Are you sure you want to remove this medicine?')) {
        alert(`Medicine ${eventId} removed`);
        renderMedicineInfo('daily');
        setupMedicineInfoListeners();
    }
}

function addMedicine(action) {  
    
    window.history.pushState({}, '', '/medicines/add');
    window.dispatchEvent(new PopStateEvent('popstate'));
}
