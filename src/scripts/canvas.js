/*
    Adapted from: 
        https://stackoverflow.com/questions/2368784/draw-on-html5-canvas-using-a-mouse
        
 */

export let canvas = document.createElement('canvas');
canvas.width = 150; canvas.height = 150;

canvas.addEventListener('touchmove', draw);
canvas.addEventListener('touchend', resetPosition)

let posA = { x : 0, y : 0 };
let posB = { x : 0, y : 0 };
function resetPosition() {
    posA = { x : 0, y : 0 }
    posB = { x : 0, y : 0 }
}

function setPosition(e) {
    posA.x = posB.x;
    posA.y = posB.y;
    
    posB.x = e.touches[0].pageX - e.target.offsetLeft;
    posB.y = e.touches[0].pageY - e.target.offsetTop;
}

let ctx = canvas.getContext('2d');    
function draw(e) {
    e.preventDefault();

    setPosition(e);
    if(posA.x == 0 && posA.y == 0) { return; }

    ctx.beginPath(); // begin
    ctx.moveTo(posA.x, posA.y); // from
    ctx.lineTo(posB.x, posB.y); // to
    ctx.stroke(); // draw it!
}