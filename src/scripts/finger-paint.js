

export let FingerPaint = function(options = {}) { 
    let fp = this;
    let canvas = document.createElement('canvas');

    fp.canvas = canvas;
    canvas.width = options.width || 150;
    canvas.height = options.height || 150;

    let posA = { x : 0, y : 0 };
    let posB = { x : 0, y : 0 };
    const onTouchEnd = function() { 
        posA = { x : 0, y : 0 };
        posB = { x : 0, y : 0 };
    }

    const setPosition = function(e) { 
        posA.x = posB.x;
        posA.y = posB.y;

        posB.x = e.touches[0].pageX - e.target.offsetLeft;
        posB.y = e.touches[0].pageY - e.target.offsetTop;
    }

    const ctx = canvas.getContext('2d');
    const onTouchMove = function(e) { 
        e.preventDefault();

        setPosition(e);
        fp.draw(posA, posB);
    }

    fp.draw = function(posA, posB) {
        if(posA.x == 0 && posA.y == 0) { return; }

        ctx.beginPath();
        ctx.moveTo(posA.x, posA.y);
        ctx.lineTo(posB.x, posB.y);
        ctx.stroke();
    }

    fp.clear = function() {
        ctx.clearRect(0, 0, canvas.width, canvas.height);
    }

    canvas.addEventListener('touchmove', onTouchMove);
    canvas.addEventListener('touchend', onTouchEnd);

    return fp;
}