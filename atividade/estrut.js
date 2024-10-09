const itensMenu = [
    { nome: 'Início', url: 'index.html' },
    { nome: 'Sobre', url: 'sobre.html' },
    { nome: 'Contato', url: 'contato.html' }
];


function criarMenu() {
    const ul = document.getElementById('menu');
    itensMenu.forEach(item => {
        const li = document.createElement('li');
        const a = document.createElement('a');
        a.href = item.url;
        a.textContent = item.nome;
        li.appendChild(a);
        ul.appendChild(li);
    });
}
criarMenu();
