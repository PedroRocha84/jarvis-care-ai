export function renderMedicineForm(){
const user = window.authState.user || {};

const main = document.getElementById('main-content');

const formContainer = document.createElement('div');
formContainer.className = 'form-container';

const heading = document.createElement('h2');
heading.textContent = 'Add New Medicine';

const form = document.createElement('form');
form.id = 'medicine-form';

const fields = [
  { id: 'medicineName', label: 'Medicine Name', type: 'text' },
  { id: 'activeIngredient', label: 'Active Ingredient', type: 'text' },
  { id: 'medicineDosage', label: 'Dosage', type: 'text' },
  { id: 'medicineHours', label: 'Hours (e.g., 08:00,20:00)', type: 'text' },
  { id: 'medicineWeekDays', label: 'Week Days (e.g., Monday,Tuesday)', type: 'text' },
  { id: 'lastDayOfMedicine', label: 'Last Day of Medicine', type: 'date' }
];

fields.forEach(field => {
  const group = document.createElement('div');
  group.className = 'form-group';

  const label = document.createElement('label');
  label.setAttribute('for', field.id);
  label.textContent = field.label;

  const input = document.createElement('input');
  input.id = field.id;
  input.type = field.type;
  input.required = true;

  group.appendChild(label);
  group.appendChild(input);
  form.appendChild(group);
});

const actions = document.createElement('div');
actions.className = 'form-actions';

const saveBtn = document.createElement('button');
saveBtn.type = 'submit';
saveBtn.className = 'event-btn save-btn';
saveBtn.textContent = 'Save';

const cancelBtn = document.createElement('button');
cancelBtn.type = 'reset';
cancelBtn.className = 'event-btn cancel-btn';
cancelBtn.textContent = 'Cancel';

actions.appendChild(saveBtn);
actions.appendChild(cancelBtn);
form.appendChild(actions);

form.addEventListener('submit', function (event) {
  event.preventDefault();

  const userId = user.id; 
  const url = `http://localhost:8080/jarvis/api/user/${userId}/medicines/add`;

  const data = {
    medicineName: document.getElementById('medicineName').value,
    activeIngredient: document.getElementById('activeIngredient').value,
    medicineDosage: document.getElementById('medicineDosage').value,
    medicineHours: document.getElementById('medicineHours').value.split(','),
    medicineWeekDays: document.getElementById('medicineWeekDays').value.split(','),
    lastDayOfMedicine: document.getElementById('lastDayOfMedicine').value
  };

  fetch(url, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(data)
  })
    .then(response => {
      if (response.ok) {
        alert('Medicine added successfully!');
        form.reset();
      } else {
        alert('Failed to add medicine.');
      }
    })
    .catch(error => {
      console.error('Error:', error);
      alert('Error adding medicine.');
    });

   
});

formContainer.appendChild(heading);
formContainer.appendChild(form);
main.appendChild(formContainer);


}