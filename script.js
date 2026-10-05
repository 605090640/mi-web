/**
 * script.js - Archivo de interactividad para tu primera web
 * Aprenderás sobre: selectores del DOM, eventos, creación de elementos y temporizadores.
 */

// Esperamos a que todo el contenido de la página esté cargado para ejecutar el código
document.addEventListener("DOMContentLoaded", () => {
    console.log("¡JavaScript conectado correctamente!");

    // 1. EFECTO DE SALUDO DINÁMICO SEGÚN LA HORA
    // Seleccionamos el primer título (h1) de la página
    const tituloPrincipal = document.querySelector("h1");
    
    // Obtenemos la hora actual del sistema (0 a 23)
    const horaActual = new Date().getHours();
    let saludo = "¡Hola mundo!";

    if (horaActual >= 6 && horaActual < 12) {
        saludo = "¡Buenos días ☀️!";
    } else if (horaActual >= 12 && horaActual < 20) {
        saludo = "¡Buenas tardes 🌤️!";
    } else {
        saludo = "¡Buenas noches 🌙!";
    }

    // Cambiamos el texto del h1 de forma dinámica
    tituloPrincipal.textContent = saludo;


    // 2. CREAR UN BOTÓN INTERACTIVO DE FORMA DINÁMICA
    // Creamos un elemento <button> desde JavaScript
    const botonInteractivo = document.createElement("button");
    botonInteractivo.textContent = "¡Haz clic para cambiar el color!";
    
    // Le aplicamos estilos básicos directamente con JS (también podrías hacerlo en el CSS)
    botonInteractivo.style.marginTop = "2rem";
    botonInteractivo.style.padding = "0.75rem 1.5rem";
    botonInteractivo.style.fontSize = "1rem";
    botonInteractivo.style.backgroundColor = "#0070f3"; // Color clásico de Vercel
    botonInteractivo.style.color = "white";
    botonInteractivo.style.border = "none";
    botonInteractivo.style.borderRadius = "8px";
    botonInteractivo.style.cursor = "pointer";
    botonInteractivo.style.transition = "background-color 0.3s ease, transform 0.2s ease";

    // Añadimos efectos visuales al pasar el ratón (Hover con JS)
    botonInteractivo.addEventListener("mouseover", () => {
        botonInteractivo.style.backgroundColor = "#0051cc";
        botonInteractivo.style.transform = "scale(1.05)";
    });

    botonInteractivo.addEventListener("mouseout", () => {
        botonInteractivo.style.backgroundColor = "#0070f3";
        botonInteractivo.style.transform = "scale(1)";
    });

    // Evento de clic: cambia el color de fondo de la página de forma aleatoria
    botonInteractivo.addEventListener("click", () => {
        const colorAleatorio = `#${Math.floor(Math.random() * 16777215).toString(16)}`;
        document.body.style.backgroundColor = colorAleatorio;
    });

    // Insertamos el botón al final del cuerpo (body) de la página
    document.body.appendChild(botonInteractivo);


    // 3. CONTADOR DE VISITAS / TIEMPO EN LA PÁGINA
    // Creamos un párrafo pequeño para mostrar cuánto tiempo llevas conectado
    const contadorTiempo = document.createElement("p");
    contadorTiempo.style.marginTop = "1rem";
    contadorTiempo.style.fontSize = "0.9rem";
    contadorTiempo.style.color = "#666";
    
    let segundos = 0;
    document.body.appendChild(contadorTiempo);

    // setInterval ejecuta una función cada cierto tiempo (en este caso, cada 1000ms = 1 segundo)
    setInterval(() => {
        segundos++;
        contadorTiempo.textContent = `Llevas ${segundos} segundos explorando esta página.`;
    }, 1000);
});