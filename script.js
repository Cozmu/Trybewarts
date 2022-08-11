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

let divPai = document.getElementById('teste');
let formPreenchido = document.getElementById('formulario-preenchido');

let submitBotao = document.getElementById('submit-btn');
let nome = document.getElementById('input-name');
let sobrenome = document.getElementById('input-lastname');
let getEmail = document.getElementById('input-email');
let select = document.getElementById('house');
let classFamily = document.querySelectorAll('.class-family');
let checkBox = document.querySelectorAll('.subject');
let classAvaliacao = document.querySelectorAll('.class-avaliacao');
let observacao = document.getElementById('textarea');


function getHouse() {
    return select.options[select.selectedIndex].value;
}
function getRadius() {
    for (let index = 0; index < classFamily.length; index += 1) {
        if (classFamily[index].checked) {
            return classFamily[index].value;
        }
    }
}
function getCheck() {
    let textA = [];
    for (let index = 0; index < checkBox.length; index += 1) {
        if (checkBox[index].checked) {
            textA.push(checkBox[index].value)
        }
    }
    return textA.join(', ');
}
function getAvaliacao() {
    for (let index = 0; index < classAvaliacao.length; index += 1) {
        if (classAvaliacao[index].checked) {
            return classAvaliacao[index].value;
        }
    }
}

function lista() {
    let nomeCompleto = document.createElement('p');
    let email = document.createElement('p');
    let houseOptions = document.createElement('p');
    let familia = document.createElement('p');
    let materias = document.createElement('p');
    let avaliacao = document.createElement('p');
    let obs = document.createElement('p');

    nomeCompleto.innerText = 'Nome: ' + nome.value + sobrenome.value;
    email.innerText = 'Email: ' + getEmail.value;
    houseOptions.innerText = 'Casa: ' + getHouse();
    familia.innerText = 'Familia: ' + getRadius();
    materias.innerText = 'Matérias: ' + getCheck();
    avaliacao.innerText = 'Avaliação: ' + getAvaliacao();
    obs.innerText = 'Observações: ' + observacao.value;

    divPai.appendChild(nomeCompleto);
    divPai.appendChild(email);
    divPai.appendChild(houseOptions);
    divPai.appendChild(familia);
    divPai.appendChild(materias);
    divPai.appendChild(avaliacao);
    divPai.appendChild(obs);

    saveLocalStorage();
}
submitBotao.addEventListener('click', lista);

function saveLocalStorage() {
    localStorage.setItem('inscricao', divPai.innerHTML);
}
function loadLocalStorage() {
    const load = localStorage.getItem('inscricao');
    if (load) {
        divPai.innerHTML = load;
    }
}

window.onload = loadLocalStorage;

