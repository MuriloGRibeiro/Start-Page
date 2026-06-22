// Seleciona a imagem central pela classe CSS
const logo = document.querySelector('.imagem-destaque');

// 1. Efeito de Flutuação (como um barco no mar)
logo.animate([
    { transform: 'translateY(0px)' },   /* Posição inicial */
    { transform: 'translateY(-30px)' }, /* Sobe 30 pixels */
    { transform: 'translateY(0px)' }    /* Volta para a posição inicial */
], {
    duration: 4000,       /* Duração de 4 segundos para o ciclo completo */
    iterations: Infinity, /* Repete infinitamente */
    easing: 'ease-in-out' /* Suaviza a aceleração e desaceleração */
});

// 2. Efeito de Piscar a cada x segundos
setInterval(() => {
    logo.animate([
        { opacity: 1 }, /* Visível */
        { opacity: 0 }, /* Invisível */
        { opacity: 1 }  /* Visível novamente */
    ], {
        duration: 300,  /* Pisca de forma rápida (300 milissegundos) */
        easing: 'linear'
    });
}, 3000); /* Executa a cada 3000 milissegundos (3 segundos) */


document.addEventListener('DOMContentLoaded', () => {
    const botaoPlay = document.querySelector('.botao-play');
    if (!botaoPlay) return;

    // Com o efeito Pulso Neon, o JS é quase desnecessário,
    // pois o CSS controla a animação contínua e o hover.
    // Mas você pode usar o JS para, por exemplo, 
    // adicionar uma classe que ative o efeito só depois de 2 segundos.
    
    /* setTimeout(() => {
        botaoPlay.classList.add('efeito-ativo');
    }, 2000); 
    */
});
