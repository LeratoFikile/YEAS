document.addEventListener('DOMContentLoaded', () => {
    const parentBtn = document.getElementById('parent-btn');
    const learnerBtn = document.getElementById('learner-btn');
    const flipCard = document.getElementById('flip-card');

    parentBtn.addEventListener('click', () => {
        flipCard.classList.remove('flip');
        parentBtn.classList.add('active');
        learnerBtn.classList.remove('active');
    });

    learnerBtn.addEventListener('click', () => {
        flipCard.classList.add('flip');
        learnerBtn.classList.add('active');
        parentBtn.classList.remove('active');
    });

    // Set default form
    parentBtn.click();
});
document.addEventListener('DOMContentLoaded', () => {
    const parentBtn = document.getElementById('parent-btn');
    const learnerBtn = document.getElementById('learner-btn');
    const flipCard = document.getElementById('flip-card');

    parentBtn.addEventListener('click', () => {
        flipCard.classList.remove('flip');
        parentBtn.classList.add('active');
        learnerBtn.classList.remove('active');
    });

    learnerBtn.addEventListener('click', () => {
        flipCard.classList.add('flip');
        learnerBtn.classList.add('active');
        parentBtn.classList.remove('active');
    });

    // Set default form
    parentBtn.click();
});
