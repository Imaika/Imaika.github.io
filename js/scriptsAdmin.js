var urlParams = new URLSearchParams(window.location.search)
var username = urlParams.get('usuario')

document.addEventListener('DOMContentLoaded',function(){
    if(username) {
        document.getElementById('welcome').textContent = 'Bienvenido ' + username
    }else {
        document.getElementById('welcome').textContent = 'Bienvenido'
    }
})