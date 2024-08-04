/*
3 - Crea una web con bootstrap y js, que contenga un botón input donde se 
pueda cargar una tarea y un botón que al ser presionado agregue dicha tarea a 
una lista, cada elemento ingresado en la lista debe poder ser eliminado con un 
botón creado para ese fin.
*/

document.addEventListener('DOMContentLoaded', function () {
    const ingresoDeTarea = document.querySelector('.ingresoDeTarea');
    const guardarTarea = document.querySelector('.guardarTarea');
    const mostrarTareas = document.querySelector('.mostrarTareas');

    guardarTarea.addEventListener('click', function () {
        const tarea = ingresoDeTarea.value.trim();
        if (tarea !== '') {
            añadirTarea(tarea);
            ingresoDeTarea.value = '';
            ingresoDeTarea.focus();
        }
    });

    function añadirTarea(tarea) {
        const crearLi = document.createElement('li');
        crearLi.className = 'list-group-item d-flex justify-content-between align-items-center';

        const tareaSpan = document.createElement('span');
        tareaSpan.textContent = tarea;
        crearLi.appendChild(tareaSpan);

        const eliminarTarea = document.createElement('button');
        eliminarTarea.className = 'btn btn-danger btn-sm';
        eliminarTarea.textContent = 'Eliminar';
        eliminarTarea.addEventListener('click', function () {
            mostrarTareas.removeChild(crearLi);
        });
        crearLi.appendChild(eliminarTarea);
        mostrarTareas.appendChild(crearLi);
    }
});