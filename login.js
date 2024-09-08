document.addEventListener('DOMContentLoaded', () => {
    const parentBtn = document.getElementById('parent-btn');
    const childBtn = document.getElementById('child-btn');
    const flipCard = document.getElementById('flip-card');

    parentBtn.addEventListener('click', () => {
        flipCard.classList.remove('flip');
        parentBtn.classList.add('active');
        childBtn.classList.remove('active');
    });

    childBtn.addEventListener('click', () => {
        flipCard.classList.add('flip');
        childBtn.classList.add('active');
        parentBtn.classList.remove('active');
    });

    // Handle form submissions
    document.getElementById('parent-form').addEventListener('submit', (e) => {
        e.preventDefault();
        // Simulate successful parent login
        window.location.href = 'dashboard.html'; // Adjust path if needed
    });

    document.getElementById('child-form').addEventListener('submit', (e) => {
        e.preventDefault();
        // Simulate successful child login
        window.location.href = 'dashboard.html'; // Adjust path if needed
    });
});
