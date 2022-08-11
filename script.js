let email = document.getElementById('email');
let senha = document.getElementById('password');

function validacao() {
    if (email.value === 'tryber@teste.com' && senha.value === '123456') {
        window.alert('Olá, Tryber!')
    } else {
        window.alert('Email ou senha inválidos.')
    }
}

let botaoLoguin = document.getElementById('botao-loguin');
botaoLoguin.addEventListener('click', validacao);

// Codigo reutilizado desse site https://cursos.alura.com.br/forum/topico-habitar-desabilitar-botao-65202
// Função que habilita o botão Enviar.
document.getElementById('submit-btn').disabled = true;

document.getElementById('agreement').addEventListener('input', function (event) {
    let conteudo = document.getElementById('agreement').value;

    if (conteudo !== null && conteudo !== '') {
        document.getElementById('submit-btn').disabled = false;
    } else {
        document.getElementById('submit-btn').disabled = true;
    }
})

// Função que conta as caracteres do campo de texto
document.getElementById('textarea').addEventListener('input', function () {
    let caracteres = this.value.length;
    let contador = document.getElementById('counter');
    contador.innerText = 500 - caracteres;
})

