let langAtual = '';

// Checa se já logou antes
window.onload = () => {
    const salvo = localStorage.getItem('nomeUser');
    if(salvo) mostrarPainel(salvo);
}

function logar() {
    const nome = document.getElementById('inputNome').value;
    if(nome) {
        localStorage.setItem('nomeUser', nome);
        mostrarPainel(nome);
    }
}

function mostrarPainel(nome) {
    document.getElementById('boasVindas').innerText = `Olá, ${nome}!`;
    mudarTela('login', 'painel');
}

function abrirEditor(lang) {
    langAtual = lang;
    document.getElementById('tituloEditor').innerText = `Editor ${lang.toUpperCase()}`;
    const salvo = localStorage.getItem(`projeto_${lang}`);
    document.getElementById('campoTexto').value = salvo || '';
    mudarTela('painel', 'editor');
}

function salvar() {
    const code = document.getElementById('campoTexto').value;
    localStorage.setItem(`projeto_${langAtual}`, code);
    alert('Código salvo no navegador!');
}

function irParaPainel() { mudarTela('editor', 'painel'); }

function mudarTela(sai, entra) {
    document.getElementById(sai).classList.add('escondido');
    document.getElementById(entra).classList.remove('escondido');
}

function resetar() {
    if(confirm('Apagar tudo?')) {
        localStorage.clear();
        location.reload();
    }
}
