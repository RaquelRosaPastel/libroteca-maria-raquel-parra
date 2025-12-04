📚 Proyecto Libroteca - Catálogo de Libros
📝 Descripción del Proyecto
Libroteca es una maqueta (Wireframe/Mockup) interactiva que simula la interfaz de un catálogo de alquiler de libros en línea. El objetivo principal de este proyecto es demostrar habilidades en la maquetación web y la implementación de funcionalidades dinámicas básicas utilizando HTML, CSS y JavaScript puro.

El diseño sigue una estructura de caja simple y utiliza colores planos para simular un estilo de wireframe pulido, incorporando efectos hover para mejorar la experiencia de usuario.

🛠️ Tecnologías Utilizadas
HTML5: Estructura semántica del contenido.

CSS3: Estilos, diseño de layout (Flexbox) y efectos de transición (hover).

JavaScript (ES6+): Implementación de la interactividad del catálogo y la gestión de estados.

Font Awesome (CDN): Librería utilizada para los iconos de la cabecera y el proceso de compra.

🚀 Instalación y Ejecución
No se requiere ninguna instalación compleja ni servidor.

Clonar o Descargar: Descarga o clona el repositorio que contiene los siguientes archivos:

index.html

styles.css

script.js

Abrir en Navegador: Simplemente haz doble clic en el archivo index.html para abrir la aplicación directamente en tu navegador web predeterminado.

✨ Funcionalidades Interactivas
El proyecto incluye las siguientes interacciones implementadas con JavaScript y CSS:

1. Navegación por Géneros
Acción: Al hacer clic en cualquiera de los enlaces de la barra de categorías (Ficción, Históricos, etc.).

Efecto: El elemento clickeado se marca como activo (.active) y el Título de la Sección (Ficción, Poesía, etc.) se actualiza dinámicamente para reflejar el género seleccionado.

2. Estado del Botón "Rentar"
Acción: Al hacer clic en el botón "Rentar" de cualquier tarjeta de libro.

Efecto:

El texto del botón cambia a "No disponible".

Se aplica la clase CSS .no-available para cambiar el fondo a color gris y eliminar los efectos hover, indicando que la acción ya no está disponible.

Si se hace clic de nuevo, el estado se revierte a "Rentar".

3. Alerta de Inicio de Sesión
Acción: Al hacer clic en el botón "Inicio de Sesión" en la esquina superior derecha.

Efecto: Muestra una ventana de alerta con el mensaje: "Inicio de sesión exitoso".

4. Efectos Hover
Se han añadido transiciones y efectos hover sutiles para mejorar la usabilidad:

Botones de Cabecera: Cambio de color de fondo al pasar el mouse.

Enlaces de Categoría: El texto se hace más oscuro y en negrita.

Tarjetas de Libro: La tarjeta completa se eleva y muestra una sombra suave (box-shadow), indicando que el elemento es interactivo.

Botón Rentar (Estado Disponible): El botón cambia de gris claro a un fondo azul (--color-primary).

🎨 Estructura de Estilos
El diseño se ha basado en la siguiente estructura de layout:

Colores: Uso de variables CSS (:root) para manejar la paleta de colores (Azules y Grises).

Layout: Uso de Flexbox para la alineación del header, la barra de proceso y la lista de libros (.book-list).

Responsividad: (Nota: Este mockup está optimizado para escritorio y no incluye media queries para dispositivos móviles).

👤 Autor
Raquel Parra Roldán