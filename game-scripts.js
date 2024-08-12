// const gameArea = document.getElementById('game-area');
// const scoreBoard = document.getElementById('score');
// const timerBoard = document.getElementById('timer');
// const magicCharacter = document.getElementById('magic-character');

// let score = 0;
// let timeLeft = 60;
// let gameInterval;
// let frogInterval;

// function getRandomPosition() {
//     const x = Math.floor(Math.random() * (gameArea.clientWidth - 50));
//     const y = Math.floor(Math.random() * (gameArea.clientHeight - 50));
//     return { x, y };
// }

// function createFrog(color) {
//     const frog = document.createElement('div');
//     frog.classList.add('frog', color === 'green' ? 'green-frog' : 'orange-frog');
//     const { x, y } = getRandomPosition();
//     frog.style.left = `${x}px`;
//     frog.style.top = `${y}px`;
//     frog.addEventListener('click', () => transformFrog(frog, color));
//     gameArea.appendChild(frog);
// }

// function transformFrog(frog, color) {
//     if (color === 'green') {
//         score += 10;
//         frog.classList.remove('green-frog');
//         frog.classList.add('beauty');
//         frog.style.backgroundImage = 'url("beauty.png")'; // Replace with your beauty image
//     } else if (color === 'orange') {
//         score += 20;
//         frog.classList.remove('orange-frog');
//         frog.classList.add('gold');
//         frog.style.backgroundImage = 'url("gold.png")'; // Replace with your gold image
//     }
//     scoreBoard.innerText = score;
//     setTimeout(() => frog.remove(), 500); // Remove the frog after transformation
// }

// function startGame() {
//     score = 0;
//     timeLeft = 60;
//     scoreBoard.innerText = score;
//     timerBoard.innerText = timeLeft;

//     gameInterval = setInterval(() => {
//         timeLeft--;
//         timerBoard.innerText = timeLeft;
//         if (timeLeft <= 0) {
//             clearInterval(gameInterval);
//             clearInterval(frogInterval);
//             alert(`Game Over! Your score: ${score}`);
//         }
//     }, 1000);

//     frogInterval = setInterval(() => {
//         const color = Math.random() < 0.5 ? 'green' : 'orange';
//         createFrog(color);
//     }, 1000);
// }

// window.onload = startGame;
const gameArea = document.getElementById('game-area');
const scoreBoard = document.getElementById('score');
const timerBoard = document.getElementById('timer');
const magicCharacter = document.getElementById('magic-character');

let score = 0;
let timeLeft = 60;
let gameInterval;
let frogInterval;

function getRandomXPosition() {
    return Math.floor(Math.random() * (gameArea.clientWidth - 50));
}

function createFrog(color) {
    const frog = document.createElement('div');
    frog.classList.add('frog', color === 'green' ? 'green-frog' : 'orange-frog');
    frog.style.left = `${getRandomXPosition()}px`;
    frog.style.top = `0px`;
    frog.addEventListener('click', () => transformFrog(frog, color));
    gameArea.appendChild(frog);

    // Make the frog fall
    const fallInterval = setInterval(() => {
        let top = parseInt(frog.style.top);
        if (top < gameArea.clientHeight - 50) {
            frog.style.top = `${top + 2}px`; // Adjust the speed of falling
        } else {
            frog.remove();
            clearInterval(fallInterval);
        }
    }, 20);
}

function transformFrog(frog, color) {
    if (color === 'green') {
        score += 10;
        frog.classList.remove('Images/green-frog');
        frog.classList.add('beauty');
        frog.style.backgroundImage = 'url("Images/beauty.png")'; // Replace with your beauty image
    } else if (color === 'orange') {
        score += 20;
        frog.classList.remove('Images/orange-frog');
        frog.classList.add('gold');
        frog.style.backgroundImage = 'url("Images/gold.png")'; // Replace with your gold image
    }
    scoreBoard.innerText = score;
    setTimeout(() => frog.remove(), 500); // Remove the frog after transformation
}

function startGame() {
    score = 0;
    timeLeft = 60;
    scoreBoard.innerText = score;
    timerBoard.innerText = timeLeft;

    gameInterval = setInterval(() => {
        timeLeft--;
        timerBoard.innerText = timeLeft;
        if (timeLeft <= 0) {
            clearInterval(gameInterval);
            clearInterval(frogInterval);
            alert(`Game Over! Your score: ${score}`);
        }
    }, 1000);

    frogInterval = setInterval(() => {
        const color = Math.random() < 0.5 ? 'green' : 'orange';
        createFrog(color);
    }, 1000);
}

// Move the magic character with the mouse
gameArea.addEventListener('mousemove', (e) => {
    const rect = gameArea.getBoundingClientRect();
    const x = e.clientX - rect.left;
    magicCharacter.style.left = `${x - magicCharacter.clientWidth / 2}px`;
});

window.onload = startGame;

// Get the button backToPortfolio
document.addEventListener("DOMContentLoaded", function() {
    let backToPortfolioButton = document.getElementById("backToPortfolio");
  
    if (backToPortfolioButton) { // Check if the button exists
      // When the user clicks on the button, scroll to the portfolio section
      backToPortfolioButton.onclick = function() {
        document.getElementById("portfolio").scrollIntoView({ behavior: 'smooth' });
      }
    } else {
      console.error('Button with ID "backToPortfolio" not found.');
    }
  });