export function renderProfile() {
    const main = document.getElementById('main-content');
    const user = window.authState.user || {};
    
    main.innerHTML = `
        <div class="profile-header">
            <h1>Olá ${user.firstName}, </h1>
            <a href="/medicines" class="btn btn-primary">
                <i class="fas fa-calendar-alt"> </i> View My Medicine
            </a>
            <a href="/dashboard" class="btn btn-primary">
                <i class="fas fa-calendar-alt"></i> View My Schedule
            </a>
        </div>
        <div class="profile-container">
            <div class="aiquote">
                <h2>"Embrace each day with courage; your strength is the light guiding you to healing."</h2>
            </div>
            <div class="profile-content">
                <div class="profile-sidebar">
                    <div class="profile-summary">
                        <div class="avatar">
                            <i class="fas fa-user-circle"></i>
                        </div>
                        <h2>${user.firstName || 'User'}</h2>
                        <p>${user.email || ''}</p>
                    </div>
                    
                    <nav class="profile-menu">
                        <a href="/profile" class="active"><i class="fas fa-user"></i> Personal Info</a>
                        <a href="/health"><i class="fas fa-heartbeat"></i> Health Dashboard</a>
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

export function renderSettings() {
    const main = document.getElementById('main-content');
    const user = window.authState.user || {};
    
    main.innerHTML = `
        <div class="settings-container">
            <h1><i class="fas fa-cog"></i> Account Settings</h1>
            
            <div class="settings-card">
                <h2><i class="fas fa-user-shield"></i> Security</h2>
                <div class="setting-item">
                    <label>Change Password</label>
                    <button id="change-password-btn" class="btn btn-outline">
                        <i class="fas fa-key"></i> Update
                    </button>
                </div>
                <div class="setting-item">
                    <label>Two-Factor Authentication</label>
                    <label class="switch">
                        <input type="checkbox" id="2fa-toggle">
                        <span class="slider round"></span>
                    </label>
                </div>
            </div>
            
            <div class="settings-card">
                <h2><i class="fas fa-bell"></i> Notifications</h2>
                <div class="setting-item">
                    <label>Email Reminders</label>
                    <label class="switch">
                        <input type="checkbox" id="email-notifications" checked>
                        <span class="slider round"></span>
                    </label>
                </div>
                <div class="setting-item">
                    <label>Appointment Alerts</label>
                    <label class="switch">
                        <input type="checkbox" id="appointment-alerts" checked>
                        <span class="slider round"></span>
                    </label>
                </div>
            </div>
            
            <div class="settings-card danger-zone">
                <h2><i class="fas fa-exclamation-triangle"></i> Danger Zone</h2>
                <div class="setting-item">
                    <label>Delete Account</label>
                    <button id="delete-account-btn" class="btn btn-danger">
                        <i class="fas fa-trash-alt"></i> Permanently Delete
                    </button>
                </div>
            </div>
        </div>
    `;
}