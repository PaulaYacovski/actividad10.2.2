// Espera a que el DOM esté completamente cargado
document.addEventListener("DOMContentLoaded", () => {
    // Obtiene el botón y el input
    const button = document.getElementById("buttonText");
    const input = document.getElementById("inputText");

    // Añade un event listener al botón
    button.addEventListener("click", () => {
        // Obtiene el valor del input
        const inputValue = input.value;

        // Guarda el valor en localStorage
        localStorage.setItem("storedData", inputValue);

        // Limpia el input después de guardar
        input.value = "";
    });
});
