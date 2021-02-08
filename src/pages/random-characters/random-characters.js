import { lite } from '../../scripts/lite.js';
import { FingerPaint } from '../../scripts/finger-paint.js';
import { hiragana } from '../../scripts/hiragana.js';

export let page = lite.extend({
    contentUrl : 'pages/random-characters/random-characters.html',
    initialize : function() {
        this.loadStyleSheet('css/character-practice.css')
    },
    onContentBound : function() { 
        this.bindElements();
        this.addEventListeners();
        this.addCanvas();
    },
    bindElements : function() { 
        let get = (id) => document.getElementById(id);
        this.el = {
            charDisplayLeft : get('eng-display'),
            charDisplayRight : get('jp-display'),
            btnRandomCharacter : get('btn-random-character'),
            canvasContainer : get('canvas-container')
        }
    },
    addEventListeners : function() { 
        this.el.btnRandomCharacter.addEventListener('click', this.onRandomCharacterClick.bind(this));
        this.el.charDisplayRight.addEventListener('click', this.onCharDisplayClick.bind(this));
    },
    addCanvas : function() { 
        this.fingerPaint = new FingerPaint();
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