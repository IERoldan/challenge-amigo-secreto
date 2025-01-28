# Amigo Secreto - Sorteo de Amigos

Este proyecto es una aplicación web simple que permite a los usuarios agregar nombres de amigos, mostrarlos en una lista y realizar un sorteo para seleccionar un "amigo secreto" al azar. La aplicación está construida con HTML, CSS y JavaScript.

## Características

- **Agregar amigos**: Los usuarios pueden ingresar nombres de amigos en un campo de texto y agregarlos a una lista.
- **Formato de nombres**: Los nombres se formatean automáticamente para que la primera letra de cada palabra esté en mayúscula.
- **Eliminar amigos**: Cada amigo en la lista tiene un botón para eliminarlo.
- **Sorteo**: Se puede realizar un sorteo para seleccionar un amigo al azar de la lista.
- **Validación**: El sistema valida que se ingrese un nombre válido antes de agregarlo a la lista.
- **Estado del botón de sorteo**: El botón de sorteo se habilita o deshabilita automáticamente dependiendo de si hay amigos en la lista.

## Cómo Usar

1. **Agregar un amigo**:
   - Ingresa el nombre de un amigo en el campo de texto.
   - Presiona "Agregar" o presiona "Enter" para agregar el nombre a la lista.

2. **Eliminar un amigo**:
   - Cada amigo en la lista tiene un botón de basura (🗑️) a la derecha.
   - Haz clic en el botón de basura para eliminar al amigo de la lista.

3. **Realizar un sorteo**:
   - Cuando tengas varios amigos en la lista, haz clic en el botón "Sortear" para seleccionar un amigo al azar.
   - El amigo seleccionado se mostrará en la sección de resultados y se eliminará de la lista.

## Estructura del Proyecto

- **HTML**: La estructura básica de la página, incluyendo el campo de texto, botones y listas.
- **CSS**: Estilos para la página, incluyendo colores, fuentes y diseño responsivo.
- **JavaScript**: Lógica para agregar, eliminar y sortear amigos.

## Código Principal

El código JavaScript principal incluye las siguientes funciones:

- **`pasarTexto(element, text)`**: Cambia el texto de un elemento HTML.
- **`limpiarCaja()`**: Limpia el campo de texto después de agregar un amigo.
- **`agregarAmigo()`**: Agrega un amigo a la lista y actualiza el DOM.
- **`sortearAmigo()`**: Selecciona un amigo al azar y lo muestra como resultado.
- **`actualizarEstadoBotonSorteo()`**: Habilita o deshabilita el botón de sorteo dependiendo de si hay amigos en la lista.

## Requisitos

- Navegador web moderno (Chrome, Firefox, Safari, Edge, etc.).
- Conexión a Internet (si se utilizan iconos de FontAwesome).

## Instalación

No se requiere instalación. Simplemente abre el archivo `index.html` en tu navegador para usar la aplicación.

## Contribuciones

Si deseas contribuir a este proyecto, siéntete libre de hacer un fork y enviar un pull request con tus mejoras.

---

¡Diviértete! 🎉
