// Array para armazenar os nomes dos amigos
let amigos = [];

// Função para adicionar um amigo à lista
function adicionarAmigo() {
    const input = document.getElementById('amigo');
    const nome = input.value.trim(); // Remove espaços em branco no início e no fim

    // Validação: verifica se o campo está vazio
    if (nome === '') {
        alert('Por favor, insira um nome.'); // Exibe um alerta de erro
        return; // Interrompe a execução da função
    }

    // Adiciona o nome ao array de amigos
    amigos.push(nome);

    // Limpa o campo de entrada
    input.value = '';

    // Atualiza a lista de amigos na tela
    atualizarListaAmigos();
}

// Função para atualizar a lista de amigos na tela
function atualizarListaAmigos() {
    const listaAmigos = document.getElementById('listaAmigos');
    listaAmigos.innerHTML = ''; // Limpa a lista atual

    // Adiciona cada nome do array à lista na tela
    amigos.forEach((amigo) => {
        const item = document.createElement('li');
        item.textContent = amigo;
        listaAmigos.appendChild(item);
    });
}

// Função para sortear um amigo
function sortearAmigo() {
    // Valida se há amigos disponíveis
    if (amigos.length === 0) {
        alert('Adicione pelo menos um amigo para sortear.'); // Exibe um alerta de erro
        return; // Interrompe a execução da função
    }

    // Gera um índice aleatório
    const indiceAleatorio = Math.floor(Math.random() * amigos.length);

    // Obtém o nome sorteado
    const nomeSorteado = amigos[indiceAleatorio];

    // Mostra o resultado na tela
    const resultado = document.getElementById('resultado');
    resultado.innerHTML = `Amigo sorteado: <strong>${nomeSorteado}</strong>`;
}

// Função para zerar a lista de sorteio
function zerarLista() {
    // Limpa o array de amigos
    amigos = [];

    // Limpa a lista de amigos na tela
    const listaAmigos = document.getElementById('listaAmigos');
    listaAmigos.innerHTML = '';

    // Limpa o resultado do sorteio na tela
    const resultado = document.getElementById('resultado');
    resultado.innerHTML = '';

    // Exibe uma mensagem de confirmação (opcional)
    alert('Lista de sorteio zerada com sucesso!');
}

// Adiciona um event listener para o campo de entrada
document.getElementById('amigo').addEventListener('keydown', function (event) {
    // Verifica se a tecla pressionada foi "Enter" (código 13)
    if (event.key === 'Enter') {
        adicionarAmigo(); // Chama a função para adicionar o nome
    }
});