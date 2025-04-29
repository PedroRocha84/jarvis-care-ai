export function renderAssistant() {
    const main = document.getElementById('main-content');
    main.innerHTML = `
        <div class="assistant-container">
            <div class="assistant-header">
                <h2><i class="fas fa-robot"></i> Care Assistant by J.A.R.V.I.S</h2>
                <p>Ask me about treatments, consultations, or exams.</p>
            </div>
            
            <div class="chat-container" id="chat-container">
                <!-- Messages will appear here -->
            </div>
            
            <div class="input-container">
                <input type="text" id="user-input" placeholder="Type your question here..." />
                <button id="send-btn"><i class="fas fa-paper-plane"></i></button>
            </div>
        </div>
    `;
}


export function addMessage(content, isUser = false) {
    const chatContainer = document.getElementById('chat-container');
    const messageDiv = document.createElement('div');
    messageDiv.className = `message ${isUser ? 'user-message' : 'assistant-message'}`;
    messageDiv.innerHTML = `
        <div class="message-content">${content}</div>
        ${!isUser ? '<div class="message-icon"><i class="fas fa-robot"></i></div>' : ''}
    `;
    chatContainer.appendChild(messageDiv);
    chatContainer.scrollTop = chatContainer.scrollHeight;
    return messageDiv;
}

export function showContactPrompt() {
    const contactInfo = `
        <div class="contact-prompt">
            <p>I couldn't find an answer to your question. Please contact our healthcare team:</p>
            <ul>
                <li><i class="fas fa-phone"></i> +351 91999999</li>
                <li><i class="fas fa-envelope"></i> support_class04@codejarvis.com</li>
                <li><i class="fas fa-calendar-alt"></i> <a href="/dashboard">Schedule a consultation</a></li>
            </ul>
        </div>
    `;
    addMessage(contactInfo);
}