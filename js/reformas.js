// Script para el selector de reformas
document.addEventListener('DOMContentLoaded', function() {
    const botonesReforma = document.querySelectorAll('.boton-reforma');
    const contenidosReforma = document.querySelectorAll('.contenido-reforma');
    
    // Función para mostrar el contenido seleccionado
    function mostrarContenido(tipo) {
        // Ocultar todos los contenidos
        contenidosReforma.forEach(contenido => {
            contenido.style.display = 'none';
        });
        
        // Mostrar el contenido seleccionado
        const contenidoSeleccionado = document.getElementById(`contenido-${tipo}`);
        if (contenidoSeleccionado) {
            contenidoSeleccionado.style.display = 'block';
        }
        
        // Actualizar botones activos
        botonesReforma.forEach(boton => {
            if (boton.dataset.tipo === tipo) {
                boton.classList.add('active');
            } else {
                boton.classList.remove('active');
            }
        });
    }
    
    // Añadir event listeners a los botones
    botonesReforma.forEach(boton => {
        boton.addEventListener('click', function() {
            const tipo = this.dataset.tipo;
            mostrarContenido(tipo);
        });
    });
    
    // Mostrar contenido inicial (cocina)
    mostrarContenido('cocina');
});