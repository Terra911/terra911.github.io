function ValidacionLogin() {
    var username = document.getElementById('usuario').value;
    var password = document.getElementById('password').value;

    // datos de usuario y contraseña
    var correctUsername = 'damian';
    var correctPassword = '12345';

    if (username === correctUsername && password === correctPassword) {
        window.location.href = 'home.html';
    } else {
        alert('Usuario o contraseña incorrecta');
    }
}

function AgregarComentario() {
    var comment = document.getElementById('commentBox').value;

    if (comment.trim() !== "") {
        var commentSection = document.getElementById('comentarios');
        var newComment = document.createElement('p');
        newComment.textContent = comment;
        commentSection.appendChild(newComment);
        document.getElementById('commentBox').value = "";
    }
}

function SubirFormulario() {
    var name = document.getElementById('nombre').value;
    var address = document.getElementById('direccion').value;
    var product = document.getElementById('producto').value;
    var quantity = document.getElementById('cantidad').value;

    var message = 'Compraste ' + quantity + ' unidades de ';

    switch (product) {
        case 'mueble1':
            message += 'Bajo-mesada';
            break;
        case 'mueble2':
            message += 'Soporte Tv';
            break;
        case 'mueble3':
            message += 'Alacena';
            break;
        case 'mueble4':
            message += 'Escritorio';
            break;
        case 'mueble5':
             message += 'Mesa';
             break;
        case 'mueble6':
            message += 'Placard';
            break;
    }
    alert(message);
}