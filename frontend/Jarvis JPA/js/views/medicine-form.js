export function renderMedicineForm(){
const main = document.getElementById('main-content');

main.innerHTML = `
    <div class="form-container">
        <div class="medicine-info">
            <div class="medicine-header">
                <div class="photo-profile"></div>
            </div>
            <form class="medicine-form">
                <div class="medicine-details">
                <label>Medicine Name</label>
                <input type="medicine-name" id="medicine-name" name="medicine-name">
            </div>
            </form>
        </div>
    </div>
    `;

}