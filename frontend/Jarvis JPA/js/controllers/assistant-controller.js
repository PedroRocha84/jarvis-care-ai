import { renderAssistant, addMessage, showContactPrompt } from '../views/assistant-view.js';

export function init() {
    const temp = document.getElementById('main-content');
    temp.innerHTML = '';
    renderAssistant();
    setupEventListeners();
    addMessage("Hello! I'm your Care Assistant. How can I help you today?");
}

function setupEventListeners() {
    const sendBtn = document.getElementById('send-btn');
    const userInput = document.getElementById('user-input');

    sendBtn.addEventListener('click', handleUserMessage);
    userInput.addEventListener('keypress', (e) => {
        if (e.key === 'Enter') handleUserMessage();
    });
}

async function handleUserMessage() {
    const input = document.getElementById('user-input');
    const question = input.value.trim();
    
    if (question) {
        addMessage(question, true);
        input.value = '';
        
      
        const loadingMsg = addMessage("Thinking...", false);
        
        try {
            const response = await queryAssistantAPI(question);
            
            document.getElementById('chat-container').removeChild(loadingMsg);
            
            if (response.answer) {
                addMessage(response.answer);
            } else {
                showContactPrompt();
            }
        } catch (error) {
            document.getElementById('chat-container').removeChild(loadingMsg);
            addMessage("Sorry, I'm having trouble connecting to the service. Please try again later.");
            console.error('API Error:', error);
        }
    }
}

async function queryAssistantAPI(question) {
    
    const API_URL = 'http://localhost:8080/jarvis/api/ai/careassistant';
    
    try {
        const response = await fetch(API_URL, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                'Authorization': `Bearer ${window.authState?.token || ''}`
            },
            body: JSON.stringify({
                question: question,
                userId: window.authState.user?.id
            })
        });

        if (!response.ok) {
            throw new Error(`API request failed with status ${response.status}`);
        }

        return await response.json();
    } catch (error) {
        console.error('Error querying assistant API:', error);
        throw error;
    }
}