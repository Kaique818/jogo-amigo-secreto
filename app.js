//O principal objetivo deste desafio é fortalecer suas habilidades em lógica de programação. Aqui você deverá desenvolver a lógica para resolver o problema.
let participantes= [];
let listaDeSorteados = [];
let input = document.querySelector('input');
let addButton = document.getElementById('adicionarAmigo()');
let sortButton = document.getElementById('sortearAmigo()');
let resultado = document.getElementById('resultado');
let listaAmigos = document.getElementById('listaAmigos');

function adicionarAmigo() {
    let nome = input.value.trim();
    if (nome == '') {
        resultado.textContent = 'Por favor, insira um nome.';    
    } else if (participantes.includes(nome)) {
        resultado.textContent = 'O participante ' + nome + ' ja foi adicionado.';    
    }
    else {
        participantes.push(nome);
        input.value = '';
        console.log(participantes);
        resultado.textContent = 'Participante ' + nome + ' adicionado com sucesso.';
        listaAmigos.innerHTML = listarParticipantes();

    }
}

function sortearAmigo() {
    if (participantes.length === 0) {
        resultado.textContent = 'Nenhum participante adicionado.';
        return;
    } else if (participantes.length === 1) {
        resultado.textContent = 'Somente um participante foi adicionado. Adicione outro.';
    } else {
        let participantesDisponiveis = participantes.filter(p => !listaDeSorteados.includes(p));

        if (participantesDisponiveis.length === 0) {
            resultado.textContent = 'Todos os participantes já foram sorteados.';
            return;
        }

        let sorteado = participantesDisponiveis[Math.floor(Math.random() * participantesDisponiveis.length)];
        listaDeSorteados.push(sorteado);
        resultado.textContent = 'O participante sorteado foi: ' + sorteado;

        }
}

function listarParticipantes() {
    let lista = '';
    for (let i = 0; i < participantes.length; i++) {
        lista += participantes[i] + '<br>';
    }
    return lista;
}

