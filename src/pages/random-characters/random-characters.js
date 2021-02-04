import { lite } from '../../scripts/lite.js';
import { FingerPaint } from '../../scripts/finger-paint.js';
import { hiragana } from '../../scripts/hiragana.js';

export let page = lite.extend({
    contentUrl : 'pages/random-characters/random-characters.html',
    el : {
        charDisplayLeft : 'eng-display',
        charDisplayRight : 'jp-display',
        btnRandomCharacter : 'btn-random-character', 
        canvasContainer : 'canvas-container'
    },
    initialize : function() {
        this.loadStyleSheet('pages/random-characters/random-characters.css')
        this.fingerPaint = new FingerPaint();
    },
    onContentBound : function() { 
        this.initializeElements();
    },
    initializeElements : function() { 
        let view = this;
        for(let k in this.el) {
            this.el[k] = document.getElementById(this.el[k]);
        }
        this.el.btnRandomCharacter.addEventListener('click', this.onRandomCharacterClick.bind(this));
        this.el.charDisplayRight.addEventListener('click', this.onCharDisplayClick.bind(this));
        this.el.canvasContainer.appendChild(view.fingerPaint.canvas);
    },
    getRandomCharacter : function(alphabet) { 
        let chars = Object.keys(alphabet);
        let rand = Math.floor(Math.random() * chars.length);
        let randChar = chars[rand];
        return { english : randChar, japanese : alphabet[randChar] }    
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
    onRandomCharacterClick : function(ev) { 
        let randChar = this.getRandomCharacter(hiragana);
        this.el.charDisplayLeft.innerHTML = randChar.english;
        this.el.charDisplayRight.innerHTML = randChar.japanese;

        this.fingerPaint.clear();

        this.toggleFilter(this.el.charDisplayRight, true);
    },
    onCharDisplayClick : function(ev) { 
        this.toggleFilter(this.el.charDisplayRight, false);
    }
});