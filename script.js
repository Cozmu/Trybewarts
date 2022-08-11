let email = document.getElementById('email');
let senha = document.getElementById('password');
console.log(email);

function validacao(event) {
    if (email.value === 'tryber@teste.com' && senha.value === '123456') {
       window.alert('Olá, Tryber!')
    } else {
        window.alert('Email ou senha inválidos.')
    }
}

let botaoLoguin = document.getElementById('botao-loguin');
botaoLoguin.addEventListener('click', validacao);
