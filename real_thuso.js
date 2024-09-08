let conversationHistory = [];

document.getElementById('send-button').addEventListener('click', function() {
    const userInput = document.getElementById('user-input').value;
    if (userInput.trim() === '') return;

    // Add user message to history and display it
    conversationHistory.push({ type: 'user-message', text: userInput });
    addMessage(userInput, 'user-message');
    document.getElementById('user-input').value = '';

    // Display "Thinking" message
    addMessage('Thinking...', 'bot-message');

    // Make an API request to generate a response
    setTimeout(async () => {
        const response = await generateResponse(userInput);
        // Replace "Thinking..." message with actual response
        replaceLastMessage(response, 'bot-message');
        // Update conversation history
        conversationHistory.push({ type: 'bot-message', text: response });
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

function replaceLastMessage(newText, type) {
    const chatBox = document.getElementById('chat-box');
    const lastMessage = chatBox.lastElementChild;
    if (lastMessage && lastMessage.classList.contains(type)) {
        lastMessage.innerHTML = `<p>${newText}</p>`;
    }
}

async function generateResponse(userInput) {
    const response = await fetch('/generate-response', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ input: userInput })
    });
    const data = await response.json();
    return data.response;
}
