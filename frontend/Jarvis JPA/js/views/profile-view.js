export function renderProfile() {
    const main = document.getElementById('main-content');
    main.innerHTML = `
        <div class="container">
            <header>
                <div class="header-content">
                    <div class="logo">Hospital Dra Cristina Santos</div>
                    <div class="user-info">
                        <span>DR. Jorge Gomes</span>
                        <i class="fas fa-user-md"></i>
                    </div>
                </div>
            </header>

            <div class="profile-container">
                <aside class="profile-sidebar">
                    <img src="" alt="Patient Photo" class="profile-pic">
                    <h1 class="patient-name">Paula Lomba</h1>
                    <div class="patient-id">Patient ID: 1</div>

                    <div class="profile-details">
                        <div class="detail-item">
                            <span class="detail-label">Date of Birth</span>
                            <span class="detail-value">March 15, 1985 (Age 38)</span>
                        </div>
                        <div class="detail-item">
                            <span class="detail-label">Address</span>
                            <span class="detail-value">Rua do sol para o mar</span>
                        </div>
                        <div class="detail-item">
                            <span class="detail-label">City</span>
                            <span class="detail-value">Aveiro</span>
                        </div>
                        <div class="detail-item">
                            <span class="detail-label">Zipcode</span>
                            <span class="detail-value">1234-123</span>
                        </div>
                    </div>
                </aside>

                <main class="profile-main">
                    <section class="card">
                        <div class="card-header">
                            <h2 class="card-title">Medical Overview</h2>
                            <button class="btn btn-outline">Edit Information</button>
                        </div>
                        <div class="detail-item">
                            <span class="detail-label">Diagnosis</span>
                            <span class="detail-value">Cancer Type 2</span>
                        </div>
                        <div class="detail-item">
                            <span class="detail-label">Medication</span>
                            <span class="detail-value">Ibuprofeno + Paracetamol 1000</span>
                        </div>
                    </section>
                    <section class="card">
                        <div class="card-header">
                            <h2 class="card-title">Emergency Contacts</h2>
                            <button class="btn btn-outline">Add Contact</button>
                        </div>
                        <div class="emergency-contact">
                            <div class="contact-icon">
                                <i class="fas fa-user"></i>
                            </div>
                            <div class="contact-info">
                                <h4>David Lopes (Husband)</h4>
                                <p>911111111 | david.lopes@email.com</p>
                            </div>
                        </div>
                        <div class="emergency-contact">
                            <div class="contact-icon">
                                <i class="fas fa-user"></i>
                            </div>
                            <div class="contact-info">
                                <h4>Maria Duarte (Mother)</h4>
                                <p>9111111111 | maria@remax.com</p>
                            </div>
                        </div>
                    </section>
                </main>
            </div>
        </div>
    `;
}