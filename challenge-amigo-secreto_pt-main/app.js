// Array para armazenar os nomes dos amigos
let amigos = [];

// Função para adicionar um amigo à lista
function adicionarAmigo() {
    const input = document.getElementById('amigo');
    const nome = input.value.trim(); // Remove espaços em branco no início e no fim

    // Validação 1: Verifica se o campo está vazio
    if (nome === '') {
        alert('Por favor, insira um nome.'); // Exibe um alerta de erro
        return; // Interrompe a execução da função
    }

    // Validação 2: Verifica se o nome já existe na lista
    if (amigos.includes(nome)) {
        alert('Este nome já foi adicionado. Insira um nome diferente.'); // Exibe um alerta de erro
        return; // Interrompe a execução da função
    }

    // Validação 3: Limita o número de caracteres (ex: 20 caracteres)
    const limiteCaracteres = 20;
    if (nome.length > limiteCaracteres) {
        alert(`O nome deve ter no máximo ${limiteCaracteres} caracteres.`); // Exibe um alerta de erro
        return; // Interrompe a execução da função
    }

    // Adiciona o nome ao array de amigos
    amigos.push(nome);

    // Limpa o campo de entrada
    input.value = '';

    // Atualiza a lista de amigos na tela
    atualizarListaAmigos();
}