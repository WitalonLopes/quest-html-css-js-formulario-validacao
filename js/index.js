const form = document.querySelector('form');
const campo = document.querySelectorAll('input, textarea');
const mensagensErro = document.querySelectorAll('.msg-erro');

form.addEventListener("submit", function (evento) {
    evento.preventDefault();

    campo.forEach(function (campo, index) {
        if (campo.value.trim() === "") {
            campo.classList.add("invalido");
            mensagensErro[index].style.display = "block";
            tudoCerto = false;
        }

        else {
            campo.classList.remove("invalido");
            campo.classList.add("valido");
            mensagensErro[index].style.display = "none";
        }
    });

});