// Archivo: static/custom.js

document.addEventListener('DOMContentLoaded', () => {
    let points = 0; // Contador de puntos total
    const twistButton = document.getElementById('twist-button');
    const pointsDisplay = document.getElementById('points-display');

    // Escucha de evento en el botón "Twist to Earn"
    twistButton.addEventListener('click', () => {
        const pointsEarned = Math.floor(Math.random() * 10) + 1;  // Puntos aleatorios entre 1 y 10
        points += pointsEarned;

        // Muestra el total de puntos actualizados en el contenedor de puntos
        pointsDisplay.innerText = `Puntos: ${points}`;

        // Mensaje opcional de recompensa al alcanzar ciertos puntos
        if (points >= 50) {
            alert("¡Felicidades! Has alcanzado 50 puntos y ganaste una recompensa.");
            points = 0; // Reinicia el contador después de la recompensa
        }
    });
});
