let email = document.getElementById('email');
let senha = document.getElementById('password');
const checkin = document.getElementById('agreement');
const buttonEnviar = document.getElementById('submit-btn');

function validacao() {
    if (email.value === 'tryber@teste.com' && senha.value === '123456') {
       window.alert('Olá, Tryber!')
    } else {
        window.alert('Email ou senha inválidos.')
    }
}

let botaoLoguin = document.getElementById('botao-loguin');
botaoLoguin.addEventListener('click', validacao);

// function enviar (){
//     if (checkin === true){
//         console.log('Chegou aqui!!')
//         buttonEnviar.disabled = false;

//     }
// }

// checkin.addEventListener('click', enviar);