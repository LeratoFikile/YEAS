document.addEventListener('DOMContentLoaded', () => {
    const emojiBtn = document.querySelector('.emoji-button');
    const messageInput = document.getElementById('message-input');

    // Emoji picker visibility toggle
    emojiBtn.addEventListener('click', () => {
        // For simplicity, just add emojis directly
        messageInput.value += "😊";
    });

    // Additional functionality for audio and camera buttons can be added here
});
