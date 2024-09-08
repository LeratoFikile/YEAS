document.getElementById('send-button').addEventListener('click', function() {
    const userInput = document.getElementById('user-input').value;
    if (userInput.trim() === '') return;

    addMessage(userInput, 'user-message');
    document.getElementById('user-input').value = '';

    setTimeout(() => {
        const response = generateResponse(userInput);
        addMessage(response, 'bot-message');
    }, 500);
});

function addMessage(text, type) {
    const chatBox = document.getElementById('chat-box');
    const messageDiv = document.createElement('div');
    messageDiv.classList.add('message', type);
    messageDiv.innerHTML = `<p>${text}</p>`;
    chatBox.appendChild(messageDiv);
    chatBox.scrollTop = chatBox.scrollHeight;
}

function generateResponse(input) {
    const lowerCaseInput = input.toLowerCase();

    // Greetings
    if (lowerCaseInput.includes('hello') || lowerCaseInput.includes('hi') || lowerCaseInput.includes('hey')) {
        if (lowerCaseInput.includes('hey')) {
            return "Hey there! How can I assist you today?";
        } else if (lowerCaseInput.includes('hello')) {
            return "Hello! How can I help you with your coding questions today?";
        } else if (lowerCaseInput.includes('hi')) {
            return "Hi! What coding challenge can I help you with?";
        }
    }

    // Formal Greetings
    if (lowerCaseInput.includes('good morning') || lowerCaseInput.includes('good afternoon') || lowerCaseInput.includes('good evening')) {
        if (lowerCaseInput.includes('good morning')) {
            return "Good morning! How can I assist you with your coding needs today?";
        } else if (lowerCaseInput.includes('good afternoon')) {
            return "Good afternoon! What coding issues can I help you solve?";
        } else if (lowerCaseInput.includes('good evening')) {
            return "Good evening! How may I assist you with your programming queries?";
        }
    }

    // Positive Feedback
    if (lowerCaseInput.includes('thank you') || lowerCaseInput.includes('thanks')) {
        return "You’re welcome! I’m glad I could help.";
    } else if (lowerCaseInput.includes('great') || lowerCaseInput.includes('awesome') || lowerCaseInput.includes('fantastic')) {
        return "I’m thrilled you think so! If you have more questions, feel free to ask.";
    } else if (lowerCaseInput.includes('good') || lowerCaseInput.includes('nice')) {
        return "Glad to hear that! If you need further assistance, I’m here to help.";
    }

    // Coding Queries
    if (lowerCaseInput.includes('python')) {
        return "You asked about Python! What specific Python coding problem do you need help with?";
    } else if (lowerCaseInput.includes('palindrome')) {
        return "A palindrome is a word that reads the same backward as forward. Try writing a function that checks if a string is a palindrome.";
    } else if (lowerCaseInput.includes('debug')) {
        return "To debug your code, please share the code snippet you're having trouble with, and I'll help you resolve it.";
    } else if (lowerCaseInput.includes('html') || lowerCaseInput.includes('css') || lowerCaseInput.includes('javascript')) {
        return "Are you working on a web development project? Let me know if you need help with HTML, CSS, or JavaScript.";
    }

    // Fallback Response
    return "Sorry, I didn’t understand that. Can you please provide more details about your coding question?";
}
