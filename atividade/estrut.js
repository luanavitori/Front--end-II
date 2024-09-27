const body = document.querySelector('body');
const ul = document.querySelector('ul');
const ancora = document.querySelector('ancora')
const itensMenu = [
    { nome: 'Início', url: 'index.html'},
    { nome: 'Sobre', url: 'sobre.html'},
    { nome: 'Contato', url: 'contato.html'}
];

ul.style.display = 'flex';
ul.style.gap = '20px';
ancora.setAttribute('href', 'item.url');
ancora.setAttribute('target', '_blank');

ancora.style.color = 'write';
ancora.style.textDecoration = 'none';
ancora.style.fontWeight = 'bold';

body.appendChild(ancora);

ul.style.fontFamily = 'Arial';
ul.style.height = '40px';
body.style.backgroundColor = '#071D41';




itensMenu.forEach(item => {
    item.url
});

itensMenu.forEach(item => {
    item.nome
});
