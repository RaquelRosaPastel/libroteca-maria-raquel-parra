document.addEventListener("DOMContentLoaded", () => {
  // ============================================================
  // 1. CAMBIO DINÁMICO DEL TÍTULO SEGÚN EL GÉNERO SELECCIONADO
  // ============================================================

  // Selecciona todos los enlaces de categorías
  const categoryLinks = document.querySelectorAll(".category-link");

  // Selecciona el elemento donde se muestra el título de la sección
  const sectionTitle = document.querySelector(".section-title");

  // Contenedor del título (usado para hacer scroll automático)
  const sectionTitleBar = document.querySelector(".section-title-bar");

  // Recorre cada enlace de categoría
  categoryLinks.forEach((link) => {
    link.addEventListener("click", (event) => {

      // Evita que el enlace ejecute su comportamiento por defecto (recargar)
      event.preventDefault();

      // Elimina la clase "active" de todos los enlaces
      categoryLinks.forEach((c) => c.classList.remove("active"));

      // Agrega la clase "active" solo al enlace seleccionado
      event.target.classList.add("active");

      // Obtiene el texto del enlace clickeado (nombre del género)
      const selectedGenre = event.target.textContent;

      // Actualiza el título dinámicamente con el género elegido
      sectionTitle.textContent = selectedGenre;

      // Desplaza suavemente la vista hasta el título de la sección
      sectionTitleBar.scrollIntoView({ behavior: "smooth" });
    });
  });

  // ============================================================
  // 2. CAMBIO DE ESTADO DEL BOTÓN "RENTAR" A "NO DISPONIBLE"
  // ============================================================

  // Selecciona todos los botones de renta
  const rentButtons = document.querySelectorAll(".rent-btn");

  // Recorre cada botón
  rentButtons.forEach((button) => {
    button.addEventListener("click", () => {

      // Verifica si el botón está en estado "Rentar"
      if (button.textContent === "Rentar") {

        // Cambia el texto a "No disponible"
        button.textContent = "No disponible";

        // Cambia estilos visuales para reflejar el estado deshabilitado
        button.style.backgroundColor = "#d10000"; // Fondo rojo
        button.style.color = "#ffffff"; // Texto blanco
        button.style.borderColor = "#9ca3af"; // Borde gris

      } else {
        // Si se vuelve a hacer clic, se restaura al estado original

        button.textContent = "Rentar"; // Texto original
        button.style.backgroundColor = "#f3f4f6"; // Fondo claro original
        button.style.color = "#1f2937"; // Texto oscuro original
        button.style.borderColor = "#000000"; // Borde negro original
      }

      // NOTA IMPORTANTE:
      // Lo ideal a nivel profesional es manejar estos cambios
      // agregando y quitando clases CSS en lugar de modificar estilos con .style.
    });
  });

  // ============================================================
  // 3. ALERTA AL HACER CLIC EN EL BOTÓN "INICIO DE SESIÓN"
  // ============================================================

  // Selecciona el botón de inicio de sesión
  const loginButton = document.querySelector(".auth-buttons .btn.primary");

  // Verifica que el botón exista antes de asignar el evento
  if (loginButton) {
    loginButton.addEventListener("click", () => {

      // Muestra un mensaje de confirmación al usuario
      alert("Inicio de sesión exitoso");

    });
  }
});
