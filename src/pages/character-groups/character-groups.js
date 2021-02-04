import { lite } from '../../scripts/lite.js';
import { hiragana } from '../../scripts/hiragana.js';
import { FingerPaint } from '../../scripts/finger-paint.js';

export let page = lite.extend({
    contentUrl : 'pages/character-groups/character-groups.html',

    initialize : function() { 
        this.loadStyleSheet('pages/character-groups/random-characters.css')
        this.el = { 
            engDisplay1 : 'eng-display-1',
            engDisplay2 : 'eng-display-2',
            engDisplay3 : 'eng-display-3',
            engDisplay4 : 'eng-display-4',
            engDisplay5 : 'eng-display-5',
            jpDisplay1 : 'jp-display-1',
            jpDisplay2 : 'jp-display-2',
            jpDisplay3 : 'jp-display-3',
            jpDisplay4 : 'jp-display-4',
            jpDisplay5 : 'jp-display-5',
            btnPreviousSet : 'btn-previous-set',
            btnNextSet : 'btn-next-set',
            canvasContainer : 'canvas-container'
        }
    },
    onContentBound : function() { 
        let left = document.getElementById('eng-display-1').getClientRects()[0].left;
        let right = document.getElementById('eng-display-5').getClientRects()[0].right;
        
        this.fingerPaint = new FingerPaint({
            width : right - left
        });

        this.initializeElements();
    },
    initializeElements : function() { 
        for(let k in this.el) {
            this.el[k] = document.getElementById(this.el[k]);
        }

        this.el.btnPreviousSet.addEventListener('click', this.onPreviousSetClick.bind(this));
        this.el.btnNextSet.addEventListener('click', this.onNextSetClick.bind(this));

        this.el.jpDisplay1.addEventListener('click', this.onJPCharClick.bind(this));
        this.el.jpDisplay2.addEventListener('click', this.onJPCharClick.bind(this));
        this.el.jpDisplay3.addEventListener('click', this.onJPCharClick.bind(this));
        this.el.jpDisplay4.addEventListener('click', this.onJPCharClick.bind(this));
        this.el.jpDisplay5.addEventListener('click', this.onJPCharClick.bind(this));
        this.el.canvasContainer.appendChild(this.fingerPaint.canvas);
    },
    direction : { previous : 1, next : 2 },
    // the 'a' char of the current set
    currentChar : null,
    getCharSet : function(alphabet, dir) {  
        let keys = Object.keys(alphabet);
        let currentIdx = keys.findIndex(k => k == (this.currentChar || 'a'));

        let isNext = (dir == this.direction.next);
        let nextIdx = currentIdx + (isNext ? 5 : -5); 
        if(nextIdx < 0) { nextIdx = keys.length - 5; }
        if(nextIdx == keys.length) { nextIdx = 0; }

        this.currentChar = keys[nextIdx]

        return [
            { english : keys[nextIdx], japanese : alphabet[keys[nextIdx]] },
            { english : keys[nextIdx + 1], japanese : alphabet[keys[nextIdx + 1]] },
            { english : keys[nextIdx + 2], japanese : alphabet[keys[nextIdx + 2]] },
            { english : keys[nextIdx + 3], japanese : alphabet[keys[nextIdx + 3]] },
            { english : keys[nextIdx + 4], japanese : alphabet[keys[nextIdx + 4]] },
        ];
    },
    onNextSetClick : function(ev) { 
        let chars = this.getCharSet(hiragana, this.direction.next);
        this.setChars(chars);
        this.toggleFilters();
        this.fingerPaint.clear();
    },
    onPreviousSetClick : function(ev) { 
        let chars = this.getCharSet(hiragana, this.direction.previous);
        this.setChars(chars);
        this.toggleFilters();
        this.fingerPaint.clear();
    }, 
    setChars : function(chars) {
        this.el.engDisplay1.innerHTML = chars[0].english;
        this.el.engDisplay2.innerHTML = chars[1].english;
        this.el.engDisplay3.innerHTML = chars[2].english;
        this.el.engDisplay4.innerHTML = chars[3].english;
        this.el.engDisplay5.innerHTML = chars[4].english;
        
        this.el.jpDisplay1.innerHTML = chars[0].japanese;
        this.el.jpDisplay2.innerHTML = chars[1].japanese;
        this.el.jpDisplay3.innerHTML = chars[2].japanese;
        this.el.jpDisplay4.innerHTML = chars[3].japanese;
        this.el.jpDisplay5.innerHTML = chars[4].japanese;   
    },
    onJPCharClick : function(ev) { 
        this.toggleFilter(ev.target, false);
    },
    toggleFilters : function(status = true) {
        this.toggleFilter(this.el.jpDisplay1, status);
        this.toggleFilter(this.el.jpDisplay2, status);
        this.toggleFilter(this.el.jpDisplay3, status);
        this.toggleFilter(this.el.jpDisplay4, status);
        this.toggleFilter(this.el.jpDisplay5, status);
    },
    toggleFilter : function(el, status = true) { 
        let filterClass = ' char-display-filter';
        if(status && !el.className.includes(filterClass)) {
            el.className += filterClass;
        }
        else if(!status) {
            el.className = el.className.replace(filterClass, '');
        }
    } 
});