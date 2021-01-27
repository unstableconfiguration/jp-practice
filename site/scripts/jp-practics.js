import { hiragana } from './hiragana.js';
import { canvas } from './canvas.js';

let elements = {
    btnRandomCharacter : document.getElementById('btnRandomCharacter'),
    charDisplayLeft : document.getElementById('charDisplayLeft'),
    charDisplayRight : document.getElementById('charDisplayRight')
}    

let getRandChar = function(alphabet) { 
    let chars = Object.keys(alphabet);
    let rand = Math.floor(Math.random() * chars.length);
    let randChar = chars[rand];
    return { english : randChar, japanese : alphabet[randChar] }
}

let toggleFilter = function(filterStatus) {
    let el = elements.charDisplayRight;
    let filterClass = ' charDisplayFilter';
    if(filterStatus && !el.className.includes(filterClass)) {
        el.className += filterClass;
    }
    else if(!filterStatus) {
        el.className = el.className.replace(filterClass, '');
    }
}

let onRandomCharacterClick = function(e) { 
    let randChar = getRandChar(hiragana);
    elements.charDisplayLeft.innerHTML = randChar.english;
    elements.charDisplayRight.innerHTML = randChar.japanese;

    const context = canvas.getContext('2d');
    context.clearRect(0, 0, canvas.width, canvas.height);

    toggleFilter(true);
}

let onCharDisplayClick = function(e) { 
    toggleFilter(false);
}

elements.btnRandomCharacter.addEventListener('click', onRandomCharacterClick);
elements.charDisplayRight.addEventListener('click', onCharDisplayClick);
document.getElementById('canvasContainer').appendChild(canvas);
