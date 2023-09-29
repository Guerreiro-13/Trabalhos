let dino = document.getElementById("dino");
let cactus = document.getElementById("cactus");

function jump(){
    dino.classList.add('jump')
    setTimeout (() => {
        dino.classList.remove('jump')
    }, 1500)
    
}

setInterval(()=> {
    let cactusPosition = cactus.offsetLeft;
    let dinoPosition = window.getComputedStyle(dino).bottom.replace('px','')
    /*console.log(cactusPosition)*/
    if (cactusPosition <= 80 && dinoPosition <=80) {
        dino.style.animation = 'none';
        dino.style.bottom = dinoPosition+"px";
        cactus.style.animation = 'none'; 
        cactus.style.left = cactusPosition+"px";
    }

},10)

window.addEventListener('keydown',jump) 