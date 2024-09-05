// Espera a que el DOM esté completamente cargado
document.addEventListener("DOMContentLoaded", () => {
    // Obtiene el span donde se mostrará el dato
    const dataSpan = document.getElementById("data");

    // Obtiene el valor almacenado en localStorage
    const storedData = localStorage.getItem("storedData");

    // Muestra el dato en el span
    dataSpan.textContent = storedData || "No hay datos almacenados";
});
