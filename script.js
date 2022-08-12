const emailCabecalho = document.getElementById('email');
const senha = document.getElementById('password');

function validacao() {
  if (emailCabecalho.value === 'tryber@teste.com' && senha.value === '123456') {
    window.alert('Olá, Tryber!');
  } else {
    window.alert('Email ou senha inválidos.');
  }
}

const botaoLoguin = document.getElementById('botao-loguin');
botaoLoguin.addEventListener('click', validacao);

// Codigo reutilizado desse site https://cursos.alura.com.br/forum/topico-habitar-desabilitar-botao-65202
// Função que habilita o botão Enviar.
document.getElementById('submit-btn').disabled = true;

document.getElementById('agreement').addEventListener('input', () => {
  const conteudo = document.getElementById('agreement').value;

  if (conteudo !== null && conteudo !== '') {
    document.getElementById('submit-btn').disabled = false;
  } else {
    document.getElementById('submit-btn').disabled = true;
  }
});

// Função que conta as caracteres do campo de texto
document.getElementById('textarea').addEventListener('input', function () {
  const caracteres = this.value.length;
  const contador = document.getElementById('counter');
  contador.innerText = 500 - caracteres;
});

const divPai = document.getElementById('form-data');
const form = document.getElementById('evaluation-form');

const submitBotao = document.getElementById('submit-btn');
const nome = document.getElementById('input-name');
const sobrenome = document.getElementById('input-lastname');
const getEmail = document.getElementById('input-email');
const select = document.getElementById('house');
const classFamily = document.querySelectorAll('.class-family');
const checkBox = document.querySelectorAll('.subject');
const classAvaliacao = document.querySelectorAll('.class-avaliacao');
const observacao = document.getElementById('textarea');

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
  const textA = [];
  for (let index = 0; index < checkBox.length; index += 1) {
    if (checkBox[index].checked) {
      textA.push(checkBox[index].value);
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
const nomeCompleto = document.createElement('p');
const email = document.createElement('p');
const houseOptions = document.createElement('p');
const familia = document.createElement('p');
const materias = document.createElement('p');
const avaliacao = document.createElement('p');
const obs = document.createElement('p');

function lista(e) {
  e.preventDefault();
  form.style.display = 'none';
  nomeCompleto.innerText = `Nome: ${nome.value} ${sobrenome.value}`;
  email.innerText = `Email: ${getEmail.value}`;
  houseOptions.innerText = `Casa: ${getHouse()}`;
  familia.innerText = `Família: ${getRadius()}`;
  materias.innerText = `Matérias: ${getCheck()}`;
  avaliacao.innerText = `Avaliação: ${getAvaliacao()}`;
  obs.innerText = `Observações: ${observacao.value}`;
  divPai.appendChild(nomeCompleto);
  divPai.appendChild(email);
  divPai.appendChild(houseOptions);
  divPai.appendChild(familia);
  divPai.appendChild(materias);
  divPai.appendChild(avaliacao);
  divPai.appendChild(obs);
}
submitBotao.addEventListener('click', lista);
