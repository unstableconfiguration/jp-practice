import { lite } from '../../scripts/lite.js';
import { hiragana } from '../../scripts/hiragana.js';
import { FingerPaint } from '../../scripts/finger-paint.js';

export let page = lite.extend({
    contentUrl : 'pages/character-groups/character-groups.html',
    el : { 
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
    },
    initialize : function() { 
        this.loadStyleSheet('pages/character-groups/random-characters.css')
        // Canvas is currently a singleton, 
            // we'll need to convert it to something constructable
    },
    onContentBound : function() { 
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
        //this.el.canvasContainer.appendChild(canvas);
    },
    getCharSet : function(alphabet) { 
        // Load sets of 5 from the given alphabet
    },
    onNextSetClick : function(ev) { 
        // Load next 5 using getCharSet
        // Apply filters
        this.toggleFilters();
    },
    onPreviousSetClick : function(ev) { 
        // Load previous 5 using getCharSet 
        // ApplyFilters
        this.toggleFilters();
    }, 
    onJPCharClick : function(ev) { 
        // Remove filter 
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