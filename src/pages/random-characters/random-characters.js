import { lite } from '../../scripts/lite.js';
import { FingerPaint } from '../../scripts/finger-paint.js';
import { hiragana } from '../../scripts/hiragana.js';

export let page = lite.extend({
    contentUrl : 'pages/random-characters/random-characters.html',
    initialize : function() {
        this.loadStyleSheet('css/character-practice.css')
        this.fingerPaint = new FingerPaint();
    },
    onContentBound : function() { 
        this.bindElements();
        this.initializeElements();
    },
    bindElements : function() { 
        this.el = {
            charDisplayLeft : 'eng-display',
            charDisplayRight : 'jp-display',
            btnRandomCharacter : 'btn-random-character', 
            canvasContainer : 'canvas-container'  
        }
        for(let k in this.el) { 
            this.el[k] = document.getElementById(this.el[k]); 
        }
    },
    initializeElements : function() { 
        this.el.btnRandomCharacter.addEventListener('click', this.onRandomCharacterClick.bind(this));
        this.el.charDisplayRight.addEventListener('click', this.onCharDisplayClick.bind(this));
        this.el.canvasContainer.appendChild(this.fingerPaint.canvas);
    },
    onRandomCharacterClick : function(ev) { 
        let randChar = this.getRandomCharacter(hiragana);
        this.el.charDisplayLeft.innerHTML = randChar.english;
        this.el.charDisplayRight.innerHTML = randChar.japanese;

        this.fingerPaint.clear();

        this.toggleFilter(this.el.charDisplayRight, true);
    },
    onCharDisplayClick : function(ev) { 
        this.toggleFilter(this.el.charDisplayRight, false);
    },
    toggleFilter : function(el, filterStatus) {
        let filterClass = ' char-display-filter';
        if(filterStatus && !el.className.includes(filterClass)) {
            el.className += filterClass;
        }
        else if(!filterStatus) {
            el.className = el.className.replace(filterClass, '');
        }
    },
    getRandomCharacter : function(alphabet) { 
        let chars = Object.keys(alphabet);
        let rand = Math.floor(Math.random() * chars.length);
        let randChar = chars[rand];

        if(!alphabet[randChar]) { return this.getRandomCharacter(alphabet); }
        return { english : randChar, japanese : alphabet[randChar] }    
    }
});