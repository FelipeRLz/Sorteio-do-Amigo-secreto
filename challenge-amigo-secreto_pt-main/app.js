// Array para armazenar os nomes dos participantes
let participantes = [];

// Função para validar o nome do participante
function validarNome(nome) {
    if (nome === '') {
        alert('Por favor, insira um nome.');
        return false;
    }
    if (participantes.includes(nome)) {
        alert('Este nome já foi adicionado. Insira um nome diferente.');
        return false;
    }
    if (nome.length > 20) {
        alert('O nome deve ter no máximo 20 caracteres.');
        return false;
    }
    return true;
}

// Função para adicionar um participante à lista
function adicionarParticipante() {
    const input = document.getElementById('amigo');
    const nome = input.value.trim();

    if (!validarNome(nome)) return;

    participantes.push(nome);
    input.value = '';
    atualizarListaParticipantes();
}

// Função para atualizar a lista de participantes na tela
function atualizarListaParticipantes() {
    const listaParticipantes = document.getElementById('listaAmigos');
    listaParticipantes.innerHTML = '';

    participantes.forEach((participante) => {
        const item = document.createElement('li');
        item.textContent = participante;
        listaParticipantes.appendChild(item);
    });
}

// Função para sortear um participante
function sortearParticipante() {
    if (participantes.length === 0) {
        alert('Adicione pelo menos um participante para sortear.');
        return;
    }

    const indiceAleatorio = Math.floor(Math.random() * participantes.length);
    const nomeSorteado = participantes[indiceAleatorio];

    exibirResultado(nomeSorteado);
}

// Função para exibir o resultado do sorteio
function exibirResultado(nomeSorteado) {
    const resultado = document.getElementById('resultado');
    resultado.innerHTML = `Amigo sorteado: <strong>${nomeSorteado}</strong>`;
}

// Função para zerar a lista de participantes
function zerarListaParticipantes() {
    participantes = [];
    atualizarListaParticipantes();
    exibirResultado('');
    alert('Lista de sorteio zerada com sucesso!');
}

// Adiciona um event listener para o campo de entrada
document.getElementById('amigo').addEventListener('keydown', function (event) {
    if (event.key === 'Enter') {
        adicionarParticipante();
    }
});