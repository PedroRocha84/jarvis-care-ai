import { renderAssistant, addMessage, showContactPrompt } from '../views/assistant-view.js';

// Sample knowledge base
const KNOWLEDGE_BASE = {
    treatments: {
        "physical therapy": "Physical therapy typically involves 8-12 sessions over 4-6 weeks, depending on your condition.",
        "chemotherapy": "Chemotherapy treatment plans vary but often involve cycles of treatment followed by recovery periods."
    },
    consultations: {
        "schedule consultation": "You can schedule a consultation through your dashboard or by calling our office.",
        "prepare for consultation": "Bring your medical history, current medications, and any test results to your consultation."
    },
    exams: {
        "blood test": "For most blood tests, fasting for 8-12 hours is required. Check with your doctor for specific instructions.",
        "mri": "MRI exams typically take 30-60 minutes. Remove all metal objects before the procedure."
    }
};

export function init() {
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

function handleUserMessage() {
    const input = document.getElementById('user-input');
    const question = input.value.trim();
    
    if (question) {
        addMessage(question, true);
        input.value = '';
        processQuestion(question);
    }
}

function processQuestion(question) {
    // Simple processing - in a real app you might use NLP here
    const lowerQuestion = question.toLowerCase();
    let foundAnswer = false;

    // Check each category in the knowledge base
    for (const category in KNOWLEDGE_BASE) {
        for (const keyword in KNOWLEDGE_BASE[category]) {
            if (lowerQuestion.includes(keyword)) {
                addMessage(KNOWLEDGE_BASE[category][keyword]);
                foundAnswer = true;
                return;
            }
        }
    }

    if (!foundAnswer) {
        showContactPrompt();
    }
}