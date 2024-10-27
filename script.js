document.addEventListener('DOMContentLoaded', () => {
    let points = 0;
    const twistButton = document.getElementById('twist-button');
    const pointsDisplay = document.getElementById('points-display');
    
    twistButton.addEventListener('click', () => {
        const pointsEarned = Math.floor(Math.random() * 10) + 1;  // Puntos aleatorios entre 1 y 10
        points += pointsEarned;
        pointsDisplay.innerText = `Puntos: ${points}`;
    });
});
