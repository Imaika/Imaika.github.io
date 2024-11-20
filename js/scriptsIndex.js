document.getElementById("loginForm").addEventListener("submit", function(event){
    event.preventDefault();

    var username = document.getElementById('username').value;
    var password = document.getElementById('password').value;

    if(username === 'admin' && password === 'admin') {
        var url = 'admin.html?usuario=' + username;
        window.location.href = url;
    }else {
        alert("Usuario o contraseña invalidos")
    }
})
