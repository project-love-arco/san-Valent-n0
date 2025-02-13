document.addEventListener("DOMContentLoaded", function () {
    let carrusel = document.querySelector('.imagenes');
    let angulo = 0;
    setInterval(() => {
        angulo += 90;
        carrusel.style.transform = `rotateY(${angulo}deg)`;
    }, 3000);
});

// 💌 Funciones para la carta
function mostrarCarta() {
    document.getElementById("carta").style.display = "block";
}

function cerrarCarta() {
    document.getElementById("carta").style.display = "none";
}

// ❤️ Generar corazones flotantes
function crearCorazones() {
    const corazon = document.createElement("div");
    corazon.classList.add("corazon");
    corazon.innerHTML = "❤️";
    corazon.style.left = Math.random() * 100 + "vw";
    corazon.style.animationDuration = Math.random() * 3 + 3 + "s";
    document.querySelector(".corazones").appendChild(corazon);
    setTimeout(() => corazon.remove(), 5000);
}
setInterval(crearCorazones, 500);

// 🌟 Generar estrellas brillantes
function crearEstrellas() {
    const estrella = document.createElement("div");
    estrella.classList.add("estrella");
    estrella.style.left = Math.random() * 100 + "vw";
    estrella.style.top = Math.random() * 100 + "vh";
    document.body.appendChild(estrella);
    setTimeout(() => estrella.remove(), 2000);
}
setInterval(crearEstrellas, 300);

// 🎁 Mostrar mensaje sorpresa después de 10 segundos
setTimeout(() => {
    document.getElementById("mensajeFinal").style.display = "block";
}, 10000);


function verFlores() {
    window.location.href = "flower.html";
}
