// Configura la WebApp de Telegram y el tema de colores
window.Telegram.WebApp.ready();
const themeParams = window.Telegram.WebApp.themeParams;
document.body.style.backgroundColor = themeParams.bg_color || "#ffffff";
document.body.style.color = themeParams.text_color || "#00A300";

// Establece el botón principal de Telegram
window.Telegram.WebApp.MainButton.setText('Twist to Earn');
window.Telegram.WebApp.MainButton.setParams({
    color: "#00FF00",
    textColor: "#FFFFFF"
});
window.Telegram.WebApp.MainButton.show();

// Redirige a XorroLocoBot cuando se hace clic en el botón principal
window.Telegram.WebApp.MainButton.onClick(function() {
    window.Telegram.WebApp.openLink("https://t.me/XorroLocoBot");
});

// Contador de twists para recompensa y mensaje en pantalla
let twistCount = 0; // Contador de twists

function registerTwist() {
    twistCount++;

    // Muestra mensaje de éxito
    document.getElementById("message").innerText = `Twist #${twistCount} registrado!`;

    // Otorga recompensa en twists de prueba
    if (twistCount >= 10) {  // Ejemplo de recompensa tras 10 twists
        alert("¡Felicidades! Has ganado una recompensa por 10 twists.");
        twistCount = 0;  // Reinicia el contador
    }
}

// Evento de "Twist" en el botón
document.addEventListener("DOMContentLoaded", function() {
    document.getElementById("twist-button").addEventListener("click", registerTwist);
});
