
<img width="1600" height="849" alt="screencapture-127-0-0-1-5500-2025-12-04-20_29_23" src="https://github.com/user-attachments/assets/4c200f3a-6a00-493a-a7a5-f9499e940b8b" />

# 📚 Proyecto Libroteca - Catálogo de Libros

## 📝 Descripción General

**Libroteca** es una **maqueta (Mockup) interactiva** que simula la interfaz de un catálogo de alquiler de libros en línea. El proyecto tiene como objetivo principal demostrar habilidades en la maquetación web y la implementación de funcionalidades dinámicas básicas utilizando tecnologías web esenciales.

El diseño sigue una **estructura de caja simple** (Wireframe) con **colores planos**, incorporando efectos visuales como el `hover` y la gestión de estados para mejorar la experiencia de usuario.

---

## 🛠️ Tecnologías Utilizadas

| Tecnología | Rol en el Proyecto |
| :--- | :--- |
| **HTML5** | Estructura semántica del contenido. |
| **CSS3** | Estilos, diseño de *layout* (Flexbox) y efectos de transición (`hover`). |
| **JavaScript (ES6+)** | Implementación de la interactividad del catálogo y la gestión de estados. |
| **Font Awesome (CDN)** | Librería utilizada para los iconos de la cabecera y la barra de proceso. |

---

## 🚀 Instalación y Ejecución

La aplicación se ejecuta de forma local sin necesidad de configuraciones complejas ni servidores.

1.  **Clonar o Descargar:** Obtén los archivos del repositorio:
    * `index.html`
    * `styles.css`
    * `script.js`
2.  **Abrir en Navegador:** Simplemente haz **doble clic** en el archivo `index.html` para abrir la aplicación directamente en tu navegador web predeterminado.

---

## ✨ Funcionalidades Interactivas (JavaScript & CSS)

El proyecto incluye las siguientes interacciones para simular una aplicación real:

### 1. 📂 Navegación por Géneros

* **Acción:** Clic en un enlace de la barra de categorías.
* **Efecto:**
    * El enlace clickeado se marca como **activo** (`.active`).
    * El **Título de la Sección** (`.section-title`) se actualiza dinámicamente (ej., de "Ficción" a "Poesía") para reflejar el género seleccionado.

### 2. ⛔ Estado del Botón "Rentar"

* **Acción:** Clic en el botón **"Rentar"** de cualquier tarjeta de libro.
* **Efecto:**
    * El texto cambia a **"No disponible"**.
    * Se aplica la clase CSS `.no-available`, cambiando el fondo a color **Rojo** y eliminando el `hover`.
    * Si se hace clic de nuevo, el estado se revierte a "Rentar".

### 3. 🔑 Alerta de Inicio de Sesión

* **Acción:** Clic en el botón **"Inicio de Sesión"** en la cabecera.
* **Efecto:** Muestra una ventana de alerta nativa con el mensaje: "Inicio de sesión exitoso".

### 4. 🖱️ Efectos Visuales (`Hover`)

Se han implementado transiciones para guiar al usuario e indicar elementos interactivos:

* **Botones Principales:** Cambio de color de fondo al pasar el *mouse*.
* **Enlaces de Categoría:** El texto se oscurece y pasa a negrita.
* **Tarjetas de Libro:** La tarjeta completa se eleva ligeramente y muestra una sombra (`box-shadow`), sugiriendo que es clickeable.

---

## 🎨 Estructura de Estilos

El CSS está organizado para facilitar la personalización:

* **Paleta de Colores:** Uso de **variables CSS** (`:root`) para definir todos los códigos hexadecimales del diseño.
* **Layout:** Utilización de **Flexbox** para la alineación del *header*, la barra de proceso y la lista de libros (`.book-list`).
* **Responsividad:** (Nota: Este *mockup* está optimizado para la vista de **escritorio**).

---

## 👤 Autor

**Raquel Parra Roldán**
