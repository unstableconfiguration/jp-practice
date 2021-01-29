import { lite } from '../../scripts/lite.js';
import { hiragana } from '../../scripts/hiragana.js';
import { canvas } from '../../scripts/canvas.js';
/*
    Create UI: 
        1 row of 5 for eng
        1 row of 5 for jp
            needs filters
        buttons
            next set 
            prev set
        1 row for wide canvas 

*/
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
        btnNextSet : 'btn-next-set'
    },
    initialize : function() { 

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
        this.el.canvasContainer.appendChild(canvas);
    },
    getCharSet : function() { 

    } 
});