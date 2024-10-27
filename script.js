let points = 0;

document.getElementById('twist-button').addEventListener('click', () => {
    const pointsEarned = Math.floor(Math.random() * 10) + 1; // Puntos aleatorios entre 1 y 10
    points += pointsEarned;
    document.getElementById('points-display').innerText = `Puntos: ${points}`;
});
