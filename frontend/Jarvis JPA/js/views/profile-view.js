export function renderProfile() {
    const main = document.getElementById('main-content');
    const user = window.authState.user || {};
    
    main.innerHTML = `
     <div class="profile-header">
                <h1>Olá Raquel, </h1>
                <a href="/dashboard" class="btn btn-primary">
                    <i class="fas fa-calendar-alt"></i> View My Schedule
                </a>
            </div>
        <div class="profile-container">
           

            <div class="profile-content">
            <div class = "aiquote">
                <h2>"Embrace each day with courage; your strength is the light guiding you to healing."</h2>
            </div>
                <div class="profile-sidebar">
                    <div class="profile-summary">
                        <div class="avatar">
                            <i class="fas fa-user-circle"></i>
                        </div>
                        <h2>${user.name || 'User'}</h2>
                        <p>${user.email || ''}</p>
                    </div>
                    
                    <nav class="profile-menu">
                        <a href="/profile" class="active"><i class="fas fa-user"></i> Personal Info</a>
                        <a href="/profile/medical"><i class="fas fa-heartbeat"></i> Medical Info</a>
                        <a href="/profile/settings"><i class="fas fa-cog"></i> Settings</a>
                    </nav>
                </div>

                <div class="profile-details">
                    <div class="card">
                        <h3><i class="fas fa-info-circle"></i> Personal Information</h3>
                        <div class="detail-item">
                            <label>Full Name</label>
                            <p>${user.name || 'Not specified'}</p>
                        </div>
                        <div class="detail-item">
                            <label>Email</label>
                            <p>${user.email || 'Not specified'}</p>
                        </div>
                        <button class="btn btn-edit">
                            <i class="fas fa-edit"></i> Edit Profile
                        </button>
                    </div>
                </div>
            </div>
        </div>
    `;
}