// JavaScript (script.js)

// Initialize CodeMirror
const codeEditor = CodeMirror.fromTextArea(document.getElementById('code-editor'), {
    mode: 'javascript',
    lineNumbers: true,
    theme: 'default',
});

// Make game control functions available globally
window.moveCharacter = function(direction) {
    const step = 10;
    const character = document.getElementById('character');
    let currentLeft = parseInt(window.getComputedStyle(character).left, 10);
    if (direction === 'left') {
        character.style.left = (currentLeft - step) + 'px';
    } else if (direction === 'right') {
        character.style.left = (currentLeft + step) + 'px';
    }
};

window.jumpCharacter = function() {
    const character = document.getElementById('character');
    const gravity = 2;
    let isJumping = character.getAttribute('data-jumping') === 'true';
    if (!isJumping) {
        character.setAttribute('data-jumping', 'true');
        let jumpHeight = 0;
        const jumpInterval = setInterval(() => {
            if (jumpHeight < 100) {
                jumpHeight += 10;
                character.style.bottom = (10 + jumpHeight) + 'px';
            } else {
                clearInterval(jumpInterval);
                const fallInterval = setInterval(() => {
                    if (jumpHeight > 0) {
                        jumpHeight -= gravity;
                        character.style.bottom = (10 + jumpHeight) + 'px';
                    } else {
                        clearInterval(fallInterval);
                        character.setAttribute('data-jumping', 'false');
                    }
                }, 20);
            }
        }, 20);
    }
};

// Initialize game elements
const character = document.getElementById('character');
const obstacles = document.getElementById('obstacles');
const scoreDisplay = document.getElementById('score');
let score = 0;
let obstacleSpeed = 2;
let gameInterval;

// Initialize obstacles
function createObstacle() {
    const obstacle = document.createElement('div');
    obstacle.classList.add('obstacle');
    obstacle.style.left = `${window.innerWidth}px`;
    obstacles.appendChild(obstacle);
    moveObstacle(obstacle);
}

function moveObstacle(obstacle) {
    let obstacleX = window.innerWidth;
    const interval = setInterval(() => {
        obstacleX -= obstacleSpeed;
        obstacle.style.left = `${obstacleX}px`;
        if (obstacleX < -50) {
            clearInterval(interval);
            obstacles.removeChild(obstacle);
            score += 10;
            updateScore();
            createObstacle();
        }
        if (detectCollision(character, obstacle)) {
            alert('Game Over!');
            clearInterval(gameInterval);
        }
    }, 20);
}

function detectCollision(el1, el2) {
    const rect1 = el1.getBoundingClientRect();
    const rect2 = el2.getBoundingClientRect();
    return !(rect1.right < rect2.left || 
             rect1.left > rect2.right || 
             rect1.bottom < rect2.top || 
             rect1.top > rect2.bottom);
}

function updateScore() {
    scoreDisplay.textContent = `Score: ${score}`;
}

function startGame() {
    score = 0;
    updateScore();
    obstacles.innerHTML = '';
    createObstacle();
    gameInterval = setInterval(createObstacle, 2000);
}

document.getElementById('move-left').addEventListener('click', function() {
    window.moveCharacter('left');
});

document.getElementById('move-right').addEventListener('click', function() {
    window.moveCharacter('right');
});

document.getElementById('jump').addEventListener('click', function() {
    window.jumpCharacter();
});

document.getElementById('restart').addEventListener('click', function() {
    startGame();
});

// Execute user code from CodeMirror editor
document.getElementById('run-code').addEventListener('click', function() {
    try {
        // Clear previous errors
        eval(codeEditor.getValue());
    } catch (error) {
        alert('Error in your code: ' + error.message);
    }
});


startGame();
