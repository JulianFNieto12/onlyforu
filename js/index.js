const gifs = [
    "gif1.gif", // Reemplaza con tus GIFs reales
    "gif2.gif",
    "gif3.gif",
    "gif4.gif"
];

const frases = [
    "¿Seguro? Piénsalo...",
    "Te prometo que será inolvidable 💖",
    "Última oportunidad..."
];

let clickCount = 0;

document.getElementById("noButton").addEventListener("click", function () {
    let gifElement = document.getElementById("gif");
    let yesButton = document.getElementById("yesButton");

    if (clickCount < gifs.length) {
        gifElement.src = gifs[clickCount]; // Cambia el GIF
    }

    if (clickCount < frases.length) {
        this.textContent = frases[clickCount]; // Cambia la frase del botón rojo
    }

    yesButton.style.width = `${100 + clickCount * 40}px`; // Agranda el botón verde

    clickCount++;

    if (clickCount === gifs.length) {
        this.style.display = "none"; // Oculta el botón rojo en el último clic
    }
});

document.getElementById("yesButton").addEventListener("click", function () {
    let titleElement = document.querySelector("h2"); // Selecciona el h2
    let gifElement = document.getElementById("gif");
    let buttonsContainer = document.querySelector(".buttons");

    titleElement.textContent = "¡Sabía que dirías que SÍ! 💖";
    gifElement.src = "final-gif.gif"; // Cambia al GIF final (reemplázalo con tu imagen)
    buttonsContainer.style.display = "none"; // Oculta los botones
});
