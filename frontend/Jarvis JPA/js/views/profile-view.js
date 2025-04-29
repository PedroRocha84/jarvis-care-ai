export function renderProfile() {
    const main = document.getElementById('main-content');
    main.innerHTML = "";

    const user = window.authState.user || {};
    
    const profileHeader = document.createElement('div');
    profileHeader.className = 'profile-header';

    const greetingDiv = document.createElement('div');
    greetingDiv.classList.add("firstname");
    const greeting = document.createElement('h1');
    greeting.textContent = `Olá ${user.firstName},`;
    greetingDiv.appendChild(greeting);
    profileHeader.appendChild(greetingDiv);
    

    const viewMedicinesDiv = document.createElement('div');
    const viewMedicinesBtn = document.createElement('a');
    viewMedicinesBtn.href = '/medicines';
    viewMedicinesBtn.className = 'btn btn-primary';
    const medIcon = document.createElement('i');
    medIcon.className = 'fas fa-calendar-alt';
    viewMedicinesBtn.append(medIcon, ' View My Medicine');
    viewMedicinesDiv.appendChild(viewMedicinesBtn);

    const viewScheduleDiv = document.createElement('div');
    const viewScheduleBtn = document.createElement('a');
    viewScheduleBtn.href = '/dashboard';
    viewScheduleBtn.className = 'btn btn-primary';
    const schedIcon = document.createElement('i');
    schedIcon.className = 'fas fa-calendar-alt';
    viewScheduleBtn.append(schedIcon, ' View My Schedule');
    viewScheduleDiv.appendChild(viewScheduleBtn);

    profileHeader.append(viewMedicinesDiv, viewScheduleDiv);

    const profileContainer = document.createElement('div');
    profileContainer.className = 'profile-container';

    const aiQuote = document.createElement('div');
    aiQuote.className = 'aiquote';

    fetch('http://localhost:8080/jarvis/api/ai/quote', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        }
    })
    .then(response => {
        if (!response.ok) { 
            throw new Error('Failed to fetch medicine data');
        }
        
        return response.json(); // 🛠 important: return parsed JSON
    })
    .then(data => {
        const aiQuote = document.querySelector('.aiquote'); 
    
        const quote = document.createElement('h2');
        quote.textContent = data.quote; 
        aiQuote.appendChild(quote);
    })
    .catch(error => {
        console.log(error);
    });

    
    const profileContent = document.createElement('div');
    profileContent.className = 'profile-content';

    const profileSidebar = document.createElement('div');
    profileSidebar.className = 'profile-sidebar';

    const profileSummary = document.createElement('div');
    profileSummary.className = 'profile-summary';

    const avatar = document.createElement('div');
    avatar.className = 'avatar';
    const avatarIcon = document.createElement('i');
    avatarIcon.className = 'fas fa-user-circle';
    avatar.appendChild(avatarIcon);

    const sidebarName = document.createElement('h2');
    sidebarName.textContent = user.firstName || 'User';

    const sidebarEmail = document.createElement('p');
    sidebarEmail.textContent = user.email || '';

    profileSummary.append(avatar, sidebarName, sidebarEmail);

    const profileMenu = document.createElement('nav');
    profileMenu.className = 'profile-menu';

    const linkProfile = document.createElement('a');
    linkProfile.href = '/profile';
    linkProfile.className = 'active';
    const iconProfile = document.createElement('i');
    iconProfile.className = 'fas fa-user';
    linkProfile.append(iconProfile, ' Personal Info');

    const linkHealth = document.createElement('a');
    linkHealth.href = '/health';
    const iconHealth = document.createElement('i');
    iconHealth.className = 'fas fa-heartbeat';
    linkHealth.append(iconHealth, ' Health Dashboard');

    const linkSettings = document.createElement('a');
    linkSettings.href = '/profile/settings';
    const iconSettings = document.createElement('i');
    iconSettings.className = 'fas fa-cog';
    linkSettings.append(iconSettings, ' Settings');

    profileMenu.append(linkProfile, linkHealth, linkSettings);

    profileSidebar.append(profileSummary, profileMenu);

    const profileDetails = document.createElement('div');
    profileDetails.className = 'profile-details';

    const card = document.createElement('div');
    card.className = 'card';

    const cardTitle = document.createElement('h3');
    const infoIcon = document.createElement('i');
    infoIcon.className = 'fas fa-info-circle';
    cardTitle.append(infoIcon, ' Personal Information');

    const detailItem1 = document.createElement('div');
    detailItem1.className = 'detail-item';
    const labelName = document.createElement('label');
    labelName.textContent = 'Full Name';
    const nameValue = document.createElement('p');
    nameValue.textContent = `${user.firstName || ''} ${user.lastName || ''}`.trim() || 'Not specified';
    detailItem1.append(labelName, nameValue);

    const detailItem2 = document.createElement('div');
    detailItem2.className = 'detail-item';
    const labelEmail = document.createElement('label');
    labelEmail.textContent = 'Email';
    const emailValue = document.createElement('p');
    emailValue.textContent = user.email || 'Not specified';
    detailItem2.append(labelEmail, emailValue);

    const editButton = document.createElement('button');
    editButton.className = 'btn btn-edit';
    const editIcon = document.createElement('i');
    editIcon.className = 'fas fa-edit';
    editButton.append(editIcon, ' Edit Profile');

    card.append(cardTitle, detailItem1, detailItem2, editButton);
    profileDetails.appendChild(card);

    profileContent.append(profileSidebar, profileDetails);
    profileContainer.append(aiQuote, profileContent);

    main.append(profileHeader, profileContainer);

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