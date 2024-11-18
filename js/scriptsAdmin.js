var urlParams = new URLSearchParams(window.location.search)
var username = urlParams.get('usuario')

document.addEventListener('DOMContentLoaded',function(){
    if(username) {
        document.getElementById('welcome').textContent = 'Bienvenido ' + username + " que deseas editar?"
    }else {
        document.getElementById('welcome').textContent = 'Bienvenido'
    }
})

function toggleForm(formId) {
    // Obtener todos los formularios
    const formContainers = document.querySelectorAll('.form-container');
    // Ocultar todos los formularios
    formContainers.forEach(form => form.style.display = 'none');
    // Mostrar solo el formulario seleccionado
    const selectedForm = document.getElementById(formId);
    selectedForm.style.display = 'block';
}