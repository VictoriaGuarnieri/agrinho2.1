const mario = document.querySelector('.mario');

const jump = () => {
    mario.classList.add('jump');

    setTimeout(() => {
        mario.classList.remove('jump');
    }, 500);
}

// Faz o Mario pular ao apertar qualquer tecla
document.addEventListener('keydown', jump);
