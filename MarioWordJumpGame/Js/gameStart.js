const buttons = document.querySelector('.buttons'); 
const gameOver = document.querySelector('.game-over');
const clouds = document.querySelector('.clouds');
const pipe = document.querySelector('.pipe');
const mario = document.querySelector('.mario');

const jump = () => {
    mario.classList.add('jump');

    setTimeout(() => {
        mario.classList.remove('jump');
    }, 500);

}

function Voltar(){
    window.location = "./Home.html";
}

const loop = setInterval(() => {
    const pipePosition = pipe.offsetLeft;
    const marioPosition = +window.getComputedStyle(mario).bottom.replace('px', '');
    const cloudsPosition = clouds.offsetLeft;

    if (pipePosition <= 120 && pipePosition > 0 && marioPosition < 100) {
        
        pipe.style.animation = 'none';
        pipe.style.left = `${pipePosition}px`;

        mario.style.animation = 'none';
        mario.style.bottom = `${marioPosition}px`;

        clouds.style.animation = 'none';
        clouds.style.left = `${cloudsPosition}px`;

        
        mario.style.width = '75px';
        mario.style.marginLeft = '50px';
        mario.src = './img/game-over.png';
        buttons.style.display = 'block';
        gameOver.style.display = 'block';
        clearInterval(loop);
    }

    document.addEventListener('keydown', (event) => {
        const keyName = event.key;
        if (keyName == "Escape"){  
    
            pipe.style.animation = 'none';
            pipe.style.left = `${pipePosition}px`;
    
            mario.style.animation = 'none';
            mario.style.bottom = `${marioPosition}px`;
    
            clouds.style.animation = 'none';
            clouds.style.left = `${cloudsPosition}px`;
        }
    });

}, 10);

document.addEventListener('keydown', jump);

